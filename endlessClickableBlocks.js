const addBlocksBtn = document.querySelector('#add-blocks-btn');
const targetDiv = document.querySelector('#target-div');

addBlocksBtn.addEventListener('click', () => {
    // get random number for number of blocks
    let randomBlocks = Math.floor(Math.random() * 10);

    for (let i = 0; i < randomBlocks; i++) {
        // get random number
        let randomNum = Math.floor(Math.random() * 1000);
    
        // create blocks
        let block = document.createElement('div');
        block.textContent = randomNum;
        block.classList.add('block');
        targetDiv.appendChild(block);
    }
});

targetDiv.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('block')) evt.target.classList.toggle('selected');
});