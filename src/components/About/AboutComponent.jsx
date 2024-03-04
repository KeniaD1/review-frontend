import React from 'react';


import "./AboutComponent.css"

const AboutComponent = () => {
    return (
        <>
            <div>
                <h1> Face Behind Faceless</h1>

                <h2>Author : Kenia Decoteau</h2>

                <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/421483698_1054219232473789_4678445759664146438_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=-qYnAQSncikAX9kc_xU&_nc_ht=scontent-lga3-2.xx&oh=00_AfAt10AXzBOwrSi4rYnA4WDsEsXLJDitsjpAaS6CFYNN0g&oe=65EA2A0F' alt='Picture Of Author ' className='meImg' />
            </div>

            <p> Faceless is a application developed for makeup products and all thing cosmetics. Faceless is meant to be a place where melanated women can come find the best products for there skin type . We show all types of products as well the informative details about the poducts such as price and whether the item is instock or not . </p>
            <h3> More About The Author</h3>
            <p> Kenia begin her software engineer journey a few years after becoming a young mom . My passion for technology has expanded over the years seeing how much of impact you can make in today society being involved in a technical mission . My mission is to make this world a better place one code at a time . </p>
        </>
    );
};

export default AboutComponent;