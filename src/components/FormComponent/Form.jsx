import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Form.css';



const API = import.meta.env.VITE_APP_API_URL



const Form = () => {



    const navigate = useNavigate()

    const { id } = useParams()

    const [form, setForm] = useState({
        product_name: "",
        price: "",
        instock: false,
        color: "",
        image_url: "",
    })

    //handle text input 

    function handleTextInput(event) {

        const id = event.target.id
        const value = event.target.value

        setForm((currentState) => {
            return {
                ...currentState,
                [id]: value
            }
        })
    }

    function handleCheckBox(event) {
        const isChecked = event.target.checked
        const id = event.target.id

        setForm((currentState) => {
            return {
                ...currentState,
                [id]: isChecked

            }
        })
    }
    //on submit 
    function submitNewMakeup(event) {
        event.preventDefault()

        axios.post(`${API}/makeup`, form)
            .then(res => navigate(`/makeup/${res.data.id}`))
            .catch(err => console.log(err))

    }
    //edit 
    function submitEditForm(event) {
        event.preventDefault
        axios.put(`${API}/makeup/${id}`, {
            ...form
        })
        then(res => navigate(`/makeup/${id}`))
            .catch(err => console.log(err))

    }
    useEffect(() => {
        if (form.image_url === "") {
            setForm((currentState) => {
                return {
                    ...currentState,
                    image_url: "https://www.mooreseal.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
                }
            })
        }
    }, [form.image_url])



    useEffect(() => {
        if (id) {
            axios.get(`${API}/makeup/${id}`)
                .then(res => setForm(res.data))
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <form className='form' onSubmit={(e) => {
            id ? submitEditForm(e)
                : submitNewMakeup(e)
        }}>

            {/* name */}

            <label htmlFor='product_name'>
                <span> Product Name :</span>
                <input id="product_name" type='text' value={form.product_name} required onChange={(event) => { handleTextInput(event) }} />
            </label>

            {/* //checkbox  */}

            <label >
                <span> Instock :</span>
                <input id='instock' type='checkbox' value={form.instock} checked={form.instock} onChange={(e) => { handleCheckBox(e) }} />
            </label>

            {/* image url */}
            <label htmlFor="image_url">
                <span>Product Image Url:</span>
                <input
                    type="url"
                    id="image_url"
                    value={form.image_url}
                    pattern="https://.*"
                    placeholder="https://.com"
                    onChange={(e) => handleTextInput(e)}
                />
            </label>

            {/* price */}

            <label htmlFor='price'>
                <span> Price :</span>
                <input
                    type='number'
                    id='price'
                    value={form.price}
                    placeholder='$'
                    onChange={(e) => handleTextInput(e)}
                />

            </label>

            {/* submit */}

            <input
                className="formSubmitButton"
                type="submit"
                value={id ? "Edit Product" : "Add Product"}
            />

        </form>
    );
};

export default Form;