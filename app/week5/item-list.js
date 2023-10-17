// item-list.js
"use client"
import React from 'react';
import Item from './item'; // Import the Item component
import itemsData from './items.json'; // Import the items data from items.json

const ItemList = () => {
  // Initialize state variable for sorting
  const [sortBy, setSortBy] = React.useState('name');

  // Sort the items based on the sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  // Render the items
  return (
    <div>
      <div className="mb-4">
        <button
          className={`mr-4 px-4 py-2 rounded ${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded ${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
