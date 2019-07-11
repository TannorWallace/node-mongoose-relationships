import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId
let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  atmosphere: { type: String, required: true },
  moons: { type: Boolean, default: false },
  numOfMoons: { type: Number, default: 0 },
  star: { type: ObjectId, ref: 'star', required: true },

}, { timestamps: true })

export default mongoose.model('Planets', _schema)