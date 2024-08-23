import React from 'react';
import '../styles/Panier.css';

const dbAdvance = {
    bag: "/assets/icons/bag-icon.png",
    camion: "/assets/icons/camion-icon.png",
    carton: "/assets/icons/carton-icon.png"
}


const donnees = [
    {
        delete: "/assets/icons/delete-icon.png"
    },
    {
        nom: "toto",
        age: "15 ans",
        code: 93600,
        destination:{
            ville: "Aulnay",
            pays: "France"
        }
    },
    {
        nom: "marc",
        age: "30 ans",
        code: 91600
    }
];

function Panier() {
  return (
    <div className='mainContainer'>
      <div>
            <div className='blackPart'>
                <section className='blackPart_livraison'>
                    <img src={dbAdvance.camion} alet={dbAdvance.camion} />
                    <label>Livraison offerte dès 139€ avec Mondial Relay</label>
                </section>
                <section className='blackPart_Advance' >
                    <h2 className="No_before">VALIDATION DE PANIER</h2>
                </section>
            </div>
            <div className='whitePart, No_whitePart'>
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

        <div className="containerFacture">
            <div className="containerFacture_whitePart">
                <h2>INFORMATION DÉLAIS DE LIVRAISON</h2>
                <p>Veuillez noter que le délai avant expédition est de <b>35 à 40 jours</b> pour votre commande. Chaque console étant personnalisée selon vos spécifications, ce processus demande une préparation minutieuse.</p>
                <div className="infos_Facture">
                    <div className="infosFacture_colonne">
                        <section className="infosFacture_colonneGauche">
                            <ul>
                                <li>Supprimer</li>
                                <li>Produit</li>
                            </ul>
                        </section>
                        <section className="infosFacture_colonneDroite">
                            <ul>
                                <li>Prix</li>
                                <li>Quantité</li>
                            </ul>
                        </section>
                    </div>

                    {/* J'ai gardé la même base de code pour faire la partie qui a suivieJ'ai gardé la même base de code pour faire la partie qui a suivi */}

                        <div className="infosFacture_colonne Noborder">
                            <section className="infosFacture_colonneGauche left width">
                                <ul>
                                    <li><img src={donnees[0].delete} alt={donnees[0].delete} className="delete-icon" /></li>
                                    <li>Gameboy Adavance</li>
                                </ul>
                            </section>
                            <section className="infosFacture_colonneDroite right">
                                <ul>
                                    <li>228,90€</li>
                                    <li><input type="number" min="1" max="100" step="100" value="1" /></li>
                                </ul>
                            </section>
                        </div>

                        <div className="fiche_configuration">
                            <section className="config_section">
                                <label><u>Modifier</u> <u>Voir Configuration</u></label>
                                <p className="nonDes_config">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="nonDes_config margin-top">Prix de base: <span>149,00€</span></p>
                                <p className="linkDelete_facture margin-top"><u>Supprimer</u></p>
                                
                            </section>
                        </div>

                        {/* J'ai gardé la même base de code pour faire la partie avec le code de réduction et le bouton vider le panier */}

                        <div className="infosFacture_colonne borderTop">
                            <section className="infosFacture_colonneGauche left width">
                                <ul className="containerReduction_code">
                                    <input type="text" placeholder="Code de réduction" />
                                    <input type="button" value="OK" className="buttonReduction_code" />
                                </ul>
                            </section>
                            <section className="infosFacture_colonneDroite right">
                                <ul>
                                    <button class="buttonDelete_panier">Vider le panier</button>
                                </ul>
                            </section>
                        </div>
                </div>
            </div>
            <div className="containerFacture_grayPart">

            </div>
        </div>
        
    </div>
  );
}

export default Panier;
