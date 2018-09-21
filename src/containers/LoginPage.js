import React, { Component } from 'react'
import LoginPageComponent from '../components/LoginPage/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions' 

class LoginContainer extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            username: "",
            password: "",
        }
    }

    onSubmitFormLogin = (e) => {
        e.preventDefault()
        const formData = this.state
        this.props.actions.auth.login(formData)        
    }

    onInputChangeValue = (e) => {
        let columnName = e.target.name
        this.setState({
            [columnName]: e.target.value
        })


    }

    render() {

        return(
            <LoginPageComponent onSubmitFormLogin={this.onSubmitFormLogin} data={this.state} onInputChangeValue={this.onInputChangeValue} isFetchingJunior={this.props.isFetchingJunior} isError={this.props.errorRequest}/>
        )

    } 

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isFetchingJunior: state.login.rest.fetching,
        errorRequest : state.login.rest.isError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            auth: bindActionCreators(authActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)