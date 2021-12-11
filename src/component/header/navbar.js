import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import classes from '../../scss/header.module.scss';

const Navbar = () => {
    const [toggler, setToggler] = useState(false);

    return (
        <nav>
            <div className={classes.navbar}>
                <Container>
                    <div className={classes.content}>
                        <div id={classes.logo}>
                            <a href="-">
                                <img src="img/logo.png" alt="Logo" className="img-fluid" />
                            </a>
                        </div>

                        <nav className={`${classes.nav} ${toggler ? 'active' : 'hide'}`}>
                            <ul>
                                <Link to="services" smooth duration={1000}>
                                    <li>Home</li>
                                </Link>
                                <Link to="about" smooth duration={1000}>
                                    <li>About</li>
                                </Link>
                                <Link to="services" smooth duration={1000}>
                                    <li>Services</li>
                                </Link>
                                <Link to="portfolio" smooth duration={1000}>
                                    <li>Portfolio</li>
                                </Link>
                                <Link to="testimonials" smooth duration={1000}>
                                    <li>Testimonials</li>
                                </Link>
                                <Link to="team" smooth duration={1000}>
                                    <li>Team</li>
                                </Link>
                                <Link to="pricing" smooth duration={1000}>
                                    <li>Pricing</li>
                                </Link>
                                <Link to="blog" smooth duration={1000}>
                                    <li>Blog</li>
                                </Link>
                                <Link to="contact" smooth duration={1000}>
                                    <li>Contact</li>
                                </Link>
                            </ul>
                        </nav>

                        <button
                            className={`${classes.toggler} ${toggler ? 'hide' : 'active'}`}
                            type="button"
                            onClick={() => setToggler(true)}
                        >
                            <span className={classes.top} />
                            <span className={classes.bottom} />
                        </button>

                        <button
                            className={`${classes.closeBtn} ${toggler ? 'active' : 'hide'}`}
                            type="button"
                            onClick={() => setToggler(false)}
                        >
                            <span className={classes.top} />
                            <span className={classes.bottom} />
                        </button>
                    </div>
                </Container>
            </div>
        </nav>
    );
};

export default Navbar;
