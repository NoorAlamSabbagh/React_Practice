import React from 'react';
import "./Card.css"
import Images from './Images';


function Cards(props){
    return(
  <>
  <div className='cards'>
      <div className='card'>
       <Images imgsrc= {props.imgsrc}/>
        <div className='card_info'>
          <span className='card_category'>{props.title}</span>
          <h3 className='card_title'>{props.sname}</h3>
          <a href={props.link} target="_blank" rel='noreferrer'>
            <button>Watch Now</button>
          </a>
        </div>
      </div>
     </div>
  </>
    )
  }

  export default Cards