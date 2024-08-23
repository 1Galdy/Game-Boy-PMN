import React from 'react';
import '../styles/Advance.css';


const dbAdvance = {
    bag: "/assets/icons/bag-icon.png",
    camion: "/assets/icons/camion-icon.png",
    carton: "/assets/icons/carton-icon.png"
}

function GameBoyAdvanceSP() {
  return (
    <div className='mainContainer'>

        <div>
            <div className='blackPart'>
                <section className='blackPart_livraison'>
                    <img src={dbAdvance.camion} alet={dbAdvance.camion} />
                    <label>Livraison offerte dès 139€ avec Mondial Relay</label>
                </section>
                <section className='blackPart_Advance' >
                    <h2>GAMEBOY ADVANCE</h2>
                </section>
            </div>
            <div className='whitePart'>
                <section className='whitePart_firstContainer'>
                    <img src={dbAdvance.carton} alt={dbAdvance.carton} />
                    <label>Livraison gratuite</label>
                </section>
                <section className="whitePart_centerContainer"></section>
                <section className='whitePart_secondContainer'>
                    <img src={dbAdvance.bag} alt={dbAdvance.bag} />
                    <label>À partir de 149€</label>
                </section>
            </div>
        </div>
      <h1>Advance Page</h1>
      <p>This is the Advance Page. Ou la page home</p>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
      lorem ipsum dolor sit amet, consectetur adip<br></br>
    </div>
  );
}

export default GameBoyAdvanceSP;
