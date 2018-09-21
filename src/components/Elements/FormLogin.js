import React from 'react'
import CustomAlert from '../Elements/CustomAlert'
import { Button } from 'reactstrap'



const FormLogin = ( { onSubmitFormLogin, data, onInputChangeValue, isFetchingJunior, isError } ) => {

    let message=""
    if(isError){
        message=(<CustomAlert type='danger' message='Error de api'/>)
    }else{
        message=(<CustomAlert type='success' message='Success api'/>)
    }
    return (

        <form onSubmit={(e) => onSubmitFormLogin(e)}>
            <h1>Iniciar Sesion</h1>
            <input type="text" name="username" id="username" value={data.username} onChange={onInputChangeValue} />
            <br />
            <input type="text" name="password" id="password" value={data.password} onChange={onInputChangeValue} />
            <br />
            <Button color="primary" disabled={isFetchingJunior}> Login </Button>
            {message}
        </form>

    )
}

export default FormLogin