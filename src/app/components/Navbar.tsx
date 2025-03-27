function Navbar() {
    return(
        <>
        <nav>
            <ul className="flex flex-row justify-evenly align-baseline bg-gradient-to-tl from-purple-900 to-black p-2">
                <li className="text-2xl "><a href="/settings">Settings</a></li>
                <li className="text-2xl "><a href="/users">Users</a></li>
                <li className="text-2xl "><a href="/products">Products</a></li>
                <li className="text-2xl "><a href="/forum">Forum</a></li>
                <li className="text-2xl "><a href="/about">About</a></li>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;