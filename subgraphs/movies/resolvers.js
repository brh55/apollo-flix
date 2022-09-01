const resolvers = {
  Query: {
    movies: (_, __, { dataSources }) => {
      return dataSources.contentAPI.getAllMovies();
    },
    movie: (_, { id }, { dataSources }) => {
      return dataSources.contentAPI.getLocation(id);
    },
  },
  Location: {
    __resolveReference: ({id}, {dataSources}) => {
      return dataSources.contentAPI.getLocation(id);
    }
  }
};

module.exports = resolvers;
