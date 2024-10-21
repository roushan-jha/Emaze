
const Header = () => {
    return ( 
        <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-3xl font-extrabold text-blue-600">
                Emaze
              </h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 font-semibold hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-500 font-semibold hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-500 font-semibold hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
     );
}
 
export default Header;