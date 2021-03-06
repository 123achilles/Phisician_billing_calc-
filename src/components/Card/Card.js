import React from 'react';
import './Card.scss';
import CoinIcon from '../../assets/images/coin-icon.svg';
import Img from '../UI/Img/Img';

const Card = ({ infoText, total }) => {
  return (
    <div className="Card card text-center" style={ { width: '28%' } }>
      <div className="card-body">
        <Img src={ CoinIcon } alt='coin icon'/>
        <div className="card-title-wrap">
          <h5 className="card-title">{ infoText }</h5>
        </div>
        <div className="gradient-line"/>
        <p className="card-text">Total:</p>
        <p className="card-price">${ total }</p>
      </div>
    </div>
  );
};

export default Card;
