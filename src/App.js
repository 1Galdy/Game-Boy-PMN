import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import GameBoyAdvance from './components/GameBoyAdvance';
import GameBoyAdvanceSP from './components/GameBoyAdvanceSP';
import GameBoyColor from './components/GameBoyColor';
import GameBoyDmg from './components/GameBoyDmg';
import Panier from './components/Panier';

const dbApp = {
  logo: "/logo_GameBoy.png",
  insta: "/assets/icons/instagram-icon.svg",
  tiktok: "/assets/icons/tiktok-icon.svg",
  mail: "/assets/icons/mail-icon.png",
  cart: "/assets/icons/cart-icon.svg",
  user: "/assets/icons/user-icon.svg",
}

function App() {
  const [isVisible, setIsVisible] = React.useState(false);

  // Fonction pour afficher le menu déroulant au survol
  const handleMouseOver = () => {
    setIsVisible(true);
  };

  // Fonction pour masquer le menu déroulant lorsque la souris quitte l'élément
  const handleMouseOut = () => {
    setIsVisible(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <section className='containerOnglet_Logo'>
            <img src={dbApp.logo} alt="logo GameBoy" />
          </section>
          <section className='containerOnglet_Nav'>
            <ul>
              <li
                id="personnalisation"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Link to="/GameBoyAdvance" className='custom-link'>PERSONNALISATION</Link>
              </li>
              <li>PSVITA-OLED</li>
              <li>ÉDITIONS LIMITÉES</li>
              <li>ACCESSOIRES</li>
              <li>FONDS D'ÉCRAN</li>
              <li>
                <img src={dbApp.user} alt={dbApp.user} className='userIcon_nav' />
              </li>
              <li>
                <CartIcon />
              </li>
            </ul>
          </section>

          <section
            className="containerOnglet_deroulant"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ visibility: isVisible ? 'visible' : 'hidden' }}
          >
            <ul className='onglet_deroulant'>
              <li>
                <Link to="/GameBoyAdvance" className='custom-link'>GameBoy Advance</Link>
              </li>
              <li>
                <Link to="/GameBoyAdvanceSP" className='custom-link'>GameBoy Advance SP</Link>
              </li>
              <li>
                <Link to="/GameBoyColor" className='custom-link'>GameBoy Color</Link>
              </li>
              <li>
                <Link to="/GameBoyDmg" className='custom-link'>GameBoy Dmg</Link>
              </li>
            </ul>
          </section>
        </nav>


        <Routes>
          <Route path="/" element={<GameBoyAdvance />} />
          <Route path="/GameBoyAdvance" element={<GameBoyAdvance />} />
          <Route path="/GameBoyAdvanceSP" element={<GameBoyAdvanceSP />} />
          <Route path="/GameBoyColor" element={<GameBoyColor />} />
          <Route path="/GameBoyDmg" element={<GameBoyDmg />} />
          <Route path="/Panier" element={<Panier />} />
        </Routes>

        <footer>
          <div className='containerReseaux'>
            <section className='containerReseaux_droit'>
              <p>TOUS DROITS RÉSERVÉS-RETROMETROID 2024</p>
            </section>
            <section className='containerReseaux_icons'>
              <img src={dbApp.insta} alt={dbApp.insta} className='instaIcon_Footer' />
              <img src={dbApp.tiktok} alt={dbApp.tiktok} className='tiktokIcon_Footer' />
              <img src={dbApp.mail} alt={dbApp.mail} className='mailIcon_Footer' />
            </section>
          </div>
          <div className='containerReseaux_légal'>
            <p>MENTIONS LÉGALES</p>
            <p>CONDITIONS GÉNÉRALES DE VENTES</p>
            <p>POLITIQUE DE CONFIDENTIALITÉ</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function CartIcon() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Panier');
  };

  return (
    <img
      src="/assets/icons/cart-icon.svg"
      alt="cart"
      className='cartIcon_nav'
      onClick={handleClick}
    />
  );
}

export default App;
