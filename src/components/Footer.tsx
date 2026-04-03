function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Section */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight text-blue-500">
                            MyBrand
                        </h2>
                        <p className="text-gray-400 text-sm leading-6">
                            Providing innovative solutions for modern problems.
                            Join our journey to build the future of tech.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Home</a>
                            </li>
                            <li>
                                <a href="#moves" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Moves</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                            Connect With Us
                        </h3>
                        <div className="flex space-x-6 mb-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                FB
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                TW
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                IG
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            support@mybrand.com
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                    <p>© {new Date().getFullYear()} MyBrand Inc. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;