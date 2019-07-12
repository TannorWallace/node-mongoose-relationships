import { model } from "mongoose";

import mongoose from 'mongoose'

let ObjectId = Mongoose.Schema.Types.ObjectId

let _schema = mongoose.Schema({
  name: { type: String, required: true, unique: true, lowercase: true },
  planet{ type: ObjectId, ref: 'Planet', required: true.lowercase: true}
}, { timestamps: true })

export default mongoose.model('Planet', _schema)