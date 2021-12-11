import { Col, Container, Row } from 'react-bootstrap';
import classes from '../scss/about.module.scss';

const About = () => (
    <section id={classes.about}>
        <Container>
            <Row>
                <Col>
                    <div className={classes.content}>
                        <div className={classes.title}>About us</div>
                        <h2 className={classes.heading}>Dan halsman</h2>

                        <p className={classes.parh}>
                            Quisque habitant morbi tristique senectus et netus et malesuada fames ac
                            turpis egestas. Etiam et odio sedan arami accumsan gravida. Mauris in
                            rhoncus mauris. Duis a massa ac ex malesuada aliquet. Mauris odio in
                            devam company the design dolor leo facilisis ligula eget malesuada metus
                            ununc posuere velsem.
                        </p>

                        <p className={classes.parh}>
                            Aliquam erat volutpat. Curabitur tortor mauris, iaculis vel pulvinar at,
                            convallis id mauris. Praesent feugiat dui sit amet ullamcorper blandit
                            ligula ligula volutpat ante sed rhoncus nunc ante non ex. Donec porta
                            elementum estid suscipit nisl bibendum vitae. Sedet nisi lacinia the
                            adam drana diam.
                        </p>

                        <div className={classes.award}>
                            <div className={classes.title}>Our awards</div>

                            <div className={classes.carousel}>
                                <div className={classes.owlCarousel}>
                                    <div className={classes.item}>
                                        <img src="img/1.jpg" alt="award" className="img-fluid" />
                                    </div>
                                    <div className={classes.item}>
                                        <img src="img/2.jpg" alt="award" className="img-fluid" />
                                    </div>
                                    <div className={classes.item}>
                                        <img src="img/3.jpg" alt="award" className="img-fluid" />
                                    </div>
                                    <div className={classes.item}>
                                        <img src="img/4.jpg" alt="award" className="img-fluid" />
                                    </div>
                                    <div className={classes.item}>
                                        <img src="img/5.jpg" alt="award" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default About;
