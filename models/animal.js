import mongoose from 'mongoose'

const animal = new mongoose.Schema({ 
    name: String,
    color: String,
    age: Number
});

const animalModel = mongoose.model('animal', animal, "animals")

export default animalModel