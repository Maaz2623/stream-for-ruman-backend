import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number || null,
        required: true
    },
    slug: String,
    poster: String,
    quality: String,
    releaseDate: String,
    uploadedOn: {
        type: Date,
        default: Date.now()
    },
    embedUrl: String
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie