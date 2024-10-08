import React from 'react';
import '../styles/Advance.css';

const dbAdvance = {
    bag: "/assets/icons/bag-icon.png",
    camion: "/assets/icons/camion-icon.png",
    carton: "/assets/icons/carton-icon.png"
};

function GameBoyAdvanceSP() {
  const [carrouselImages, setCarrouselImages] = React.useState([
    '/assets/GBA/SIDE/GBA-Side-GBA-Side-ClearGreen_shell_GBA_0027.jpg',
    '/assets/GBA/FRONT/GBA-Front-GBC_LEDGBA_SHELL_CLEAR-GREEN.jpg',
    '/assets/GBA/BACK/GBA-Back-GBA_SHELL_BACK_CLEARGREEN0027.jpg',
  ]);

  const updateFirstImage = (newImage) => {
    setCarrouselImages([newImage, carrouselImages[1], carrouselImages[2]]);
  };

  return (
    <div className='mainContainer'>
        <div>
            <div className='blackPart'>
                <section className='blackPart_livraison'>
                    <img src={dbAdvance.camion} alt={dbAdvance.camion} />
                    <label>Livraison offerte dès 139€ avec Mondial Relay</label>
                </section>
                <section className='blackPart_Advance'>
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
        
        <Carrousel images={carrouselImages} />
        
        <div className='configuration_advance'>
            <h1>CONFIGURATION</h1>
            <div className='configurationAdvance_Option'>
                <section className='configurationAdvance_OptionList'>
                    <details>
                        <summary>
                            <h4>BASE CONSOLE</h4>
                            <span>Création à partir d'une console que vous fournissez</span>
                        </summary>
                        <ul className="button-container">
                            <button className='button'>Je fournis la console</button>
                            <button className='buttonSansBorder'>Je n'ai pas de console à fournir</button>
                        </ul>
                    </details>
                    <Coque updateFirstImage={updateFirstImage} />
                    <details>
                        <summary>
                            <h4>COQUE ARRIÈRE</h4>
                            <span>Uniquement si la coque arrière est différente de l'avant</span>
                        </summary>
                        <ul>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <li className='coqueArriere_color'></li>
                            <button className='button paddingButton'>sans</button>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>ÉCRAN IPS RÉTROÉCLAIRÉ</h3>
                        </summary>
                        <ul>
                            <li className='ecranColor'></li>
                            <li className='ecranColor'></li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>BOUTONS</h3>
                        </summary>
                        <ul>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>PADS</h3>
                        </summary>
                        <ul>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>LANIÈRE</h3>
                        </summary>
                        <ul>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>COQUE SPECIAL ÉDITIONS</h3>
                        </summary>
                        <ul className="button-container">
                            <button className='button'>Je fournis la console</button>
                            <button className='buttonSansBorder'>Je n'ai pas de console à fournir</button>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>STICKERS*</h3>
                        </summary>
                        <ul>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                            <li className='Colorfor_all'></li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>INSTALLATION BATTERIE</h3>
                        </summary>
                        <ul className="button-container">
                            <button className='button'>Je fournis la console</button>
                            <button className='buttonSansBorder'>Je n'ai pas de console à fournir</button>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>INSTALLATION LED RBG</h3>
                        </summary>
                        <ul className="button-container">
                            <button className='button'>Je fournis la console</button>
                            <button className='buttonSansBorder'>Je n'ai pas de console à fournir</button>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>INSTALLATION LED TRIGGER</h3>
                        </summary>
                        <ul className="button-container">
                            <button className='button'>Je fournis la console</button>
                            <button className='buttonSansBorder'>Je n'ai pas de console à fournir</button>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>INSTALLATION D-PAD TACTILE</h3>
                        </summary>
                        <ul className="button-container">
                            <button className='button'>Je fournis la console</button>
                            <button className='buttonSansBorder'>Je n'ai pas de console à fournir</button>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>INSTALLATION AMP AUDIO</h3>
                        </summary>
                        <ul className="button-container">
                            <button className='button'>Je fournis la console</button>
                            <button className='buttonSansBorder'>Je n'ai pas de console à fournir</button>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <h3>ACCESSOIRES</h3>
                        </summary>
                        <ul className="button-container">
                            <button className='button'>Je fournis la console</button>
                            <button className='buttonSansBorder'>Je n'ai pas de console à fournir</button>
                        </ul>
                    </details>
                </section>
            </div>
        </div>
        
    </div>
  );
}

function Carrousel({ images }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="firstContainer_advance">
        <div className="carrousel-container">
            <img
                src={images[activeIndex]}
                alt={`Carrousel image ${activeIndex + 1}`}
                className="carrousel-image"
            />

            <div className="carrousel-indicators">
                {images.map((_, index) => (
                <span
                    key={index}
                    className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => handleCircleClick(index)}
                ></span>
                ))}
            </div>
        </div>
    </div>
  );
}

function Coque({ updateFirstImage }) {
  const imagesForCoque = [
    '/assets/GBA/SIDE/GBA-Side-GBA-Side-ClearGreen_shell_GBA_0027.jpg',
    '/assets/GBA/SIDE/GBA-Side-GBA-Side-White_shell_GBA_0027.jpg',
    '/assets/GBA/SIDE/GBA-Side-GBA-Side-Rose_shell_GBA_0027.jpg',
    '/assets/GBA/SIDE/GBA-Side-GBA-Side-Turquoise_Shell_GBA_0027.jpg'
  ];

  return (
    <details>
      <summary>
        <h4>COQUE</h4>
        <span>Comprend avant et arrière</span>
      </summary>

      <ul>
        {imagesForCoque.map((src, index) => (
          <li
            key={index}
            className='coqueColor'
            onClick={() => updateFirstImage(src)}
          >
          </li>
        ))}
      </ul>
    </details>
  );
}

export default GameBoyAdvanceSP;
