import React from 'react'
import { LoginBox, LoginContainer, LoginInput, LoginInputBox, LoginTitle,LoginButtonBox,LoginCreate,LoginButton, LoginTitleBox } from './LoginElements'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import './Login.css'
import { act } from 'react-dom/test-utils'

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate();
    const [{user}, dispatch] = useStateValue();
    
    const handleLogin = () => {
        console.log(email, password)
        navigate('/HomePage')
        dispatch({
            type: 'SET_USER',
            user : email,
        })
    }
  return (
    <div className='Login'>
        <LoginContainer>
            <LoginBox>
            <LoginTitleBox>
                <LoginTitle>Login</LoginTitle>
            </LoginTitleBox>
                <LoginInputBox>
                    <LoginInput placeholder='Email Address' value = {email} onChange={(e) => setEmail(e.target.value)}/>
                    <LoginInput placeholder='Password' value = {password} onChange={(e) => setPassword(e.target.value)}/>
                </LoginInputBox>

                <LoginButtonBox>
                    <LoginCreate>Create Account</LoginCreate>
                    <LoginButton onClick = {() => handleLogin()}>Login</LoginButton>
                </LoginButtonBox>
            </LoginBox>
        </LoginContainer>
    </div>
  )
}

export default Login