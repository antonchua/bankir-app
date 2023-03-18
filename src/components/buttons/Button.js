import classes from "./Button.module.scss"
import "./Button.scss"

const BUTTON_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted"
}

const Button  = ({children, buttonStyle ,...props}) => {

  return <button className={`${classes["button-container"]} ${classes[BUTTON_CLASSES[buttonStyle]]}`} {...props}>{children}</button>

}

export default Button