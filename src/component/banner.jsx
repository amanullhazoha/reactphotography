import { Container } from 'react-bootstrap';
import classes from '../scss/banner.module.scss';

const Banner = () => (
    <section id={classes.banner}>
        <div className={classes.overflow} />
        <Container className={classes.containerWidth}>
            <div className={classes.content}>
                <div className={classes.caption}>
                    <h5>ESTD 2021</h5>
                    <h1>DAN HALSMAN</h1>
                    <h5>PHOTOGRAPHER</h5>
                    <span className={classes.left} />
                    <span className={classes.right} />
                </div>
            </div>

            <div className={classes.downBtn}>
                <button type="button">
                    <i className="fas fa-chevron-down" />
                    <i className="fas fa-chevron-down" />
                </button>
            </div>
        </Container>
    </section>
);

export default Banner;
