import { Col } from "react-bootstrap";

export const ExperienceCard = ({ title, institution, location, timeFrame, description, imageUrl, instituteUrl }) => {
    return (
        <Col>
            <div >
                <a href={instituteUrl}> <img src={imageUrl} className='exp_img' alt='experienceCard' /> </a>
                <div>
                    <p>{timeFrame}</p>
                    <h3>{title}</h3>
                    <h4 className="institute">{institution}</h4>
                    <h6>{location}</h6>
                    <p>{description}</p>
                </div>
            </div>

        </Col>
    )
}