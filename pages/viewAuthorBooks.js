import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthorBooks = (obj) => {
  clearDom();
  let domString = `
  <div class="mt-5 d=flex">
    <div class="text-white ms-5 details">
     <h2>${obj.authorObject.first_name} ${obj.authorObject.last_name} ${obj.authorObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h2>
     Author Email: <a href="mailto:${obj.authorObject.email}">${obj.authorObject.email}</a>
        
      </div>
     <h4>BOOKS</h4>
          
  </div>`;
  obj.bookObject.forEach((item) => {
    domString += `
    
      <div class="card">
        <img src=${item.image} alt=${item.title} style="width: 300px;">
        <div class="mt-5">
        <button class="btn btn-info"><i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit"></i></button>
        <button class="btn btn-danger"><i id="delete-book-btn--${item.firebaseKey}" class="fas fa-trash-alt"></i></button>
        </div>
      </div>
   

    `;
  });
  console.warn(obj.bookObject);
  renderToDOM('#view', domString);
};

export default viewAuthorBooks;
