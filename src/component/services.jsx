import { Col, Container, Row } from 'react-bootstrap';
import classes from '../scss/services.module.scss';

const Services = () => (
    <section id={classes.services}>
        <Container>
            <div className={classes.title}>What we do</div>
            <h2 className={classes.heading}>Our services</h2>

            <Row>
                <Col md={4} sm={6}>
                    <figure>
                        <img src="img/services1.jpg" alt="services" className="img-fluid" />

                        <figcaption>
                            <p className={classes.title}>DISCOVER</p>
                            <h3>Portrait Photography</h3>
                            <p className={classes.arrowSimbol}> &#8594;</p>
                        </figcaption>
                    </figure>
                </Col>

                <Col md={4} sm={6}>
                    <figure>
                        <img src="img/services2.jpg" alt="services" className="img-fluid" />

                        <figcaption>
                            <p className={classes.title}>DISCOVER</p>
                            <h3>Portrait Photography</h3>
                            <p className={classes.arrowSimbol}> &#8594;</p>
                        </figcaption>
                    </figure>
                </Col>

                <Col md={4} sm={6}>
                    <figure>
                        <img src="img/services3.jpg" alt="services" className="img-fluid" />

                        <figcaption>
                            <p className={classes.title}>DISCOVER</p>
                            <h3>Portrait Photography</h3>
                            <p className={classes.arrowSimbol}> &#8594;</p>
                        </figcaption>
                    </figure>
                </Col>

                <Col>
                    <div className={classes.servicesPage}>
                        <a href="services.html">All Services</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Services;
