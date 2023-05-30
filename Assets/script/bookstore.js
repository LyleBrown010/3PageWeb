// education array of objects

let books = [
    {
        id: 1,
        image: " https://i.postimg.cc/KKXk1C6Z/Haruki-Murakami-Hear-the-wind-sing.jpg" ,
        title: " Hear The Wind Sing " , 
        author: " Haruki Murakami ", 
        price: " R250 " , 
    },
    {
        id: 2,
        image: " https://i.postimg.cc/pykFsGFZ/Tuli-Kupferberg-1001-Ways-To-Live-Without-Working.jpg" ,
        title: " 1001 Ways To Live Without Working " , 
        author: " Tuli Kupferberg ", 
        price: " R300 " ,  
    },
    {
        id: 3,
        image: " https://i.postimg.cc/nMdX4XyS/Audrey-Magee-THe-colony.png " ,
        title: " The Colony" , 
        author: " Audrey Magee ", 
        price: " R250 " , 
    },
    {
        id: 4,
        image: " https://i.postimg.cc/jWzWPZTy/George-Orwell-1984.jpg " ,
        title: " 1984 " , 
        author: " George Orwell ", 
        price: " R300 " ,  
    },
    {
        id: 5,
        image: " https://i.postimg.cc/XrBB7nDH/Charles-Bukowski-love-is-a-dog-from-hell.jpg " ,
        title: " Love is a Dog from Hell " , 
        author: " Charles Bukowski ", 
        price: " R300 " ,  
    },
    {
        id: 6,
        image: " https://i.postimg.cc/nCVYR1mZ/Thomas-Szaaz-Ideology-and-Insanity-1.jpg " ,
        title: " Ideology and Insanity " , 
        author: " Thomas Szaaz ", 
        price: " R250 " ,  
    },  
    {
        id: 7,
        image: "https://i.postimg.cc/nc4wYw4B/Mark-Manson-The-subtle-art.jpg " ,
        title: " The Subtle Art of Not Giving A F*ck " , 
        author: " Mark Manson ", 
        price: " R320 " ,  
    },  
    {   id: 8,
        image: "https://i.postimg.cc/D0KR7VQf/F-Scott-Fitzgerald-THe-great-Gatsby.jpg " ,
        title: " The Great Gatsby " , 
        author: " F. Scott Fitzgerald ", 
        price: " R250 " ,  
    },  
];
  
  let dispBooks = document.querySelector("#books");
  books.forEach((data) => {
    dispBooks.innerHTML += `
    <div class= "card border border-black col-2 p-2 m-2 d-flex align-items-center justify-content-center ">
        <img class="m-2 d-flex " id="book-covers" src = "${data.image}">
        <h6 id="book-title" class="display-1 bg-white">${data.title}</h6>
        <div class="card-body bg-white">
            <p id="author-name" class="text-black bg-white">${data.author}</p> 
            <p id="price" class="text-black bg-white">${data.price}</p>
        </div>
    </div> 
    
    `;
  });