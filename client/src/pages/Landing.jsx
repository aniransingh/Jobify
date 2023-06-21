import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby dIY iceland typewriter intelligentsia DSA
                        gentrify, squid microdosing. Celiac forage 90's everyday
                        carry franzen. Jean shorts copper mug lo-fi green juice
                        health goth organic irony sartorial banjo kale chips
                        selfies 90's. Aesthetic praxis kitsch gastropub man bun
                        same. Polaroid woke typewriter neutra vegan affogato.
                    </p>
                    <Link to='/register' className='btn btn-hero'>
                        login/register
                    </Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    );
};

export default Landing;
