import { booksGalleryItems } from './gallery-books-items.js';

console.log(booksGalleryItems);

// Знаходимо галерею та її елементи "li"
const booksGalleryEl = document.querySelector('.books-page__list');

// Додаємо розмітку в структуру
booksGalleryEl.innerHTML = createListItem(booksGalleryItems);

// Функція створення розмітки "li" списку в HTML
function createListItem(books) {
  return books
    .map(
      ({ title, description, bookPage, bookImage_1x, alt }) =>
        `<li class="books__item">
          <a class="link" href="${bookPage}">
            <div class="books__card">
              <div class="books__card-cover">
                <img class="books__card-cover-image" src="${bookImage_1x}" alt="${alt}" width="250" height="250"  loading="lazy">
              </div>
              <div class="books__card-caption">
                <h3 class="books__card-title">
                  ${title}
                </h3>
                <p class="books__card-text">
                  ${description}
                </p>
              </div>
            </div>
          </a>
        </li>`
    )
    .join('');
}

// -->> one jf the variants <<--

// `<li class="book__item">
//   <div class="book__thumb">
//     <a class="link" href="${bookPage}">
//       <div class="book__card">
//         <img class="book__image" src="${bookImage}" alt="${alt}" width="250" height="250" loading="lazy">
//         <div class="book__caption">
//           <h3 class="book__title">
//           ${title}
//           </h3>
//           <p class="book__text">
//           ${description}
//           </p>
//         </div>
//       </div>
//     </a>
//   </div>
// </li>`,
