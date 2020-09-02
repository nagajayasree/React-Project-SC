export const genres = [
  { id: "sanscentralpost616", name: "Feed" },
  { id: "sanscentralpost618", name: "Video" },
  { id: "sanscentralpost620", name: "Audio" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
