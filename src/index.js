// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded");
    imgLoad(), breedLoad();
});

function imgLoad(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl, {
        method: "GET"
    })
    .then(response => response.json()) //Converts response to JSON
      .then(data => {
        const dogImgContainer = document.getElementById('dog-image-container'); // get destination for dog images

        for(imageUrl of data.message){ //loop over data.message and for each string:
            let image = document.createElement('img'); //Create new img tag
            image.src = imageUrl; //Set the img src to the current string
            dogImgContainer.appendChild(image); //Append corresponding image to the dog image destination
        }

    })
    .catch(function (error){
        let message = 'Unauthorized Access';
        alert("Ragnarők!  Unable to fetch images!"); //Alert when an error occurs with images
        document.body.innerHTML = error.message; //append the error message to DOM
    });
}

function breedLoad(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl, {
        method: "GET"
    })
    .then(response => response.json()) //Converts response to JSON
      .then(data => { 
        console.log(data.message); //For getting the needed info for the future steps
        const dogBreedContainer = document.getElementById('dog-breeds'); // get destination for dog breeds
    for(breed in data.message){ //loop over data.message and for each string:
        let breedTag = document.createElement('li'); //Create new p tag
        breedTag.id = breed;
        breedTag.addEventListener("click", () => { //Add Event Listener to the <li> tag
            // console.log("breed ", breedTag);
            let breedColor = breedTag.innerText.fontcolor("red");
            breedTag.innerHTML = breedColor;
        });
        let breedDropDown = document.getElementById('breed-dropdown');
        breedDropDown.addEventListener("onchange", () => {
            let dogFilter = breedTag.filter(breedTag => {
                .charAt(0) === breedTag.innerText.charAt(0);
            })
        });
        breedTag.innerText = breed;
        dogBreedContainer.appendChild(breedTag); //Append corresponding breed element to dog breed destination
        }
    })
    .catch(function (error){
        let message = 'Unauthorized Access';
        alert("Ragnarők!  Unable to fetch breeds!"); //Alert when an error occurs with breeds
        document.body.innerHTML = error.message; //append the error message to DOM
    });  
}