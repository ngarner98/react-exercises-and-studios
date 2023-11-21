import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.inspiredtaste.net/";
   let authorPhoto = "https://www.inspiredtaste.net/wp-content/uploads/2023/04/Adam-and-Joanne-2-1200-768x621.jpg";
   let authorName = "Adam and Joanne Gallagher";

   return (
      <div>
         <img src={authorPhoto} alt = "author" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Ground beef", "Onion", "Spaghetti pasta", "Tomato paste", "Parmesan cheese"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Weeknight spaghetti</h1>
            <p>Fantastic weeknight spaghetti recipe, perfect for those long work nights for when you need something easy and tasty</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1200-683x1024.jpg" 
      alt="recipe" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
