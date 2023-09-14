import './Login.css'
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const Login = () => {
    useEffect(() => {
        anime({
            targets: '.login__container',
            scale: [0.75, 1],
            opacity: [0, 1],
            delay: 2000,
            duration: 2000,
            easing: 'easeInOutQuad'
        })
    }, [])
    return (
        <div className="content__container">
            <div className="login__container">
                <form>
                    <div className="input__container">
                        <label className='label' htmlFor="username">Username</label>
                        <input className='input__info' type="text" id="username" />
                    </div>
                    <div className="input__container">
                        <label className='label' htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
