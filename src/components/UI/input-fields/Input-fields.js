import classes from "./Input-fields.module.scss"

const InputFields = ({label, error, ...props}) => {

    const inputStyle = error ? `${classes["fields-container"]} ${classes.error}` : classes["fields-container"]
    return(
        <div className={inputStyle}>
            <label>{label}</label>
            <input {...props}/>
        </div>
    )

}

export default InputFields