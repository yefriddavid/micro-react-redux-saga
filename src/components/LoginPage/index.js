import React from 'react'
import './index.css'
import FormLogin from '../Elements/FormLogin'

const LoginPage = ( { onSubmitFormLogin, data, onInputChangeValue } ) => {
    
    return (
        <div>
            <div className="row row-justify-content">
                <div className="col-md-4">
                    <FormLogin onSubmitFormLogin={onSubmitFormLogin} data={data} onInputChangeValue={onInputChangeValue} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage