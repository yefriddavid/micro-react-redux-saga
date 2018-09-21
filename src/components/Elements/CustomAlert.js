import React from 'react'
import { Alert } from 'reactstrap'

const CustomAlert = ( {type, message} ) => {
    return(
        <Alert color={type}>{message}</Alert>
    )
}

export default CustomAlert