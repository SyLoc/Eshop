import React,{useState, useEffect} from 'react';
import { FaStar } from 'react-icons/fa'

const Rating = ({setRatings, ratings}) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  useEffect(() => {
    setRatings(rating)
  }, [rating, setRatings]);

  useEffect(() => {
    if(ratings === 0) {
      setRating(0)
    }else{
      setRating(ratings)
    }
  }, [ratings]);

  return (
    <div className='rating'>
      {
        [...Array(5)].map( (star, index) => {
          const starIndex = index + 1
          return(
            <label key={index}>
              <input 
                className='notifi__input-rating' 
                name='rating' 
                type="radio" 
                value={starIndex}
                onClick = {e => setRating(starIndex)}
              />
              <FaStar 
                size={18}
                color={starIndex <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={ e => setHover(starIndex)}
                onMouseLeave={ e => setHover(0)}
                />
            </label>
          )
        })
      }
    </div>
  );
};


export default Rating;