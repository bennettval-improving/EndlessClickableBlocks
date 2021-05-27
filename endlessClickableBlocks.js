const targetDiv = document.querySelector('#target-div');
const detailsPopUp = document.querySelector('#details-pop-up');
const popUpImage = document.querySelector('#pop-up-image');
const popUpImageTitle = document.querySelector('.details-container > h3');
const exitSign = document.querySelector('#exit-sign');
const blocksContainer = document.querySelector('.blocks-container');
const searchInput = document.querySelector('#search-input');
const nextPg = document.querySelector('#next-pg');
const prevPg = document.querySelector('#prev-pg');
const pgNumberParagraph = document.querySelector('#pg-number');

const baseArtUrl = 'https://api.harvardartmuseums.org/image';
const apiKey = '?apikey=93be3097-51cc-4177-a633-040b80f209be';

let pageNumber = 1;
let totalPages = 1;
let currentSearch = 'book';

targetDiv.addEventListener('click', (evt) => {
    if (evt.target.id === 'target-div') return;

    // remove selected class from previous block
    let selectedArray = [...targetDiv.childNodes].filter(x => x.classList.contains('selected'));
    if (selectedArray.length > 0) {
        let selected = selectedArray[0]; // length should always be 1
        selected.classList.remove('selected');
    }

    let block = evt.target.closest('.block');
    popUpImage.src = block.childNodes[0].src;
    detailsPopUp.style = 'display: inline-block';
    blocksContainer.style = 'margin-right: 40%';
    block.classList.add('selected');
});

exitSign.addEventListener('click', () => exitPopUp());

searchInput.addEventListener('keyup', (evt) => {
    if (evt.key === 'Enter') {
        exitPopUp();
        currentSearch = searchInput.value;
        getArt();
    }
});

nextPg.addEventListener('click', () => {
    if (pageNumber < totalPages) {
        pageNumber += 1;
        pgNumberParagraph.textContent = pageNumber;
        getArt();
        
        if (pageNumber === totalPages) nextPg.disabled = true;
        prevPg.disabled = false;
    } else console.log('Cannot go higher');
});

prevPg.addEventListener('click', () => {
    if (pageNumber > 1) {
        pageNumber -= 1;
        pgNumberParagraph.textContent = pageNumber;
        getArt();

        nextPg.disabled = false;
        if (pageNumber === 1) prevPg.disabled = true;
    }
});

function exitPopUp() {
    detailsPopUp.style = 'display: none';
    blocksContainer.style = 'margin-right: 10px';
}

function getArt() {
    fetch(`${baseArtUrl}${apiKey}&q=caption:${currentSearch}&page=${pageNumber}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            pageNumber = data.info.page;
            totalPages = data.info.pages;
            addArtToDocument(data);
        });
}

function addArtToDocument(data) {
    targetDiv.textContent = '';
    data.records.forEach(record => {
        let block = document.createElement('div');
        block.classList.add('block');

        let art = document.createElement('img');
        art.src = record.baseimageurl;

        let title =  document.createElement('div');
        title.textContent = record.caption;

        block.appendChild(art);
        block.appendChild(title);
        targetDiv.appendChild(block);
    });
}

getArt();