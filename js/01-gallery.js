import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click',onPrevClick);

galleryEl.insertAdjacentHTML("beforeend", createImgCard(galleryItems));



function createImgCard(galItems){
 return galItems.map(({preview, original, description})=>{

    return `
    <div class="gallery-item">
    <img src="${preview}" data-source="${original}" alt="${description}" height=100% width=100%>
    </div>
    `
 }).join("");}


 function onPrevClick(e){
    const isGalItem = e.target.classList.contains('gallery-item');
    if(!isGalItem){
        return;
    }
    console.log(e.target)
 }

