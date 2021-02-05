import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSkull, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSkull, faHeart)

const Card = ({ character }) => {
    const { ancestry, alive, dateOfBirth, house, image, name, patronus, wand, gender } = character;
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className="column " style={{ height: 367 }} onClick={() => setIsActive(isActive => true)}>
                <div className='cromo-container'>
                    <div className={`cromo-front ${house == "Gryffindor" ? "is-gryffindor" : (house == "Slytherin" ? "is-slytherin" : (house == "Hufflepuff" ? "is-hufflepuff" : (house == "Ravenclaw" ? "is-ravenclaw" : "")))}`}>
                        <img className='cromo-image' src={image} />
                        <div className='cromo-image-overlay'>
                            <p>
                                {name}
                                <br />
                                {house}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal ${isActive ? "is-active" : ""}`}>
                <div className="modal-background" onClick={() => setIsActive(isActive => false)}></div>
                <div className="modal-card">
                    <header className={`modal-card-head ${house == "Gryffindor" ? "is-gryffindor" : (house == "Slytherin" ? "is-slytherin" : (house == "Hufflepuff" ? "is-hufflepuff" : (house == "Ravenclaw" ? "is-ravenclaw" : "")))}`}>
                        <p className="modal-card-title is-bold has-text-white">{name}  <FontAwesomeIcon icon={alive ? faHeart : faSkull} /></p>
                        <button className="delete" aria-label="close" onClick={() => setIsActive(isActive => false)}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="columns is-multiline">
                            <div className="column is-6 is-flex  is-justify-content-center">
                                <img src={image} alt="Placeholder image" className="modal-image" />
                            </div>
                            <div className="column">
                                <h2 className="title">{gender === "male" ? "Wizard" : "Witch"} Information</h2>
                                <p className="has-text-weight-bold">House: <span className="has-text-weight-normal">{house}</span></p>
                                <p className="has-text-weight-bold">Blood status: <span className="has-text-weight-normal">{ancestry}</span></p>
                                <p className="has-text-weight-bold">Birthday: <span className="has-text-weight-normal">{dateOfBirth}</span></p>
                                <p className="has-text-weight-bold">Patronus: <span className="has-text-weight-normal">{patronus}</span></p>
                                <p className="has-text-weight-bold">Wand wood: <span className="has-text-weight-normal">{wand.wood}</span></p>
                                <p className="has-text-weight-bold">Wand Core: <span className="has-text-weight-normal">{wand.core}</span></p>
                                <p className="has-text-weight-bold">Wand length: <span className="has-text-weight-normal">{wand.length}"</span></p>
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div>
        </>
    )

}



export default Card;