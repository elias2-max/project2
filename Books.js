import { Link } from "react-router-dom";
import {useState} from "react";
const books=[
    {id:1 , title:"the great gatsby",price:"$20"},
     {id:2 , title:"harry potter",price:"$10"},
      {id:3 , title:"atomic habits",price:"$15"},
];
 function Books() {
    const [search,setSearch]=useState("");
    const filteredBooks=Books.filter((Book)=>Book.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <Link
            key={book.id}
            to={/books/$book.id}
            className="p-4 border rounded shadow"
          >
            <h3 className="text-xl font-semibold">{books.title}</h3>
            <p>{book.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Books;