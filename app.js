document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://st2.depositphotos.com/1424188/12247/i/450/depositphotos_122471052-stock-photo-woman-pilates-ball-exercises-fitness.jpg")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 80;
            image.height = 80;
         })
    }

})

s