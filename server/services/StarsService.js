import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, lowercase: true },
  galaxy: { type: ObjectId, ref: 'Galaxy', required: true, unique: true, lowercase: true },
  planets: [{ type: ObjectId, ref: 'Planet', required: true, unique: true, lowercase: true }]

}, { timestamps: true })

export default mongoose.model('Star', _schema)