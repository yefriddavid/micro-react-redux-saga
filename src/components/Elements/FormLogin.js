import React from 'react'
import { Button } from 'reactstrap'

const FormLogin = ( { onSubmitFormLogin, data, onInputChangeValue } ) => {
    return (

        <form onSubmit={(e) => onSubmitFormLogin(e)}>
            <h1>Iniciar Sesion</h1>
            <input type="text" name="username" id="username" value={data.username} onChange={onInputChangeValue} />
            <br />
            <input type="text" name="password" id="password" value={data.password} onChange={onInputChangeValue} />
            <br />
            <Button color="primary"> Login </Button>
        </form>

    )
}

export default FormLogin