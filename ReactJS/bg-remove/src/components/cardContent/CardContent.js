import React from 'react';

const CardContent = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default CardContent;
