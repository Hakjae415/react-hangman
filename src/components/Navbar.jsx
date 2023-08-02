import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div id="navbar">
            <Link className="navLink" to={"/"}>Game</Link>
            <Link className="navLink" to={"/instructions"}>Instructions</Link>
        </div>
    )
}

export default Navbar