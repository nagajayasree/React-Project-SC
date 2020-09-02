import * as genresAPI from "./fakeGenreService";

const feedPosts = [
  {
    id: "sanscentralpost613",
    title: "Title1",
    genre: { id: "sanscentralpost616", name: "Feed" },
    description:
      "Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
  },
  {
    id: "sanscentralpost643",
    title: "Title2",
    genre: { id: "sanscentralpost616", name: "Feed" },
    description:
      "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
  },
  {
    id: "sanscentralpost645",
    title: "Title3",
    genre: { id: "sanscentralpost616", name: "Feed" },
    description:
      "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
  },
  {
    id: "sanscentralpost623",
    title: "Title4",
    genre: { id: "sanscentralpost616", name: "Feed" },
    description:
      "Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
  },
  {
    id: "sanscentralpost653",
    title: "Title5",
    genre: { id: "sanscentralpost616", name: "Feed" },
    description:
      "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
  },
  {
    id: "sanscentralpost675",
    title: "Title6",
    genre: { id: "sanscentralpost616", name: "Feed" },
    description:
      "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
  },
  {
    id: "sanscentralpost353",
    title: "Title7",
    genre: { id: "sanscentralpost616", name: "Feed" },
    description:
      "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
  },
  {
    id: "sanscentralpost775",
    title: "Title8",
    genre: { id: "sanscentralpost616", name: "Feed" },
    description:
      "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
  },
  {
    id: "sanscentralpost765",
    title: "Title9",
    genre: { id: "sanscentralpost616", name: "Feed" },
    description:
      "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
  },
];

export function getfeedPosts() {
  return feedPosts;
}

export function getfeedPost(id) {
  return feedPosts.find((p) => p.id === id);
}

export function savefeedPost(post) {
  let feedPostInDb = feedPosts.find((p) => p.id === post.id) || {};
  feedPostInDb.name = post.name;
  feedPostInDb.genre = genresAPI.genres.find((g) => g.id === post.genreId);
  feedPostInDb.title = post.title;
  feedPostInDb.description = post.description;

  if (!feedPostInDb.id) {
    feedPostInDb.id = Date.now();
    feedPosts.push(feedPostInDb);
  }
  return feedPostInDb;
}
