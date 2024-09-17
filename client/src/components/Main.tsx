import s from '../styles/Main.module.css'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <h1 className={s.heading}>Join</h1>

                <form className={s.form}></form>
                <div className={s.group}>
                    <input type="text" placeholder='username' name="username" value="" className={s.input} onChange={() => {
                    }} autoComplete="off"/>
                </div>
                <div className={s.group}>
                    <input type="text" name="room" placeholder='Room' value="" className={s.input} onChange={() => {
                    }} autoComplete="off"/>
                </div>
                <Link to='/chat' >
                    <button type="submit"></button>
                </Link>
            </div>
        </div>
    );
};

export default Main;