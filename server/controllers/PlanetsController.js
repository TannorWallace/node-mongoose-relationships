import express from 'express'
import _planetsService from '../services/PlanetsService.js'

export default class PlanetsController {
  async createPlanet(req, res, next) {
    try {
      let planet = await _planetsService.create(req.body)
      res.send(planet)
    } catch (err) { next(err) }
  }
  async getAllPlanets(req, res, next) {
    try {
      let planets = await _planetsService.find()
      res.send(planets)
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllPlanets)
      .post('', this.createPlanet)
  }
}