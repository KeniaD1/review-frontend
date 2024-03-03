import React from 'react';
import "./Home.css"

function HomePage(props) {
    return (
        <>
        
            <header className='headerHome'>
                {/* <h1> FaceLess </h1> */}
                <img src="/1.png" alt="" />
            </header>
            <img className="imageHome" src='https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/429669315_18016520099480647_3730770275745287658_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=jmVC3TCOGx4AX_6IVcn&_nc_ht=scontent-lga3-2.xx&oh=00_AfB795l7-vALql7n_64Ci9Y1R4_1tnGTwu3yjtQOktIGpA&oe=65E78FE0' alt='Melanin Makeup' />
            <p className='HomeDescrip.'> Makeup Site With Products For Melanated Skin </p>
           
        </>
    );
}

export default HomePage;