import './Header.css';

const Header = () => {
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
