import { Link, Outlet, useNavigate } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { useAppContext } from '../../context/AppContext';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';

const SharedLayout = () => {
    return (
        <Wrapper>
            <main className='dashboard'>
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <Navbar />
                    <div className='dashboard-page'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};
export default SharedLayout;
