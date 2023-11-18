import './styles.css';
import Button from './Button';
import ocean from './oceans.json';

const listItem = ocean.map(ocean =>
   <div key= {ocean.id} className= {`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <img src= {ocean.image} alt= {ocean.name}
      className='img'/>  
   </div>
   );

function Profile()
{
   return(
      <>
      <div>
         <h3>Fun Facts:</h3>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         <Button />
      </div>
         <ul>
         <h1>{ocean.name}</h1>
            {listItem}
         </ul>
         
      </>  
   );
}

export default Profile;