import "./styles.scss";
import Logo from "../../assets/logo.webp";
const header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default header;
