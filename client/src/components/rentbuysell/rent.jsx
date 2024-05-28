import "./rent.css"
import { Link } from "react-router-dom"

function Rent() {
  return (
    <div className="section-1">
        <div className="section-components">
            <p>Buy Property</p>
            <button><Link className="post-ads" to="/searchresults">Explore</Link></button>
        </div>
        <div className="section-components">
            <p>Rent Property</p>
            <button><Link className="post-ads" to="/searchresults">Explore</Link></button>
        </div>
        <div className="section-components">
            <p>Sell Property</p>
            <button><Link className="post-ads" to="/postads">Post Free Ad</Link></button>
        </div>
    </div>
  )
}

export default Rent