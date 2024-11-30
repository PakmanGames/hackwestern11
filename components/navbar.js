export default function Navbar() {
    return (
        <header className="border-b bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hover:underline">
                            Search
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="hover:underline">
                            U.S.
                        </a>
                        <a href="#" className="hover:underline">
                            International
                        </a>
                        <a href="#" className="hover:underline">
                            Canada
                        </a>
                        <a href="#" className="hover:underline">
                            Español
                        </a>
                        <a href="#" className="hover:underline">
                            中文
                        </a>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Log In
                    </button>
                </div>
                <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col items-left">
                        <span>Saturday, November 30, 2024</span>
                        <a href="#" className="hover:underline">
                            Today's Paper
                        </a>
                    </div>
                    <div className="text-5xl font-serif italic">
                        Not The New York Times
                    </div>
                    <div>
                        <span>Stock info</span>
                    </div>
                </div>
                <div className="flex items-center justify-center py-4">
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                        <a href="#" className="hover:text-black">
                            U.S.
                        </a>
                        <a href="#" className="hover:text-black">
                            World
                        </a>
                        <a href="#" className="hover:text-black">
                            Business
                        </a>
                        <a href="#" className="hover:text-black">
                            Arts
                        </a>
                        <a href="#" className="hover:text-black">
                            Lifestyle
                        </a>
                        <a href="#" className="hover:text-black">
                            Opinion
                        </a>
                        <a href="#" className="hover:text-black">
                            Audio
                        </a>
                        <a href="#" className="hover:text-black">
                            Games
                        </a>
                        <a href="#" className="hover:text-black">
                            Cooking
                        </a>
                        <a href="#" className="hover:text-black">
                            Wirecutter
                        </a>
                        <a href="#" className="hover:text-black">
                            The Athletic
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
