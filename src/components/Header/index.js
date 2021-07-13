import "./styles.scss";
import Logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
const header = (props) => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>logout</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="register">Register</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
header.defaultProps = {
  currentUser: null,
};

export default header;
