import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Measure.scss';

const Measure = () => {
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');

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

  return (
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


  );
};

export default Measure;