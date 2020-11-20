const backgroundColors = {
    1: "#f4faf3",
    2: "#fee1eb",
    3: "#fae1d6",
    4: "#e8e8f0"
}

function randomNum() {
    return Math.floor(Math.random() * 4 + 1)
}

function changeColour() {
    let photos = document.getElementsByClassName("flip-card-back");
    for (let i = 0; i < photos.length; i++) {
        photos[i].style.backgroundColor = backgroundColors[randomNum()]
    }
}
