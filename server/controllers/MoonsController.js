import express from 'express'
import _moonsService from '../services/MoonsService'

export default class MoonsController {
  async getAllMoons(req, res, next) {
    let moons = await _moonsService.find()
    res.send(moons)
  } catch(error) {
    next(error)
  }
}

async getMoon(req, res, next){
  try {
    let moon = await = _moonsService.findById(req.URLSearchParams.moonId)
    if (!moon) {
      return res.status(400).send("The Moon of Davin is ripe with Chaos!")
    }
    res.send(planet)
  }catch (error) {next(error)}
  }

  async createMoon(req, rez, next){
    try {
      let moon = await _moonsService.create(req.body)
      res.send(moon)
    }catch (error){next(error)}
  }

  async editMoon(req, res, next){
    try{
      let editMoon = await _moonsService.findByIdAndUpdate(req.params.moonId, req.body, {new:true})
      res.send(editMoon)
    }catch (error){next(error)}
  }

  async destroyMoon(req, res, next){
    try {
      let blowUpMoon = await _moonsService.findByIdAndDelete(req.params.moonId)
      res.send('Exterminatus Complete!')
    }catch (error){
      next(error)
    }
  }

   constructor(){
     this.router = express.Router()
.get('', this.getAllMoons)
.get('/:moonId', this.getMoon)
.post('', this.createMoon)
.put('/:moonId', this.editMoon)
.delete('/:moonId', this.blowUpMoon)
   }
  } 

 

