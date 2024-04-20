import '../Steps/Steps.scss';

function Steps() {
    return (
      <section className="steps">
        <div className="steps__div">
            <div className="steps__container">
                <p className="steps__number-one">1</p>          
                <p className="steps__number">2</p>
                <p className="steps__number">3</p>
            </div>
            <p className="steps__explain">Upload a photo of yourself and we'll make a silhouette of it</p>
        </div>
      </section>
    );
  }
  
  export default Steps;
  