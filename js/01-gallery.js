import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryImage(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup)
gallery.addEventListener('click', onClickImage);

function createGalleryImage(item){
    return item.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');
}
function onClickImage(evt){
    evt.preventDefault();
    const targetImage = evt.target.classList.contains("gallery__image");
    if(!targetImage){
        return;
    }
    const currentImg = evt.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src="${currentImg}" width="800" height="auto"/>`,
        {
          onShow: (instance) => {
            window.addEventListener("keydown", onEscKeyPress);
          },
          onClose: (instance) => {
            window.removeEventListener("keydown", onEscKeyPress);
          },
        }
      );
    
      instance.show();
    
      function onEscKeyPress(event) {
        const key = "Escape";
    
        const isKey = event.code === key;
    
        if (isKey) {
          instance.close();
        }
      }
}

console.log(galleryItems);