import './Login.css'
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const Login = () => {
    useEffect(() => {
        anime({
            targets: '.login__container',
            scale: [0.75, 1],
            opacity: [0, 1],
            delay: 250,
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
                    <span>Interested in joining ?</span><br />
                    <a href="https://tedx.deerwalk.edu.np/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='underline' style={{ color: 'var(--primary)' }}>Register now!</a>
                </form>
            </div>
        </div>
    )
}

export default Login
