import React from 'react';
import "../Home.css"

function Home(props) {
    return (
        <div>
            <header className='headerHome'>
                <h1> FaceLess </h1>
            </header>
            <img src='https://i.pinimg.com/originals/af/bc/32/afbc323e2ab4be2d6d4cf7bb7ea38b20.jpg' alt='Melanin Makeup' />
            <p> Makeup Site With Products For Melanated Skin </p>
        </div>
    );
}

export default Home;