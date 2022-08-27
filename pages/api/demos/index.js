import dbConnect from '../../../lib/dbConnect'
import Demo from '../../../models/Demo'
import fs from 'fs'
const shell = require('shelljs');

export default async function handler(req, res) {
  const {
    method,
    body,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const demos = await Demo.find({})
        res.status(200).json({ success: true, data: demos })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        fs.writeFileSync('api/newfiles/file', body.fileBody);
        shell.exec('chmod +x ./script.sh && ./script.sh');
        const demo = await Demo.create(
          req.body
        )
        res.status(201).json({ success: true, data: demo })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
