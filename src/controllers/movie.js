import mongoose from "mongoose";
import Movie from '../models/movie.js';

export const createMovie = async (req, res) => {
    try {
        const {title, rating, poster, slug, quality, releaseDate, uploadedOn, embedUrl} = req.body
        const movie = new Movie({
            title,
            rating, 
            slug,
            poster,
            quality,
            releaseDate,
            uploadedOn,
            embedUrl
        })
        await movie.save()
        res.status(200).json({message: "Created Successfully"})
    } catch (error) {
        res.status(500).json(error)
    }
}