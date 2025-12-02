import React from 'react';

const ItemDisplay = ({ children, title, type }) => {
  return (
    <div>
      <h2 className={`component-title ${type}`}>{title}</h2>
      <div className="shop-container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
