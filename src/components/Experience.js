import { Container, Row } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import dsu from '../assets/img/DSU.jpg'
import midco from '../assets/img/Midco.png'
import nk from '../assets/img/nk.jpg'

export const Experience = () => {

    const experiences = [
        {
            title: 'Research - Twitter Fake Domain Tracking',
            institution: "Dakota State University",
            location: 'Madison, SD',
            timeFrame: 'October, 2022 - Ongoing',
            description: 'Ongoing research to investigate how attackers might take advantage of invalid hyperlinks in Twitter posts to drive unsuspecting users to malicious webpages. When composing a twitter post, if the author neglects to put a space (” “) after the period at the end of a sentence then the last word of that sentence and the first word of the next sentence may form web link',
            imageUrl: dsu,
            instituteUrl: 'https://dsu.edu/'
        },
        {
            title: 'Software Developer-Intern',
            institution: "Midcontinent Communications",
            location: 'Sioux falls, SD',
            timeFrame: 'June, 2022 - August 2022',
            description: 'Creating a well-designed feature for a software using [c#, SQL, JavaScript, .net Framework], Modifying existing software and assist my team in some individual tasks and	Connect & learn from Midco team',
            imageUrl: midco,
            instituteUrl: 'https://www.midco.com/'
        },
        {
            title: 'IT Consultant, Customer Service',
            institution: "NK Trading PLC",
            location: 'Addis Ababa, Ethiopia',
            timeFrame: 'June, 2021 - August 2021',
            description: '	Help traditional local business go digital through teaching and mentoring and Assist customers with their orders, work with warehouse to deliver product ',
            imageUrl: nk,
            instituteUrl: ''
        }
    ]

    return (
        <section className="experience" id="experiences">
            <Container>
                <div className="experience_bx">
                    <h2>Experiences</h2>

                    <Row>
                        {
                            experiences.map((experience, index) => {
                                return (
                                    <ExperienceCard
                                        key={index}
                                        {...experience}
                                    />
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </section>
    )
}