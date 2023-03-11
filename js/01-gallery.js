import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML("beforeend", createImgCard(galleryItems));

function createImgCard(galItems){
 return galItems.map(({preview, original, description})=>{

    return `
    <div class="gallery__item">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" height=100% width=100%>
    </div>
    `
 }).join("");}

 galleryEl.addEventListener('click',onPrevClick);


 function onPrevClick(e){
   e.preventDefault();
    const isGalItem = e.target.classList.contains('gallery__image');
    if(!isGalItem){
        return;
    }


    let original = e.target.dataset.source;
    const instance = basicLightbox.create(
      `<div class="modal">
      <img src="${original}">
      </div>`
   
   );
    instance.show();
   
 }






