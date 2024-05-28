import { Link } from "react-router-dom";
import "./menu.css"

function Menu() {
  return (
    <div className="menu">
      <Link>My Account</Link>
      <hr />
      <Link>Subscription</Link>
      <hr />
      <Link>Book a Call</Link>
      <hr />
      <Link>Help 🆘</Link>
    </div>
  );
}

export default Menu;
