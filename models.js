const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  duration: Number,
  director: String,
  category: { type: 'ObjectId', ref: 'Categories' },
});
const Movie = mongoose.model('Movie', MovieSchema);

const CategoriesSchema = new mongoose.Schema({
  category: String,
});
const Categories = mongoose.model('Categories', CategoriesSchema);

module.exports.movie = Movie;
module.exports.categories = Categories;
