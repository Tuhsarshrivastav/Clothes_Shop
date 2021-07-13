import "./styles.scss";
import Logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default header;
