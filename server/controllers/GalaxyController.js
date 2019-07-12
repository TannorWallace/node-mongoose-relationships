import express from 'express'
import _galaxyService from '../services/GalaxyService.js'
import _starService from '../services/StarsService.js'

export default class GalaxyController {

  async getAllGalaxys(req, res, next) {
    try {
      let galaxys = await _galaxyService.find()
      res.send(galaxys)
    } catch (err) { next(err) }
  }

  async createGalaxy(req, res, next) {
    try {
      let galaxy = await _galaxyService.create(req.body)
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  async getOneGalaxyWithStars(req, res, next) {
    try {
      let stars = await _starService.find({ galaxy: req.params.galaxyId })
    } catch (error) { next(error) }

  }


  constructor() {
    this.router = express.Router()
      .get('', this.getAllGalaxys)
      .get('/galaxyId/stars', this.getOneGalaxyWithStars)
      .post('', this.createGalaxy)
  }
}