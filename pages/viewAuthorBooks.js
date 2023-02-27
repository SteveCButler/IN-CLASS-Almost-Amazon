import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthorBooks = (obj) => {
  clearDom();
  const domString = `
  <div class="mt-5 d=flex">
    <div class="text-white ms-5 mb-5 details">
     <h2>${obj.authorObject.first_name} ${obj.authorObject.last_name} ${obj.authorObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h2>
     Author Email: <a href="mailto:${obj.authorObject.email}">${obj.authorObject.email}</a>
    </div>
    <div id="authorBooks" ></div>
          
  </div>`;
  let bookString = '';
  obj.bookObject.forEach((item) => {
    bookString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <button class="btn btn-info"><i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit"></i></button>
            <button class="btn btn-danger"><i id="delete-book-btn--${item.firebaseKey}" class="fas fa-trash-alt"></i></button>
        </div>
      </div>`;
  });

  renderToDOM('#view', domString);
  renderToDOM('#authorBooks', bookString);
};

export default viewAuthorBooks;
