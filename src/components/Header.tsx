import {NavLink} from "react-router";

function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo / Brand Name */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
                            Maloka
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        <NavLink
                            to="/"
                            className="text-gray-700 hover:text-blue-600 font-medium transition duration-150 ease-in-out"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/moves"
                            className="text-gray-700 hover:text-blue-600 font-medium transition duration-150 ease-in-out"
                        >
                            Moves
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="text-gray-700 hover:text-blue-600 font-medium transition duration-150 ease-in-out"
                        >
                            Contact
                        </NavLink>
                    </nav>

                    <nav className="hidden md:flex space-x-8">
                        <NavLink
                            to="/register"
                            className="text-gray-700 hover:text-blue-600 font-medium transition duration-150 ease-in-out"
                        >
                            Register
                        </NavLink>
                    </nav>

                    {/* Mobile Menu Button (Optional Appearance) */}
                    <div className="md:hidden">
                        <button className="text-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;