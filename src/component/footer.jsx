import { Col, Container, Row } from 'react-bootstrap';
import classes from '../scss/footer.module.scss';

const Footer = () => (
    <footer id={classes.footer}>
        <div id={classes.footerTop}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className={classes.content}>
                            <div id={classes.logo}>
                                <a href="index.html">
                                    <img src="img/logo.png" alt="logo" className="img-fluid" />
                                </a>
                            </div>

                            <p className={classes.parh}>
                                Dan Photography Agency habitant morbi tristique senectus et netus et
                                malesuada fames shootin the lacinia the adama sor drana diam.
                            </p>
                        </div>
                    </Col>

                    <Col md={{ span: 4, offset: 1 }}>
                        <div className={classes.content}>
                            <h3>Get in touch</h3>

                            <p className={classes.parh} style={{ lineHeight: '30px' }}>
                                E: info@danhalsman.com
                                <br />
                                P: +1 650-444-0000
                                <br />
                                A: 525 West Ave, CT 06850 — Norwalk
                            </p>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className={classes.content}>
                            <h3>Follow Us</h3>
                            <p className={classes.parh}>
                                You can follow us on our social media accounts for up-to-date
                                photos.
                            </p>

                            <ul className={classes.socailIcon}>
                                <a href="-">
                                    <li>
                                        <i className="fab fa-facebook-f" />
                                    </li>
                                </a>

                                <a href="-">
                                    <li>
                                        <i className="fab fa-instagram" />
                                    </li>
                                </a>

                                <a href="-">
                                    <li>
                                        <i className="fab fa-pinterest-p" />
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div id={classes.footerBottom}>
            <Container>
                <Row>
                    <Col>
                        <p className={classes.parh}>&copy; 2021 Dan Halsman. All right reserved.</p>
                        <ul className={classes.footerList}>
                            <a href="-">
                                <li>Trems of use</li>
                            </a>

                            <a href="-">
                                <li>|</li>
                            </a>

                            <a href="-">
                                <li>Privacy and Policy</li>
                            </a>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
);

export default Footer;
