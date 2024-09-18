import s from '../styles/Main.module.css'
import { Link } from 'react-router-dom'
import {useState} from "react";

const FIELDS = {
    NAME: 'name',
    ROOM: 'room',
}

const Main = () => {
    const { NAME, ROOM } = FIELDS;

    const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" })

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values,  [name]: value})
    }

    const handleClick = (e) => {
        const isDisabled = Object.values(values).some((value) => !value);
        console.log(isDisabled)
    }

    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <h1 className={s.heading}>Join</h1>

                <form className={s.form}></form>
                <div className={s.group}>
                    <input type="text"
                           placeholder='Username'
                           name="name" value={values[NAME]}
                           className={s.input}
                           onChange={ handleChange}
                           autoComplete="off"
                           required/>
                </div>
                <div className={s.group}>
                    <input type="text"
                           name="room"
                           placeholder='Room'
                           value={values[ROOM]}
                           className={s.input}
                           onChange={handleChange}
                           autoComplete="off"
                           required/>
                </div>
                <Link className={s.group}
                      onClick={handleClick}
                      to={`/chat?name=${values[NAME]}`} >
                    <button type="submit" className={s.button} >
                        Sign in
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Main;