import classes from '../../scss/header.module.scss';
import Navbar from './navbar';

const Header = () => (
    <header>
        <header id={classes.header}>
            <Navbar />
        </header>
    </header>
);

export default Header;
