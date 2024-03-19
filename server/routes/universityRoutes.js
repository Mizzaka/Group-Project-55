import express from 'express'
const universityRouter = express.Router()

import { getAllUnivesities } from '../controllers/universityController.js'

universityRouter.route("/").get(getAllUnivesities)

export {universityRouter}