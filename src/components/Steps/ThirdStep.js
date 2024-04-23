import '../Steps/Steps.scss';
function ThirdStep() {
    return (
      <section className="steps">
        <p className="steps__text">Voila! Check out the summer dress on the model. Our virtual try-on ensures the perfect fit, hassle-free!</p>
        <div className="steps__div">
            <div className="steps__container">
                <p className="steps__number-one">✔︎</p>          
                <span className="steps__line"></span>
                <p className="steps__number-one">✔︎</p>
                <span className="steps__line"></span>
                <p className="steps__number-one">✔︎</p>
            </div>
            <div className="steps__path3">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                    <path d="M4.5 0L8.39711 4.5H0.602886L4.5 0Z" fill="#34A853"/>
                </svg>
            </div>
            <div className="steps__explain-container3">
                <p className="steps__explain">Your virtual try-on look is ready, featuring a model with a body similar to yours. Tell us how you like it.</p>
            </div>
        </div>
      </section>
    );
  }
  
  export default ThirdStep;
