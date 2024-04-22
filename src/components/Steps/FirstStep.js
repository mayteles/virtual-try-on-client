import '../Steps/Steps.scss';

function FirstStep() {
    return (
      <section className="steps">
        <p className="steps__text">Welcome to our virtual fitting AI! View clothes on a model with a shape like yours to make sure they fit just right.</p>
        <div className="steps__div">
            <div className="steps__container">
                <p className="steps__number-one">1</p>          
                <span className="steps__line"></span>
                <p className="steps__number">2</p>
                <span className="steps__line"></span>
                <p className="steps__number">3</p>
            </div>
            <div className="steps__path">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                    <path d="M4.5 0L8.39711 4.5H0.602886L4.5 0Z" fill="#34A853"/>
                </svg>
            </div>
            <p className="steps__explain">Upload a photo of yourself and we'll make a silhouette of it</p>
        </div>
      </section>
    );
  }
  
  export default FirstStep;
