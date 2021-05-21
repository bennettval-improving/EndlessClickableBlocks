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

function addOneHundredDogs() {
    for (let i = 0; i < 100; i++) {
        let randomNum = Math.floor(Math.random() * 9);
        let dog = document.createElement('img');
        //dog.setAttribute('src', imageArray[randomNum]);
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

addOneHundredDogs();

// addBlocksBtn.addEventListener('click', () => {
//     let randomBlocks = Math.floor(Math.random() * 10);

//     for (let i = 0; i < randomBlocks; i++) {
//         let randomNum = Math.floor(Math.random() * 1000);
//         let block = document.createElement('div');
//         block.textContent = randomNum;
//         block.classList.add('block');
//         targetDiv.appendChild(block);
//     }
// });

// targetDiv.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('block')) evt.target.classList.toggle('selected');
// });