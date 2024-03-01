import React from 'react';
import axios from 'axios';
import { useState , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Form.css';



const API = import.meta.env.VITE_APP_API_URL



const Form = () => {



    const navigate = useNavigate()

    const {id} = useParams()

    const [form, setForm] = useState({
        product_name: "",
        price: "",
        instock: false,
        color: ""
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

    function handleCheckBox (event){
        const isChecked = event.target.checked
        const id = event.target.id

        setForm((currentState) => {
            return{
                ...currentState,
                [id] : isChecked

            }
        })
    }
//on submit 
    function submitNewMakeup (event) {
        event.preventDefault()

        axios.post(`${API}/makeup`, form )
        .then(res =>navigate (`/makeup/${res.data.id}`) )
        .catch(err => console.log(err))

    }
//edit 
function submitEditForm (event){
    event.preventDefault
axios.put(`${API}/makeup/${id}`, {
    ...form
})
then(res => navigate(`/makeup/${id}`))
.catch(err => console.log(err))

}


    useEffect(() =>{
        if(id){
            axios.get(`${API}/makeup/${id}`)
            .then(res => setForm(res.data))
            .catch(err => console.log(err))
        }
    }, [])

    return (
        <form className='form' onSubmit={(e) =>  { id ? submitEditForm(e)
            :submitNewMakeup(e)}}>

            <label htmlFor='product_name'>
                <input id="product_name" type='text' value={form.product_name} required onChange={(event) => { handleTextInput(event) }} />
            </label>

//checkbox 

<label htmlFor=''>
<span> Instock :</span>
<input id='instock' type='checkbox' value={form.instock} checked={form.instock} onChange={(e) => {handleCheckBox(e)}}/>
</label>
        </form>
    );
};

export default Form;