class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.title = title;
  }
}

class UI {
  addBookToList(book){
    const bookList = document.getElementById('book-list');
    let tr = document.createElement('tr');
    let bookTemplate='';
  
    bookTemplate = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><button class="delete btn btn-danger">X</button></td>
    `;
  
    tr.innerHTML += bookTemplate;
    bookList.appendChild(tr);
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  addAlert(message, alertClass){
    let alertDiv = document.getElementById('alert-div');
    alertDiv.style.display = 'block';
  
    const alert = `
    <p class=" p-3 alert-${alertClass}">${message}</p>
    `
    alertDiv.innerHTML=alert;
  
    setTimeout(function(){
      alertDiv.style.display = 'none';
    }, 3000);
  }

  deleteBook(target){
    if(target.classList.contains('delete')) {
      const bookList = document.getElementById('book-list');
      let row = target.parentElement.parentElement;
      bookList.removeChild(row);
    }
  }
}

//EVENT LISTENERS
//form submission
document.getElementById('book-form').addEventListener("submit", function (ev) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  let book = new Book(title, author, isbn);
  let ui = new UI();

  //validation
  if(title==='' || author==='' || isbn==='') {    
    ui.addAlert('Please enter all the book fields.', 'danger');
  } else {
    ui.addBookToList(book);
    ui.clearFields();
    ui.addAlert('Book added successfully! <i class="fas fa-smile"></i>', 'success')
  }

  ev.preventDefault();
});


//delete a book
document.getElementById('book-list').addEventListener('click', function(event){
  let ui = new UI();
  ui.deleteBook(event.target);
  ui.addAlert('Book deleted!', 'warning');
  event.preventDefault();
});