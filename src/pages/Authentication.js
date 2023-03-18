import classes from './Authentication.module.scss'
import AuthNav from '../components/navigation/Auth-nav'
import AuthForm from '../components/auth-forms/Auth-form'
import LoginForm from '../components/auth-forms/Login-form'


const Authentication = () => {
  return (
    <div className={classes["auth-container"]}>
      <AuthNav />
      <section className={classes["auth-content"]}>
        <AuthForm />
        <LoginForm/>
      </section>
    </div>
  )
}

export default Authentication