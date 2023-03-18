import classes from './Login-form.module.scss'
import { userSingInWithEmailAndPassword } from '../../api/farebase/farebas-api'
import InputFields from '../UI/input-fields/Input-fields'
import Button from '../buttons/Button'
import { useState } from 'react'

const defaultInputFields = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const [inputFields, setInputFields] = useState(defaultInputFields)
  const { email, password } = inputFields
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const resetInputHandler = () => {
    setInputFields(defaultInputFields)
  }

  const changeInputHandler = (e) => {
    const { name, value } = e.target
    setInputFields({ ...inputFields, [name]: value })
    setEmailError(false)
    setPasswordError(false)
    setErrorMessage("")
  }

  const loginFormSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      await userSingInWithEmailAndPassword(email, password)
      resetInputHandler()
    } catch (e) {
      if (e.code === 'auth/user-not-found') {
        setEmailError(true)
        setErrorMessage("Wrong email")
        console.log(e)
      }
      if (e.code === 'auth/wrong-password') {
        setPasswordError(true)
        setErrorMessage("Wrong password")
        console.log(e)
      }
    }

  }


  return (
    <form className={classes['login-form']} onSubmit={loginFormSubmitHandler}>
      <InputFields
        error={emailError}
        label={emailError && !passwordError ? errorMessage : "Email"}
        type={'email'}
        name={'email'}
        value={email}
        required
        onChange={changeInputHandler} />
      <InputFields
        error={passwordError}
        label={passwordError && !emailError ? errorMessage : "Password"}
        type={'password'}
        name={'password'}
        value={password}
        required
        onChange={changeInputHandler} />
      <Button type={'submit'}>Sign in</Button>
    </form>
  )
}

export default LoginForm