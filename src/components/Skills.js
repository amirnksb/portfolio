import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>

                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="circle_box">
                                    <div className="svg_percent">
                                        <svg >
                                            <circle className="c1" r='35%' cx='50%' cy='50%' />
                                            <circle className="c2" r='35%' cx='50%' cy='50%' />
                                        </svg>
                                        <div className="svg_number">
                                            <h3>95<span>%</span></h3>
                                        </div>
                                    </div>
                                    <h5>Problem-Solving</h5>
                                </div>
                                <div className="circle_box">
                                    <div className="svg_percent">
                                        <svg >
                                            <circle className="c3" r='35%' cx='50%' cy='50%' />
                                            <circle className="c4" r='35%' cx='50%' cy='50%' />
                                        </svg>
                                        <div className="svg_number">
                                            <h3>90<span>%</span></h3>
                                        </div>
                                    </div>
                                    <h5>Teamwork</h5>
                                </div>
                                <div className="circle_box">
                                    <div className="svg_percent">
                                        <svg >
                                            <circle className="c11" r='35%' cx='50%' cy='50%' />
                                            <circle className="c12" r='35%' cx='50%' cy='50%' />
                                        </svg>
                                        <div className="svg_number">
                                            <h3>88<span>%</span></h3>
                                        </div>
                                    </div>
                                    <h5>Data Analysis</h5>
                                </div>
                                <div className="circle_box">
                                    <div className="svg_percent">
                                        <svg >
                                            <circle className="c5" r='35%' cx='50%' cy='50%' />
                                            <circle className="c6" r='35%' cx='50%' cy='50%' />
                                        </svg>
                                        <div className="svg_number">
                                            <h3>92<span>%</span></h3>
                                        </div>
                                    </div>
                                    <h5>Coding</h5>
                                </div>
                                <div className="circle_box">
                                    <div className="svg_percent">
                                        <svg >
                                            <circle className="c7" r='35%' cx='50%' cy='50%' />
                                            <circle className="c8" r='35%' cx='50%' cy='50%' />
                                        </svg>
                                        <div className="svg_number">
                                            <h3>87<span>%</span></h3>
                                        </div>
                                    </div>
                                    <h5>Front-end development</h5>
                                </div>
                                <div className="circle_box">
                                    <div className="svg_percent">
                                        <svg >
                                            <circle className="c9" r='35%' cx='50%' cy='50%' />
                                            <circle className="c10" r='35%' cx='50%' cy='50%' />
                                        </svg>
                                        <div className="svg_number">
                                            <h3>95<span>%</span></h3>
                                        </div>
                                    </div>
                                    <h5>Back-end development</h5>
                                </div>
                            </Carousel>
                            <h5>Technical skills</h5>
                            <p>Languages: <span>Java, Python, C#, C++, javascript, Assembly Language, SQL</span></p>
                            <p>Databases: <span> MySQL, MongoDB, Oracle </span></p>
                            <p>Framework/packages: <span> React JS, Node JS, Angular, NET Frameworks, Spring, Django </span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt='skills' />
        </section>
    )

}