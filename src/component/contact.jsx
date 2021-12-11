import { Col, Container, Row } from 'react-bootstrap';
import classes from '../scss/contact.module.scss';

const Contact = () => (
    <section id={classes.contact}>
        <Container>
            <div className="title">Location</div>
            <h2 className="heading">Contact us</h2>

            <Row>
                <Col md={5}>
                    <div className={classes.content}>
                        <p className={classes.parh}>
                            {`I'd love to hear from you! Please fill out the form below or send a note
                            directly with as much details as possible to info@danhalsman.com`}
                        </p>

                        <p className={classes.parh}>
                            <span>Phone </span>: +1 650-444-0000
                        </p>
                        <p className={classes.parh}>
                            <span>Address </span>: 525 West Ave, CT 06850 Norwalk
                        </p>
                        <p className={classes.parh}>
                            <span>Email </span>: info@danhalsman.com
                        </p>
                        <p className={classes.parh}>
                            <span>Google Map </span>: Get Directions
                        </p>
                    </div>
                </Col>

                <Col md={{ span: 5, offset: 2 }}>
                    <div className={classes.content}>
                        <p className={classes.parh}>
                            <span>Get in touch</span>
                        </p>

                        <form method="post">
                            <Row>
                                <Col md={6}>
                                    <input
                                        type="text"
                                        value=""
                                        id="name"
                                        name="name"
                                        placeholder="Your Name*"
                                    />
                                </Col>

                                <Col md={6}>
                                    <input
                                        type="email"
                                        value=""
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                    />
                                </Col>

                                <Col md={12}>
                                    <textarea rows="4" placeholder="Message" />
                                </Col>

                                <Col md={12}>
                                    <button type="submit">Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Contact;
