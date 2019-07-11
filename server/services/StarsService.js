import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  galaxy: { type: ObjectId, ref: 'Galaxy', required: true },
  planets: [{ type: ObjectId, ref: 'Planet' }]
}, { timestamps: true })

export default mongoose.model('Star', _schema)