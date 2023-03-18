import { NavLink } from "react-router-dom";
import twitter from "../../assets/imgs/Twitter.png";
import email from "../../assets/imgs/Email.png";
import telegram from "../../assets/imgs/Telegram.png";

export const SocialNav = () => {
  return (
    <ul className="flex justify-center mb-12 items-center">

      <li className="md:px-8 xs:px-4 px-3">
        <NavLink to="/" 
          className="navlink">
          <img className="md:w-20 w-12" src={telegram} alt="" />
        </NavLink>
      </li>
      <li className="md:px-8 xs:px-4 px-3">
        <NavLink to="/" 
          className={`navlink`}
        >
          <img className="md:w-20 w-12" src={twitter} alt="" />
        </NavLink>
      </li>
      <li className="md:px-8 xs:px-4 px-3">
        <NavLink to="/" 
          className={`navlink`}
        >
          <img className="md:w-20 w-12" src={email} alt="" />
        </NavLink>
      </li>
    </ul>
  );
};
