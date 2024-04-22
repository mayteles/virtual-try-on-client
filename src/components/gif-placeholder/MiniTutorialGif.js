import React from 'react'
import gifguide from '../../assets/GIF/ezgif-4-696ec24dd8.gif'

function MiniTutorialGif() {
  return (
    <div>
      <p>Welcome to try our virtual fitting AI! View clothes on a model with a shape like yours to make sure they fit just right.</p>
      <section>
        <p>Rest assured. We only use your photo's silhouette to match you with the right model, keeping your data safe.</p>
        <div>
          <img src={gifguide} alt="guide step"/>
        </div>
      </section>
      <button>Try it out</button>
      <button>Cancel</button>
    </div>
  )
}

export default MiniTutorialGif
