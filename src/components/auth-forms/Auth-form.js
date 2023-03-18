import {

  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthWithEmailAndPassword

} from '../../api/farebase/farebas-api'

import classes from "./Auth-form.module.scss"
import Button from '../buttons/Button'
import button from '../buttons/Button'
import InputFields from '../UI/input-fields/Input-fields'
import { useState } from 'react'

const defaultInputValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const  AuthForm = () => {
  const [inputValues, setInputValues] = useState(defaultInputValues)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const {displayName, email, password, confirmPassword} = inputValues

  const changeInputHandler = (e) => {
    const {name, value} = e.target
    setInputValues({...inputValues, [name]: value})
    setEmailError(false)
    setPasswordError(false)
    setErrorMessage("")
  }

  const resetInputHandler = () => {
    setInputValues(defaultInputValues)
  }

  const signWithGoogle = async () => {
    const {user} =  await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const createAccountSubmitHandler = async (e) => {
    e.preventDefault()

    try{

      const {user} = await createAuthWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, {displayName})

      resetInputHandler()

    } catch (e){
      console.log(e)
      if (e.code === "auth/email-already-in-use"){
        setEmailError(true)
        setErrorMessage("Email (already exist)")


      }
      if (e.code === "auth/weak-password"){
        setPasswordError(true)
        setErrorMessage("Weak password")

      }
    }

  }

  return (

      <form className={classes["auth-form"]} onSubmit={createAccountSubmitHandler}>
        <InputFields label={"Display name"} type={"text"} name={"displayName"} value={displayName} required onChange={changeInputHandler}/>

        <InputFields label={emailError && !passwordError ? errorMessage : "Email" }
                     type={"email"} name={"email"}
                     value={email}
                     required
                     error={emailError}
                     onChange={changeInputHandler}/>

        <InputFields label={passwordError && !emailError ? errorMessage : "Password"}
                     type={"password"}
                     name={"password"}
                     value={password}
                     required
                     error={passwordError}
                     onChange={changeInputHandler}/>

        <Button type={"submit"}>Create account</Button>
        <Button onClick={signWithGoogle} type={"button"} buttonStyle={"google"}>goggle sign in</Button>
      </form>

  )
}

export default AuthForm