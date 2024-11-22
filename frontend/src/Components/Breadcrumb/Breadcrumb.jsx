import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(pathnames);
  

  return (
    <nav aria-label="breadcrumb" className="absolute flex">
      <ol className="w-screen -mx-6 mt-5 breadcrumb flex gap-1 justify-end">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          console.log(to);
          
          return (
            <li key={to} className="hover:underline hover:cursor-pointer">
              <span className="mx-1">/</span>
              {index === pathnames.length - 1 ? (
                <span>{value}</span> 
              ) : (
                <Link to={to}>{value}</Link> 
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
