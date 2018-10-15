import React from 'react';
import classes from './ContactCard.css';
import ContactIcon from '../../UI/Icons/Contact';
const contactCard=(props)=>{
  return(
      <div className={classes.ContactWrapper}>
      <div className={classes.Icon}>
      <ContactIcon />
      </div>
          <div>
          <div>name: {props.contactName}</div>
          <div>email: {props.contactEmail}</div>
          <div>phone: {props.contactPhone}</div>
          </div>
      </div>
      );  
};

export default contactCard;