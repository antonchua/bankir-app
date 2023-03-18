import {Link} from "react-router-dom";
import logo from "../../images/logo.png"
import classes from "./Auth-nav.module.scss"

const AuthNav = () => {
    return(
        <nav className={classes["login_nav"]}>
            <div className={classes["login__image"]}>
                <img src={logo} alt='logo' />
            </div>
            <ul className={classes["login__list"]}>
                <li className={classes["list__item"]}>
                    <Link to={"/"} href='#' className={classes["link__item"]}>Home</Link>
                </li>
                <li className={classes["list__item"]}>
                    <a href='#' className={classes["link__item"]}>Profile</a>
                </li>
                <li className={classes["list__item"]}>
                    <a href='#' className={classes["link__item"]}>Change password</a>
                </li>
                <li className={classes["list__item"]}>
                    <Link to={"/login"} className={classes["login__link"]}>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default AuthNav