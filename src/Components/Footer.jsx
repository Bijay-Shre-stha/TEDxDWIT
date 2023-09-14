import club from '../Image/Software club.png'
import './Footer.css'
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const Footer = () => {
    useEffect(() => {
        anime({
            targets: '.credit',
            scale: [0.75, 1],
            opacity: [0, 1],
            delay: 2000,
            duration: 2000,
            easing: 'easeInOutQuad'
        })
    }, [])
    return (
        <div className="credit">
        <div className="credit-content">
            {/* <span className="credit-text">Developed by</span> */}
            <img src={club} className="club__logo" alt="SOFTWARE CLUB LOGO" />
        </div>
    </div>
    
    )
}

export default Footer
