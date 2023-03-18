import classes from "./Home-nav.module.scss"
import { Link } from 'react-router-dom'
import logo from "../../images/logo.png"

const HomeNav = () => {
    return(
        <nav className={classes["main_nav"]}>
            <div className={classes["main__image"]}>
                <img src={logo} alt='logo' />
            </div>
            {/*<div className={classes.profile}>*/}
            {/*  <a href='#' >User profile</a>*/}
            {/*</div>*/}
            <ul className={classes["main__list"]}>
                <li className={classes["list__item"]}>
                    <a href='#' className={classes["link__item"]}>Features</a>
                </li>
                <li className={classes["list__item"]}>
                    <a href='#' className={classes["link__item"]}>Operations</a>
                </li>
                <li className={classes["list__item"]}>
                    <a href='#' className={classes["link__item"]}>Testimonials</a>
                </li>
                <li className={classes["list__item"]}>
                    <Link to={"/authentication"} className={classes["login__link"]}>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HomeNav