import express from "express";
import {createMovie} from '../controllers/movie.js'

const router = express.Router()


router.post('/create', createMovie)

export default router