

function Footer() {
    return (
      <footer className="absolute bottom-0 w-full py-8 mt-16 text-black bg-yellow-400 shadow-inner ">
        <div className="grid gap-8 px-4 mx-auto text-sm max-w-7xl md:grid-cols-5 ">
          
          {/* Address Info */}
          <div className="p-3 rounded-xl">
            <p className="mb-2 text-lg font-bold">Enactus FSBM</p>
            <p>Faculté des Sciences Ben M'Sick</p>
            <p>Bd Commandant Driss Al Harti</p>
            <p>Casablanca, 20670</p>
            <p>Maroc</p>
          </div>
  
          <div></div>
  
          {/* Contact Info */}
          <div className="p-3 rounded-xl">
            <p className="mb-2 text-lg font-bold">Contact</p>
            <p>Email: <a href="mailto:enactus24.25fsbm@gmail.com" className="hover:text-blue-700">enactus24.25fsbm@gmail.com</a></p>
            <p>Tel: <a href="tel:+212639380894" className="hover:text-blue-700">+212 639 380 894</a></p>
          </div>
  
          <div></div>
  
          {/* Social Links */}
          <div className="p-3 rounded-xl">
            <p className="mb-2 text-lg font-bold">Follow Us</p>
            <div className="flex flex-col space-y-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-row hover:text-sky-600">
              <img className="mr-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtklEQVR4nO2WQQoCMQxF30oPoCC4FQQ3uhkvNDCuvJZewltYN+IBFJceYCKFgKNUcZG/0g+hNIG8NqVtAJbAAWgBC7IWSECFJzeRJYJXboWdyJKb29NkC4zcNgrAkIcGCsCsA1goAEegAVbASQGQH/Kr7EPsDNTAGOgBc2AXCZgWfH2/XCGAd6qjAGvg5mNXkyjAxf3XQplCAPZt7A+w3yqRKd6iVv1lJiFgnwG5tciQ6LYlJ6/u1TSkz+cS6UEAAAAASUVORK5CYII=" alt="linkedin"/> LinkedIn 
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-row hover:text-sky-600 ">
              <img className="mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nO2WwU7CQBCGv7t4A05y5ih6EDH6Dkp8IJEnUOQhMCQ8iehD6E1NWz3IQTEb/yakobutmRoP/Mkkzc7MfpnJdLKw0T9QExgC98A7sCxoLnau3EZZ6DmQlIDlWQz0y0C/DKCpfRaBN40qzVoUavvQCHQEHGfOBj7wgxHYQU8yZ3MfONTmD+AK6AJbMvc9AhaB3MQH9iU+Arue3I5ifHfkyldpCm0BU1XgbAa05dsLVJ6rvATX3hT6ssb/Kp/TjSX4QP6pJ+ZWMYeW4FqB4XNbymn7r8FRFeCu/DNPzEQxPUvwtfxtDVLW/wzsKGZs/Tt1FNPSIMWyyQp03/p3Wmo5pPB1ctCnwB2/XpkLrceeBq6m73GBlRnnY39eG8uK7M4HvqwQfOEDN9QSa2gE1Amor+eKFdTddRqCrsIjo0rPikJT1fVccUPxVgKWKGdQpL0bUbW+AcdI0V4wAXsCAAAAAElFTkSuQmCC" alt="instagram-new"/> Instagram
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="flex flex-row hover:text-sky-600">
              <img className="mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABH0lEQVR4nO2WP04CQRTGfySYIA0SYmXjCaSEA5AoIQE5gCUHQP50BGo4AYWN0cTGO1BSmNBJK2LBEaxYM8kjeTEsO4YZMMqXvGLn229+2X0vuwMH/UeVgA8gcFRzoGgDnjuErurdBhx4qkj9dMO25M6A5T7ARqNdglsqew7M9gE2SgFdYOIb3JRcBoipfa53Bb4EhkDCB/gN6AAV1cuGApvrBXAHPLsCP6qnMXoNATud6jEQF9/AC+qzeusTXFYDNP3meQWfiNdZ49V9go/FG6zxbsSr+gDnxMsCn2rdTHZavJ4P8L3yL4C+vPZTWUta/E4jFRashdx/BDxFQINo7ObwA5CXnqelry8W0GBb8Db1e48+RcdwA72yAR/0t/QFenOPJfGHZc0AAAAASUVORK5CYII=" alt="tiktok"/> TikTok
              </a>
            </div>
          </div>
          
        </div>
        {/* Copyright */}
        <div className="mt-8 text-xs text-center text-gray-600 ms:hidden">
              <p>&copy; {new Date().getFullYear()} Enactus FSBM | All rights reserved.</p>
          </div>
  
        
      </footer>
    );
  }
  
  export default Footer;
  