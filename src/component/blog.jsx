import { Col, Container, Row } from 'react-bootstrap';
import classes from '../scss/blog.module.scss';

const Blog = () => (
    <section id={classes.blog}>
        <Container>
            <div className="title">Read</div>
            <h2 className={classes.heading}>Latest news</h2>

            <Row>
                <Col md={4}>
                    <div
                        className={classes.blogContent}
                        style={{ backgroundImage: 'url(img/services3.jpg)' }}
                    >
                        <div className={classes.overly}>
                            <div className={classes.post}>
                                <div className={classes.postDate}>
                                    <a href="-">
                                        <p>
                                            <span>
                                                <i className="far fa-clock" /> Decembor 2021
                                            </span>
                                            <span>
                                                <i className="far fa-comment-alt" /> 0 Comments
                                            </span>
                                        </p>
                                    </a>
                                </div>

                                <a href="-">
                                    <h3 className={classes.postTitle}>Black &amp; white shorts</h3>
                                </a>

                                <p className={classes.parh}>
                                    Quisque luctus tincidunt enim dapibusen pharetra neue ultricies
                                    at. Morbi dapibus mauris id selerisque placerat nula massa
                                    lacinia orci in facilisis nulla.
                                </p>

                                <a href="-">
                                    <button type="button">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div
                        className={classes.blogContent}
                        style={{ backgroundImage: 'url(img/services2.jpg)' }}
                    >
                        <div className={classes.overly}>
                            <div className={classes.post}>
                                <div className={classes.postDate}>
                                    <a href="-">
                                        <p>
                                            <span>
                                                <i className="far fa-clock" /> Decembor 2021
                                            </span>
                                            <span>
                                                <i className="far fa-comment-alt" /> 0 Comments
                                            </span>
                                        </p>
                                    </a>
                                </div>

                                <a href="-">
                                    <h3 className={classes.postTitle}>Black &amp; white shorts</h3>
                                </a>

                                <p className={classes.parh}>
                                    Quisque luctus tincidunt enim dapibusen pharetra neue ultricies
                                    at. Morbi dapibus mauris id selerisque placerat nula massa
                                    lacinia orci in facilisis nulla.
                                </p>

                                <a href="-">
                                    <button type="button">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div
                        className={classes.blogContent}
                        style={{ backgroundImage: 'url(img/services4.jpg)' }}
                    >
                        <div className={classes.overly}>
                            <div className={classes.post}>
                                <div className={classes.postDate}>
                                    <a href="-">
                                        <p>
                                            <span>
                                                <i className="far fa-clock" /> Decembor 2021
                                            </span>
                                            <span>
                                                <i className="far fa-comment-alt" /> 0 Comments
                                            </span>
                                        </p>
                                    </a>
                                </div>

                                <a href="-">
                                    <h3 className={classes.postTitle}>Black &amp; white shorts</h3>
                                </a>

                                <p className={classes.parh}>
                                    Quisque luctus tincidunt enim dapibusen pharetra neue ultricies
                                    at. Morbi dapibus mauris id selerisque placerat nula massa
                                    lacinia orci in facilisis nulla.
                                </p>

                                <a href="-">
                                    <button type="button">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Blog;
