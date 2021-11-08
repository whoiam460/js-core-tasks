
import { FaStar } from 'react-icons/fa';
import './raiting.css'


const Rating = ({maxStars, selectStars}) => {
    
    
   
    return(
        <div className='rating'>  
         { [...Array(+maxStars)].map((item, i) =>{
            let ratingValue = i + 1;
            return( <label>
                <input style={ { } } type='radio' name='rating' value={ratingValue}  />
                    <FaStar color={(ratingValue <= +selectStars) ? '#FFD700' : '#808080'} />
                </label>)
         }) }    
        </div>
    )
}

export default Rating