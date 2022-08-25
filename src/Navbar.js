import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="wow"> 
        <Link to={"/"} style={{textDecoration: "none", color: "white"}}>| Go Back</Link>
        </div>
    )
}

export default Navbar;