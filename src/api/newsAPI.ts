export async function fetchNewsJson() {
  const data = await fetch('https://reactnative.dev/movies.json');
  const json = await data.json();
  console.log('Movies', json.movies);
  return json.movies;
}
