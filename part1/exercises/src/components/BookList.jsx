export default function BookList() {
   let pageTitle = "Books I have read";
   let book1 = "https://m.media-amazon.com/images/I/61lFcsXYjnL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/614SwlZNtJL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51RbpshZ-LL._SY445_SX342_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Hunger Games" />
         <img src={book2} alt="Percy Jackson" />
         <img src={book3} alt="Game of Thrones" />
      </div>      
   );
}