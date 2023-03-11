import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML("beforeend", createImgCard(galleryItems));

function createImgCard(galItems){
 return galItems.map(({preview, original, description})=>{

    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" height=100% width=100%>
    </a>
    `
 }).join("");}


    // let instance = new SimpleLightBox('gallery__image',{
    //     captionsData:'alt',
    //     captionDelay:'250'

    // });

   
    // instance.on(()=>
    // instance.next());
   
 


    let instance = new SimpleLightbox('.gallery a', {
        captionsData:'alt', 
        captionDelay: '250',
    });
    instance.on(() => {
        instance.next();
    });
    
