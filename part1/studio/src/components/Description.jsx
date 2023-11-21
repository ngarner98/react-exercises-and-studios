import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Easy Butter Chicken</h1>
                    <p>This simplified version of the Indian classic</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

function RecipeAuthor() {
    const authorLink = "https://www.buzzfeed.com/melissaharrison";
    const authorPhoto = "https://img.buzzfeed.com/buzzfeed-static/static/user_images/THNcndWU_large.jpg?output-format=jpg&crop=500%252525252525252525253A500%252525252525252525253B0%252525252525252525252C0?resize=100:100&quality=auto";
    const authorName = "Melissa Jameson";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );

}

export default RecipeDescription;