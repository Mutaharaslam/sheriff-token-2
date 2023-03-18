import { NavLink } from "react-router-dom";
import { ArrowButton } from "../arrow-button/arrow-button";


export const Nav = () => {
  return (
    <ul className="flex justify-start mb-24 items-center lg:pl-32 md:pl-16 sm:pl-8 pl-0 navbar">
      <li className="md:px-12 xs:px-4 px-3 pl-4">
        <ArrowButton>Connect Wallet</ArrowButton>
      </li>

      <li className="md:px-12 xs:px-4 px-3">
        <NavLink to="/" 
          className="md:text-4xl sm:text-2xl xs:text-xl text-lg hover:underline hover:text-opacity-90 text-primary navlink">
          Home
        </NavLink>
      </li>
      <li className="md:px-12 xs:px-4 px-3">
        <NavLink to="/buy-chart" 
          className={`md:text-4xl sm:text-2xl xs:text-xl text-lg hover:underline hover:text-opacity-90 text-primary navlink`}
        >
          Buy/Chart
        </NavLink>
      </li>
    </ul>
  );
};
