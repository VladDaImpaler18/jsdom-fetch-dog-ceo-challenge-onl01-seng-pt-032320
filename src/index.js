console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", ()=>{
    //Challenge 1
    fetch(imgUrl)
    .then(response => response.json())
    .then(json => json.message.forEach(url => addImage(url)));

    //Challenge 2
    fetch(breedUrl)
    .then(response => response.json())
    .then(results =>{ 
        breeds = Object.keys(results.message);
        addBreed(breeds);

    })

});

function addImage(src){
    let img = document.createElement("img");
    let imgContainer = document.getElementById("dog-image-container");
    
    img.src = src;
    imgContainer.appendChild(img);
}

function addBreed(src)
{
    let breedContainer = document.getElementById("dog-breeds");
    let node = document.createElement("li");
    src.forEach(breed=>{
        let description = document.createTextNode(breed);
        node.appendChild(breed);
        breedContainer.appendChild(node);
    });

}