const book5 = {
    title : "JS in hindi",
    author : "Hitesh",
    year : "2024"
}

console.log(book5)

console.log(book5["title"],book5["author"])

const book1 = {
    title : "bookname",
    author: "authorname",
    year : "2018"
}

function bookObject (anyObj){
    console.log(`${anyObj.title} : ${anyObj.author}`);
}
bookObject(book1);

function bookObject2 (newyear , anyObj){
    anyObj["year"] = newyear;
    console.log(`${anyObj.year}`)
}
bookObject2("2024" , book1 )

const library = {
    name: "City Library",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
      }
    ]
  };

console.log(`${library.name} -> Books1 : ${library.books[0].title},${library.books[0].author}
    Books2 : ${library.books[1].title},${library.books[1].author}
    Books3 : ${library.books[2].title},${library.books[2].author1}`)

console.log(`${library.name} -> ${library.books[0].title},
       ${library.books[1].title},
       ${library.books[2].title} `)    

let book4 = {
    title : "The great gatsby",
    author : "F. Scott Fitzgerald",

    printThis : function (){
       console.log(`${this.title} -> ${this.author}`);
    }
}
book4.printThis()




for (const key in book1) {
    console.log(`${key} -> ${book1[key]}`)
}



// Define the library object
var library1 = {
    name: "City Library",
    books: [
      {
        title: "Book One",
        author: "Author One",
        year: 2001
      },
      {
        title: "Book Two",
        author: "Author Two",
        year: 2002
      },
      {
        title: "Book Three",
        author: "Author Three",
        year: 2003
      }
    ]
  };
  
  // Log the library name
  console.log("Library Name: " + library1.name);
  
  // Log the details of each book in the library
  console.log("Books:");
  for (var i = 0; i < library1.books.length; i++) {
    var book = library1.books[i];
    console.log("Book " + (i + 1) + ":");
    for (var key in book) {
      if (book.hasOwnProperty(key)) {
        console.log(key + ": " + book[key]);
      }
    }
    console.log("---");
  }
  