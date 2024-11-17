import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 text-sm text-gray-600">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">›</span>}
            <Link to={path.link} className="text-blue-600 hover:underline">
              {path.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
