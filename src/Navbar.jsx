// Create Functional Component

const Navbar = () => {
    return (
        //create navbar with two button
        <nav className="navbar"> 
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href="/owner">Owner</a>
                </li>
            </ul>
            <hr />
        </nav>
    );
}

export default Navbar;