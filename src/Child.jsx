import React from 'react';
import PropTypes from 'prop-types';

export default function Child({name,age,isLoggedIn}) {
    console.log(isLoggedIn)
  return (
    <div>Child-{name}-{age}-{isLoggedIn}</div>
  )
}

Child.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isLoggedIn: PropTypes.bool,
};
Child.defaultProps = {
    name: 'ravi'
    
};
