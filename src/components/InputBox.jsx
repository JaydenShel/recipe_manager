import React from 'react';

function TextBox({ label, type = 'text', required, value, onChange }) {
    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div>
            <label className="label">{label}:</label>
            <input
                type={type}
                required={required}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default TextBox;