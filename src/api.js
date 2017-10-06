export function fetchHackerNews(count = 50) {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => res.json())
    .then((ids) => (
      Promise.all(
        ids.slice(0, count).map((id, index) => (
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
          .then(res => res.json())
          .then((story) => Object.assign({}, story, {rank: index + 1}))
        ))
      )
    ))
  ;
}
