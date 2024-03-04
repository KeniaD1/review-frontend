import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./MakeupShow.css"



const API = import.meta.env.VITE_APP_API_URL


const MakeupShow = () => {

    const [makeupDetails, setMakeupDetails] = useState({})

    const { id } = useParams()

    const navigate = useNavigate()

    function handleDelete() {
        axios.delete(`${API}/makeup/${id}`)
            .then(res => navigate('/makeup'))
            .catch(err => console.log(err))
    }



    useEffect(() => {
        axios.get(`${API}/makeup/${id}`)
            .then(res => setMakeupDetails(res.data))
            .catch(error => console.log(error))
    }, [id])

    return (
        <>
            <div className='makeupShow'>
                <h2> {makeupDetails.product_name} </h2>
                <img src={makeupDetails.image_url} alt='product' />
                <h3> Price ${makeupDetails.price}</h3>

            </div>

            <aside className='makeupShow-button'>
                <Link to={`/makeup/${id}/edit`}>
                    EDIT
                </Link>
                <button onClick={() => handleDelete()}>
                    DELETE
                </button >
            </aside>
        </>
    );
};

export default MakeupShow;