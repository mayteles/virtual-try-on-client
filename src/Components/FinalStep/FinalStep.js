import { Link } from 'react-router-dom';
import model from '../../assets/images/Dress on model.png';
import './FinalStep.scss';
function FinalStep() {
  return (
    <div className='final'>
      <div className='final__container'>
        <img className='final__img' src={model} alt="Model wearing dress"/>
        <div className='final__buttons'>
          <button className="final__cta">Proceed to purchase</button>
          <br/> {/* Add a line break to move the next button to the next row */}
          <Link to="/"><button className='final__cancel'>Cancel</button></Link>
        </div>
      </div>
    </div>
  )
}

export default FinalStep;
