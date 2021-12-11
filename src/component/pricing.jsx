import { Col, Container, Row } from 'react-bootstrap';
import classes from '../scss/pricing.module.scss';

const Pricing = () => (
    <section id={classes.pricing}>
        <Container>
            <div className="title">Shooting</div>
            <h2 className="heading">Pricing Tables</h2>

            <Row>
                <Col md={4}>
                    <div
                        className={classes.pricingContent}
                        style={{ backgroundImage: 'url(img/pricing1.jpg)' }}
                    >
                        <div className={classes.pricingBox}>
                            <h3>Stander</h3>
                            <div className={classes.priceBlock}>
                                <p className={classes.price}>
                                    <sup>$</sup>300
                                </p>
                            </div>
                            <p className={classes.parh}>3 hours session</p>
                            <p className={classes.parh}>Photo editing</p>
                            <p className={classes.parh}>50 Digital Images</p>
                            <p className={classes.parh}>Online Gallery</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div
                        className={classes.pricingContent}
                        style={{ backgroundImage: 'url(img/pricing2.jpg)' }}
                    >
                        <div className={classes.pricingBox}>
                            <h3>Premium</h3>
                            <div className={classes.priceBlock}>
                                <p className={classes.price}>
                                    <sup>$</sup>450
                                </p>
                            </div>
                            <p className={classes.parh}>3 hours session</p>
                            <p className={classes.parh}>Photo editing</p>
                            <p className={classes.parh}>50 Digital Images</p>
                            <p className={classes.parh}>Online Gallery</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div
                        className={classes.pricingContent}
                        style={{ backgroundImage: 'url(img/pricing3.jpg)' }}
                    >
                        <div className={classes.pricingBox}>
                            <h3>Platimun</h3>
                            <div className={classes.priceBlock}>
                                <p className={classes.price}>
                                    <sup>$</sup>750
                                </p>
                            </div>
                            <p className={classes.parh}>3 hours session</p>
                            <p className={classes.parh}>Photo editing</p>
                            <p className={classes.parh}>50 Digital Images</p>
                            <p className={classes.parh}>Online Gallery</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Pricing;
