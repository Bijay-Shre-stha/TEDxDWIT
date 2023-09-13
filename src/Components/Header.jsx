import './Header.css';
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";


const Header = () => {
    useEffect(() => {
        anime({
            targets: '.heading',
            scale: [0.75, 1],
            opacity: [0, 1],
            delay: 2000,
            duration: 2000,
            easing: 'easeInOutQuad'
        })
        anime({
            targets: '.heading__text',
            scale: [0.75, 1],
            opacity: [0, 1],
            delay: 3000,
            duration: 2000,
            easing: 'easeInOutQuad'
        })
        anime({
            targets: '.college',
            scale: [0.5, 1],
            opacity: [0, 1],
            delay: 1000,
            duration: 2000,
            easing: 'easeInOutQuad'
        })
    }, [])
    return (
        <div className='header__container'style={{ color: `var(--tertiary)` }}>
            <h2 className='college text-4xl' style={{ color: 'var(--primary)' }}>Deerwalk Institute Of Technology <span className='text-white font-bold text-3xl '>presents</span> </h2>
                <div className='header__content'>
                    <h1 className='heading text-5xl mt-5' style={{ color: 'var(--primary)' }}>TED<sup>X</sup></h1>
                    <span className='heading__text'>DWIT College</span>
            </div>
        </div>
    );
}

export default Header;
