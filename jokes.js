window.onscroll = function(){myFunction()};
const navbar = document.querySelector(".navbar");
const logoSpan = document.querySelector(".lioSpan");
var navLinks = document.getElementsByClassName("navLinks");

function myFunction() {
    if(window.pageYOffset > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

let highlightedJoke = document.querySelector('.highlightedJoke');
let jokesul = document.querySelector('.jokesul');
const button = document.querySelector('.newJokes');

//an async function always returns a promise
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}

let k = 0;
const addDadJoke = async () => {
    const newLI = document.createElement('LI');
    const newSpan = document.createElement('SPAN');
    if(k%2 === 0) {
        newSpan.classList.add("changingAboutMe")
    }
    const jokeText = await getDadJoke();
    newSpan.textContent = jokeText;
    newLI.append(newSpan);
    jokesul.append(newLI);
}

const getHighJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        highlightedJoke.textContent = res.data.joke;
    } catch (e) {
        highlightedJoke.textContent = "No New Jokes Available Now :(";
    }
}


getHighJoke();
button.addEventListener('click', function() {
    ++k;
    addDadJoke();
});