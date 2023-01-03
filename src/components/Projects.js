import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import tetris from "../assets/img/tetris.jpg";
import fl_bird from "../assets/img/flocking_bird.jpg";
import res_api from "../assets/img/research_api.png";
import car_rent from "../assets/img/carrental.jpg";
import s_jobs from "../assets/img/job.jpg";
import mar_div from '../assets/img/marriage_divorce.jpg'
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

    const projects = [
        {
            title: "Tetris game",
            language: "Assembly Language",
            description: "Tetris game created using assembly language x86 ",
            imgUrl: tetris,
        },
        {
            title: "Flocking Bird Simulation",
            language: "Javascript(P5)",
            description: "Simulation of flocking birds",
            imgUrl: fl_bird,
        },
        {
            title: "Marriage_Divorce Data Analysis",
            language: "Python (pandas, seaborn, matplotlib)",
            description: "The Factors for Marriage Success/Divorce case study analyzes the data of 100 marriage's comparing it with their divorce probability",
            imgUrl: mar_div,
        }
    ]
    const projects2 = [
        {
            title: "Research Api",
            language: "Javascript(nodejs), Mongodb",
            description: "Api used to store, access, manipulate a research data in an institution",
            imgUrl: res_api,
        },
        {
            title: "Car Rental",
            language: "C# SQL",
            description: "a web app used by students to rent a car with eachother",
            imgUrl: car_rent,
        }
    ]
    const projects3 =
        [
            {
                title: "Simple Jobs",
                language: "C# (Blazor), SQL",
                description: "A webapp that allows user's to post and accept a Job",
                imgUrl: s_jobs,
            }
        ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>

                        <h2>Projects</h2>
                        <p>Throughout my career, I have had the opportunity to work on a variety of projects that have allowed me to develop my skills as a software developer. and I am eager to continue learning and expanding my skillset in future projects.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" >
                                <Tab.Pane eventKey="first">
                                    <Row >
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects3.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='projects'></img>
        </section>
    )
}