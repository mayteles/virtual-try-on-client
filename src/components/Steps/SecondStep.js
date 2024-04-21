import '../Steps/Steps.scss';

function SecondStep() {
    return (
      <section className="steps">
        <p className="steps__text">Silhouette is created! Your photo has been deleted from the cloud. Sit back as our AI assistant handles the rest.</p>
        <div className="steps__div">
            <div className="steps__container">
                <p className="steps__number">1</p>          
                <span className="steps__line"></span>
                <p className="steps__number-one">2</p>
                <span className="steps__line"></span>
                <p className="steps__number">3</p>
            </div>
            <div className="steps__path2">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                    <path d="M4.5 0L8.39711 4.5H0.602886L4.5 0Z" fill="#67707D"/>
                </svg>
            </div>
            <p className="steps__explain2">Our AI assistant matches your silhouette with a model of similar body shape to ensure a good fit.</p>
        </div>
      </section>
    );
  }
  
  export default SecondStep;
