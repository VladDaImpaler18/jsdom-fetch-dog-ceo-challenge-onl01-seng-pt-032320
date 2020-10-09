console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedDropdown = document.getElementById("breed-dropdown");


document.addEventListener("DOMContentLoaded", ()=>{
    const breedContainer = document.getElementById("dog-breeds");
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



document.addEventListener("click",(e) => {
    if (e.target.nodeName==="LI"){ //Strong Island yeahhh boi
        if(e.target.style.color===""){ e.target.style.color="red"; }
        else if(e.target.style.color==="red"){e.target.style.color=""; }
    }
    else if(e.target === breedDropdown){
        
    }
});

function addImage(src){
    let img = document.createElement("img");
    let imgContainer = document.getElementById("dog-image-container");
    
    img.src = src;
    //imgContainer.appendChild(img);
}

function addBreed(src)
{
    src.forEach(breed=>{
        let description = document.createTextNode(breed);
        let node = document.createElement("li");
        node.id = breed;

        node.appendChild(description);
        breedContainer.appendChild(node);
    });

}
});