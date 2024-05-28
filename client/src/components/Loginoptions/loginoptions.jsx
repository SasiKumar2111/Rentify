import "./loginoptions.css";
import { Link } from 'react-router-dom';

function Loginoptions() {
  return (
    <div className="login-options">
      <Link to="/login">Log in</Link>
      <hr />
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Loginoptions;
