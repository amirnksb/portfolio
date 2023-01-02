import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/desktop.svg'
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Front-end Developer', 'Back-end developer', 'Data Analyst']
    const [text, setText] = useState('')
    const [beta, setBeta] = useState(300 - Math.random() * 100)
    const period = 180;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, beta)

        return () => { clearInterval(ticker) }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setBeta(prevBeta => prevBeta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setBeta(period)
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setBeta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my portfolio</span>
                        <h1>{`Hi I am Amir Kemal a `} <span className="wrap">{text}</span></h1>
                        <p>As a recent graduate of Dakota State University with a major in computer science and an excellent GPA, I am eager to begin my career in the tech industry.

                            Throughout my studies, I gained a strong foundation in computer science principles and technologies, and I have completed coursework in relevant technological courses. In addition, I have completed internships at Midcontinent Communications,
                            where I gained valuable hands-on experience in software development.

                            I am confident that my skills and experiences make me a strong fit for the Tech world. I am lokking forward for an opportinity in the real world</p>
                        <button ><a className="b_link" href="#connect">Let's Connect </a>  <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Headder Img'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}