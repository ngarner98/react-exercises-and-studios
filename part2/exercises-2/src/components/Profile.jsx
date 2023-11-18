import './styles.css';
import Button from './Button';
import ocean from './oceans.json';



function Profile()
{

   const listItem = ocean.map(ocean =>
      <div key= {ocean.id} 
      className= {`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
         <img src= {ocean.image} alt= {ocean.name}
         className='img'/>  
         <h1>{ocean.name}</h1>
            <h3>Fun Facts:</h3>
               <li>{ocean.fact1}</li>
               <li>{ocean.fact2}</li>
               <li>{ocean.fact3}</li>
            <Button />
         </div>
      );

      
   return(
      <>

         <ul>
         
            {listItem}
         </ul>
         
      </>  
   );
}

export default Profile;