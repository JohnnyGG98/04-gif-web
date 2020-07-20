import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategoria }) => {
  
  // Estados 
  const [inputValue, setInputValue] = useState('');
  
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(inputValue.trim().length > 2) {
      setCategoria(cats => [inputValue, ...cats]);
      setInputValue('');
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategoria: PropTypes.func.isRequired
}

export default AddCategory;
