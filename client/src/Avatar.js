import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './app/styles/styles.css';



const Avatar = () => {
    return (
      <div className="Avatar">
        <FontAwesomeIcon icon={faUser} />
      </div>
    );
  };
  

export default Avatar;
