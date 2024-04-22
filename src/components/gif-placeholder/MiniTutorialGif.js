import React from 'react'
import gifguide from '../../assets/GIF/ezgif-4-696ec24dd8.gif'

function MiniTutorialGif() {
  return (
    <div className='mini'>
      <p className='mini__p'>Welcome to try our virtual fitting AI! View clothes on a model with a shape like yours to make sure they fit just right.</p>
      <section className='mini__img-box'>
          <img src={gifguide} alt="guide step"/>
      </section>
      <button className='mine__cta'>Try it out</button>
      <button>Cancel</button>
    </div>
  )
}

export default MiniTutorialGif
