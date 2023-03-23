import { NavLink } from "react-router-dom";
import { ArrowButton } from "../arrow-button/arrow-button";


export const Nav = () => {
  return (
    <ul className="flex justify-center mb-24 items-center navbar">
      <li className="md:px-12 xs:px-4 px-3 pl-4">
        <ArrowButton>Connect Wallet</ArrowButton>
      </li>

      <li className="md:px-12 xs:px-4 px-3">
        <NavLink to="/" 
          className="md:text-4xl sm:text-2xl xs:text-xl text-lg hover:underline hover:text-opacity-90 text-primary navlink font-cowBoys">
          Home
        </NavLink>
      </li>
      <li className="md:px-12 xs:px-4 px-3">
        <NavLink to="/buy-chart" 
          className={`md:text-4xl sm:text-2xl xs:text-xl text-lg hover:underline hover:text-opacity-90 text-primary navlink font-cowBoys`}
        >
          Buy/Chart
        </NavLink>
      </li>
    </ul>
  );
};
