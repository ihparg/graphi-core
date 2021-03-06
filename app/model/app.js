/**
 * model: app
 * 由 graphi-plugin 自动生成，不要修改
 */
'use strict'
const mongooseDelete = require('mongoose-delete')
module.exports = ({ mongoose }) => {
  const Schema = mongoose.Schema
  const app = new Schema({
    name: { type: String },
    description: { type: String },
    lastVersion: { type: String },
    visibility: { type: Number, default: 0, enum: [ 0, 1, 2 ] },
    users: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'user' },
        role: { type: Number, default: 4, enum: [ 1, 2, 3, 4 ] },
      },
    ],
    status: { type: Number, default: 0, enum: [ 0, 2 ] },
    owner: { type: Schema.Types.ObjectId, ref: 'user' },
    tokens: [
      {
        _id: { type: Schema.Types.ObjectId },
        description: { type: String },
        createdAt: { type: Date },
        createdBy: { type: String },
        token: { type: String },
      },
    ],
  }, {
    minimize: false,
    timestamps: {},
  })
  app.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true })
  return mongoose.model('app', app)
}
