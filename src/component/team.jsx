import { Col, Container, Row } from 'react-bootstrap';
import classes from '../scss/team.module.scss';

const Team = () => (
    <section id={classes.team}>
        <Container>
            <div className="title">Photographer</div>
            <h2 className={classes.heading}>Awesome Team</h2>

            <Row>
                <Col md={4} sm={6}>
                    <figure>
                        <a href="-">
                            <img src="img/team1.jpg" alt="team" className="img-fluid" />
                        </a>

                        <figcaption>
                            <h3>Kristin Bowles</h3>
                            <p className="parh">Wedding Photographer</p>

                            <div className={classes.contactInfo}>
                                <ul className={classes.icon}>
                                    <li>
                                        <a href="-">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="-">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="-">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                                <p className="parh">kistin@danphoto.com</p>
                            </div>
                        </figcaption>
                    </figure>
                </Col>

                <Col md={4} sm={6}>
                    <figure>
                        <a href="-">
                            <img src="img/team2.jpg" alt="team" className="img-fluid" />
                        </a>

                        <figcaption>
                            <h3>Nelsan Compton</h3>
                            <p className="parh">Model Photographer</p>

                            <div className={classes.contactInfo}>
                                <ul className={classes.icon}>
                                    <li>
                                        <a href="-">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="-">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="-">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                                <p className="parh">nalsan@danphoto.com</p>
                            </div>
                        </figcaption>
                    </figure>
                </Col>

                <Col md={4} sm={6}>
                    <figure>
                        <a href="-">
                            <img src="img/team3.jpg" alt="team" className="img-fluid" />
                        </a>

                        <figcaption>
                            <h3>Micheal Preston</h3>
                            <p className="parh">Event Photographer</p>

                            <div className={classes.contactInfo}>
                                <ul className={classes.icon}>
                                    <li>
                                        <a href="-">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="-">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="-">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                                <p className="parh">micheal@danphoto.com</p>
                            </div>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Team;
