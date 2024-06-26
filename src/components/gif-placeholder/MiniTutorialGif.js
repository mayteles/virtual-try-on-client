import React from 'react';
import { Link } from 'react-router-dom';
import gifguide from '../../assets/GIF/ezgif-tutorial v3 Apr 22.gif';

function MiniTutorialGif() {
  return (
    <div className='mini'>
      <p className='mini__p'>Welcome to our virtual fitting AI! View clothes on a model with a shape like yours to make sure they fit just right.</p>
      <div className='mini__img-container'>
        <img className='mini__img-box' src={gifguide} alt="guide step"/>
        <div className='mini__buttons'>
          <Link to='/step1'><button className='mini__cta'>Try it out</button></Link>
          <br/> {/* Add a line break to move the next button to the next row */}
          <button className='mini__cancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default MiniTutorialGif
