import React from 'react';

function LanguageSelector() {
  return (
    <div className="relative inline-block text-left">
      <select className="block w-full bg-gray-800 text-white border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 p-2">
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
}

export default LanguageSelector;