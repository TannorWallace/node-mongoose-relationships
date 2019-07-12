import express from 'express'
import _starsService from '../services/StarsService.js'
import _planetService from '../services/PlanetsService.js'

export default class StarsController {

  async getAllStars(req, res, next) {
    try {
      let stars = await _starsService.find()
      res.send(stars)
    } catch (err) { next(err) }
  }

  async getStar(req, res, next) {
    try {
      let star = await _starsService.findById(req.params.starId)
      if (!star) {
        return res.status(400).send("Thats not a star!")
      }

      res.send(star)
    } catch (error) {
      next(error)
    }
  }
  async getPlanetsByStar(req, res, next) {
    try {
      let planets = await _planetService.find({ star: req.params.starId })
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      let star = await _starsService.create(req.body)
      res.send(star)
    } catch (err) { next(err) }
  }

  async editStar(req, res, next) {
    try {
      let editStar = await _starsService.findByIdAndUpdate(req.params.starId, req.body, { new: true })
      res.send(editStar)
    } catch (error) {
      next(error)
    }
  }

  async deleteStar(req, res, next) {
    try {
      let deleteStar = await _starsService.findByIdAndDelete(req.params.starId)
      res.send("SUPERNOVA!")
    } catch (error) {
      next(error)
    }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllStars)
      .get('/:starId', this.getStar)
      .get('/starId/planets', this.getPlanetsByStar)
      .post('', this.createStar)
      .put('/:starId', this.editStar)
      .delete('/:starId', this.deleteStar)
  }

}