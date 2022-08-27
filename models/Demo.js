import mongoose from 'mongoose'

const DemoSchema = new mongoose.Schema({
  fileBody: {
    type: String,
  },
})

export default mongoose.models.Demo || mongoose.model('Demo', DemoSchema)
