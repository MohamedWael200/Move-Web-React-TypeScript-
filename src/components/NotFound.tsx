import {NavLink} from "react-router";

function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                {/* Animated 404 Heading */}
                <p className="text-6xl font-extrabold text-blue-600 animate-bounce">
                    404
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Page not found
                </h1>

                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for. <br />
                    It might have been moved or deleted.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <NavLink
                        to="/"
                        className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                    >
                        Go back home
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </NavLink>
                </div>

                {/* Decorative Element */}
                <div className="mt-16 opacity-10">
                    <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default NotFound;