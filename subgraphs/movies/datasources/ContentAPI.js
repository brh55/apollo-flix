const data = require('./data.json');

class ContentAPI {
  getAllMovies() {
    return data.filter(content => content.type === "Movie");
  }

  getMovie(id) {
    return data.find(result => result.id === id);
  }
}

module.exports = ContentAPI;
