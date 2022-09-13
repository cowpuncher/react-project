import React from 'react';

function FormReg(props) {
    return (
        <div className="formReg">
            <form className={props.elem}>
                <label>
                    Input your name:
                    <input value={props.input} type="text" name="name"  onChange={props.handleChange} />
                </label>
                <button type="button" onClick={props.addName}>Send</button>
            </form>
        </div>
    );
}

export default FormReg;