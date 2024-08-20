import React, { useState } from 'react';

const Navbartest = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li className="relative group">
          <button
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="text-white"
          >
            Menu Item
          </button>

          {isDropdownOpen && (
            <>
            <ul
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="divide-y divide-gray-200 absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10"
            >
              <li className="px-4 py-2 hover:bg-gray-100">Dropdown Item 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Dropdown Item 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Dropdown Item 3</li>
            </ul>
            <ul
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10"
            >
              <li className="px-4 py-2 hover:bg-gray-100">Dropdown Item 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Dropdown Item 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Dropdown Item 3</li>
            </ul>
            </>
          )}
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbartest;
