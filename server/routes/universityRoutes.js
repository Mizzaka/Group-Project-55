import express from 'express'
const universityRouter = express.Router()

import { getAllUnivesities, createUniversity } from '../controllers/universityController.js'

universityRouter.route("/").get(getAllUnivesities).post(createUniversity)

export {universityRouter}