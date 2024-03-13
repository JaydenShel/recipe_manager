function TextBox({label, type = 'text', required}){
    return(
        <div>
            <label className="label">{label}:</label>
            <input
                type = {type}
                required = {required}
            />
        </div>
    )
}

export default TextBox;