import { signOut } from '../utils/auth';
import { booksOnSale, getBooks } from '../api/bookData';
import { emptyBooks, showBooks } from '../pages/books';
import { favoriteAuthors, getAuthors } from '../api/authorData';
import { emptyAuthors, showAuthors } from '../pages/authors';
import viewBook from '../pages/viewBook';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale(user.uid).then(showBooks);
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(user.uid).then((data) => {
      if (data.length === 0) {
        emptyBooks();
        showBooks(data);
      } else {
        showBooks(data);
      }
    });
  });

  // ALL Authors
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(user.uid).then((data) => {
      if (data.length === 0) {
        emptyAuthors();
        showAuthors(data);
      } else {
        showAuthors(data);
      }
    });
    // console.warn('CLICKED AUTHORS');
  });

  // Favorite Authors
  document.querySelector('#favAuthors').addEventListener('click', () => {
    favoriteAuthors(user.uid).then(showAuthors);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value;
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      getBooks(user.uid).then((data) => {
        const searchItem = Object.values(data).filter((items) => items.title.includes(`${searchValue}`));
        viewBook(searchItem);
      });
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
