import express from 'express'
import _starsService from '../services/StarsService.js'
import _planetService from '../services/PlanetsService.js'

export default class StarsController {

  async getPlanetsByStar(req, res, next) {
    try {
      let planets = await _planetService.find({ star: req.params.starId })
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  addPlanet(arg0, addPlanet) {
    throw new Error("Method not implemented.");
  }

  async createStar(req, res, next) {
    try {
      let star = await _starsService.create(req.body)
      res.send(star)
    } catch (err) { next(err) }
  }

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

  async addStar(req, res, next) {
    try {
      let star = await _starsService.findById(req.params.starId)
      star.planet.push(req.body.planetId)
      await star.save(err => {
        if (err) {
          next(err)
        }
      })
      res.send(star)
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllStars)
      .get('/:starId', this.getStar)
      .get('/starId/planets', this.getPlanetsByStar)
      .post('', this.createStar)
      .put('/:starId/planets', this.addPlanet)
      .delete('/:starId', this.deleteStar)
  }

}