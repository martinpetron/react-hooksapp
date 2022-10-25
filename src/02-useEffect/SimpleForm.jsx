import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'hook',
        email: 'martinpetron@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        // console.log(event.target.name);
        // console.log(event.target.value);

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
        
    }

    useEffect( () => {
        // console.log('useEffect called');
    }, [] ); //si se pone [] es para que el useeffect se utilice una sola vez cuando el componente se renderiza

    useEffect( () => {
        // console.log('formState changed');
    }, [formState] );

    useEffect( () => {
        // console.log('email changed');
    }, [email] );




  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange= { onInputChange }
        />

        <input 
            type="text" 
            className="form-control mt-2"
            placeholder="martin@gmail.com"
            name="email"
            value={ email }
            onChange= { onInputChange }
        />

        {
            (username === 'hook2' ) && <Message />
        }
    </>
  )
}
