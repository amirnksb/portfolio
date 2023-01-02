import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, language, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} className='proj_img' alt='projects' />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <h6>{language}</h6>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}