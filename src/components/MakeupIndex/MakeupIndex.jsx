import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './MakeupIndex.css'


const API = import.meta.env.VITE_APP_API_URL



const MakeupIndex = () => {

    // console.log(API)
    const [allMakeup, setAllMakeup] = useState([])

    function getAllMakeup() {
        axios.get(`${API}/makeup`).then(res => {
            // console.log(res)
            // console.log(res.data)
            setAllMakeup(res.data)
        })
            .catch(error => console.log(error))
    }
    // useEffect(arg1,arg2)
    useEffect(() => {
        getAllMakeup()
    }, [])
    return (
        <div className='makeUp-Index'>
            {
                allMakeup.map(makeupObj =>
                    <Link to={`/makeup/${makeupObj.id}`} className='makeup-list'>
                        <img src={makeupObj.image_url} alt="product img" />
                        <h2>  {makeupObj.product_name}</h2>
                        <span>Price : {makeupObj.price}</span>

                        <span className={`instock ${makeupObj.instock ? 'green' : 'red'}`}>
                            🛒 :{makeupObj.instock ? 'Yes' : 'No'}
                        </span>
                    </Link>
                )
            }
        </div >
    );
};

export default MakeupIndex;