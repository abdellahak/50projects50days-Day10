let joketext = document.getElementById('joke')
let jokeButton = document.getElementById('btnjoke')
jokeButton.onclick = getJoke
getJoke()


function getJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(Response => Response.json())
    .then(data => {
        joketext.innerText = data.joke
    })
}