import React, {useState} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from "@reach/router";

const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        color: ""
    })

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        axios.post("http://localhost:8000/api/plants/new", form)
            .then(res => console.log(res))
            .then(res => navigate("/"))
    }

    return(
        <div>
            <h1>Create a new plant!</h1>

            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} />
        </div>
    )
}

export default Create;