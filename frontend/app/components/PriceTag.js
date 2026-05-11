import { memo } from 'react';

const PriceTag = memo(({ price, symbol }) => {
  return (
    <div className="price-animate">
      <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{symbol}: </span>
      <span style={{ color: '#02c076' }}>${price}</span>
    </div>
  );
});

export default PriceTag;