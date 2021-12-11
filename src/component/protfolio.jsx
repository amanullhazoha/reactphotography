import { Col, Container, Row } from 'react-bootstrap';
import classes from '../scss/protfolio.module.scss';

const Protfolio = () => (
    <section id={classes.portfolio}>
        <Container>
            <div className={classes.title}>Gallary</div>
            <h2 className={classes.heading}>Protfolio</h2>

            <Row>
                <Col md={4}>
                    <div className={classes.content}>
                        <div className={classes.imgBox}>
                            <figure>
                                <img
                                    src="img/protfolio1.jpg"
                                    alt="protfoli"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className={classes.content}>
                        <div className={classes.imgBox}>
                            <figure>
                                <img
                                    src="img/protfolio2.jpg"
                                    alt="protfoli"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className={classes.content}>
                        <div className={classes.imgBox}>
                            <figure>
                                <img
                                    src="img/protfolio3.jpg"
                                    alt="protfoli"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className={classes.content}>
                        <div className={classes.imgBox}>
                            <figure>
                                <img
                                    src="img/protfolio4.jpg"
                                    alt="protfoli"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className={classes.content}>
                        <div className={classes.imgBox}>
                            <figure>
                                <img
                                    src="img/protfolio5.jpg"
                                    alt="protfoli"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className={classes.content}>
                        <div className={classes.imgBox}>
                            <figure>
                                <img
                                    src="img/protfolio6.jpg"
                                    alt="protfoli"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className={classes.content}>
                        <div className={classes.imgBox}>
                            <figure>
                                <img
                                    src="img/protfolio7.jpg"
                                    alt="protfoli"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className={classes.content}>
                        <div className={classes.imgBox}>
                            <figure>
                                <img
                                    src="img/protfolio8.jpg"
                                    alt="protfoli"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className={classes.content}>
                        <div className={classes.imgBox}>
                            <figure>
                                <img
                                    src="img/protfolio9.jpg"
                                    alt="protfoli"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Protfolio;
