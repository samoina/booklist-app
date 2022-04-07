//Book constructor function
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor function 
function UI() {};

UI.prototype.addBookToList = function(book){
  const bookList = document.getElementById('book-list');
  let tr = document.createElement('tr');
  let bookTemplate='';

  bookTemplate = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><button class="btn btn-danger">X</button></td>
  `;

  tr.innerHTML += bookTemplate;
  bookList.appendChild(tr);
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


//EVENT LISTENERS
//form submission
document.getElementById('book-form').addEventListener("submit", function (ev) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  let book = new Book(title, author, isbn);

  let ui = new UI();
  ui.addBookToList(book);
  ui.clearFields();
  ev.preventDefault();
});