import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Measure.scss';

const Measure = () => {
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const navigate = useNavigate();

  const handleFeetChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) && (value === '' || parseFloat(value) < 10)) { 
      setHeightFeet(value);
    }
  };

  const handleInchesChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) && (value === '' || parseFloat(value) < 13)) {
      setHeightInches(value);
    }
  };

  const handleContinue = () => {
    navigate("/step2");

  }

  return (
    <div className='measure'>
      <div className='height'>
        <label className='height__label'>
          Enter your height
        </label>
        <div className='height__input'>
            <input
              label='Feet'
              className='height__input--feet'
              type="text"
              value={heightFeet}
              onChange={handleFeetChange}
              placeholder="5"
            />
            <input
              label='Inches'
              className='height__input--inches'
              type="text"
              value={heightInches}
              onChange={handleInchesChange}
              placeholder="10"
            />
        </div>
        <div className='height__button--container'>
          <button className='height__cancel--button'>
              <Link to="/" className="height__input--cancel">Cancel</Link>
          </button>
          <button className='height__confirm--button'>OK</button>
        </div>
      </div>
      <button className='measure__continue--button' onClick={handleContinue}>
          Continue Virtual Try-on
      </button>
      <button className='measure__cancel--button'>
              <Link to="/" className="measure__input--cancel">Cancel</Link>
      </button>
    </div>
    
  );
};

export default Measure;