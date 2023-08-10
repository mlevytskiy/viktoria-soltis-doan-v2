import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { otherBooksGalleryItems } from './gallery-other-books-items.js';

console.log(otherBooksGalleryItems);

// Знаходимо галерею та її елементи "li"
const otherBooksGalleryEl = document.querySelector('.other-books-gallery');

// Додаємо розмітку в структуру
otherBooksGalleryEl.innerHTML = createListImg(otherBooksGalleryItems);

// Функція створення розмітки "li" списку в HTML
function createListImg(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="other-books-gallery__item">
            <a class="other-books-gallery__link" href="${original}">
                <img
                    class="other-books-gallery__image"
                    src="${preview}"
                    alt="${description}"
                    loading="lazy"
                />
            </a>
        </li>`
    )
    .join('');
}

// бібліотека SimpleLightbox
const lightbox = new SimpleLightbox('.other-books-gallery a', {
  // captions: true,
  captionsData: 'alt',
  captionDelay: 500,
  // nav: true,
  // close: true,
  // overlay: true,
});
