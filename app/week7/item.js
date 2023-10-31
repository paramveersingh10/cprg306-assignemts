
import React from 'react';

const Item = ({ name, quantity, category,onSelect}) => {
  return (
    <li className="bg-white rounded-lg shadow-lg p-4 mb-4" onClick={()=>onSelect(name)}>
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-gray-600 text-sm">Category: {category}</div>
      <div className="text-gray-600 text-sm">Quantity: {quantity}</div>
    </li>
  );
};

export default Item;
