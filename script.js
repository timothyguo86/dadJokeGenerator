const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const tweetButton = document.getElementById('tweetBtn')
const tweetIntent = 'https://twitter.com/intent/tweet?text='

// Fetch a Joke
const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  try {
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()

    jokeEl.innerHTML = data.joke

    tweetButton.href =
      tweetIntent +
      encodeURIComponent(
        data.joke +
          '\n\t~ via #tweetadadjoke on Codepen https://codepen.io/timothyguo/full/dymOOxB'
      )
  } catch (error) {
    return 'No Joke For You'
  }
}

generateJoke()

jokeBtn.addEventListener('click', generateJoke)
