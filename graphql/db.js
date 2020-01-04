const people = [
  {
    id: '1',
    name: 'G1',
    age: 12,
    gender: 'male'
  },
  {
    id: '2',
    name: 'G2',
    age: 12,
    gender: 'female'
  },
  {
    id: '4',
    name: 'G4',
    age: 122,
    gender: 'male'
  },
  {
    id: '10',
    name: 'G10',
    age: 102,
    gender: 'female'
  }
];

export const getById = id => {
  const person = people.filter(p => p.id === String(id));
  console.log(person);
  return person[0];
};

let movies = [
  {
    id: '1',
    name: 'G1',
    age: 12,
    gender: 'male'
  },
  {
    id: '2',
    name: 'G2',
    age: 12,
    gender: 'female'
  },
  {
    id: '4',
    name: 'G4',
    age: 122,
    gender: 'male'
  },
  {
    id: '10',
    name: 'G10',
    age: 102,
    gender: 'female'
  }
];

export const getMovies = () => movies;
export const getMovieById = id => {
  const mo = movies.filter(m => m.id === String(id));
  console.log(mo);
  return mo[0];
};
export const delMovie = id => {
  const cleaned = movies.filter(m => m.id !== String(id));
  if (movies.length > cleaned.length) {
    movies = cleaned;
    return true;
  }
  return false;
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

export default people;
