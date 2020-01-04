import people, {
  getById,
  getMovieById,
  getMovies,
  delMovie,
  addMovie
} from './db';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    delMovie: (_, { id }) => delMovie(id)
  }
};

export default resolvers;
