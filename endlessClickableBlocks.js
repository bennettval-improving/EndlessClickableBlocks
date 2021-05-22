const imageArray = [
    'Images/underwaterDog2.jpg', 
    'Images/underwaterDog1.jpg', 
    'Images/underwaterDog3.jpg', 
    'Images/underwaterDog4.jpg', 
    'Images/underwaterDog5.jpg', 
    'Images/underwaterDog6.jpg', 
    'Images/underwaterDog7.jpg', 
    'Images/underwaterDog8.jpg', 
    'Images/underwaterDog9.jpg'];
const targetDiv = document.querySelector('#target-div');
const detailsPopUp = document.querySelector('#details-pop-up');
const popUpImage = document.querySelector('#pop-up-image');
const popUpImageTitle = document.querySelector('.details-container > h3');
const exitSign = document.querySelector('#exit-sign');
const blocksContainer = document.querySelector('.blocks-container');

function addOneHundredDogs() {
    for (let i = 0; i < 100; i++) { 
        let randomNum = Math.floor(Math.random() * 9);
        let dog = document.createElement('img');
        dog.src = imageArray[randomNum];
        dog.classList.add('block');
        targetDiv.appendChild(dog);
    }
}

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('YOURE AT THE BOTTOM');
        addOneHundredDogs();
    }
});

targetDiv.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'IMG') {
        popUpImage.src = evt.target.src;
        let srcArray = evt.target.src.split('/');
        popUpImageTitle.textContent = srcArray[srcArray.length - 1];
        detailsPopUp.style = 'display: inline-block';
        blocksContainer.style = 'margin-right: 40%';
    }
});

exitSign.addEventListener('click', () => {
    detailsPopUp.style = 'display: none';
    blocksContainer.style = 'margin-right: 10px';
});

addOneHundredDogs();

