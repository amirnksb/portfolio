import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import contactImg from '../assets/img/contact-img.svg'
import emailjs from 'emailjs-com';

export const Contact = () => {
    const formInitial = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [form, setForm] = useState(formInitial)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const updateForm = (category, value) => {
        setForm({
            ...form,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending....');
        emailjs.send("service_5154hmq", "template_m0pf9jw", form, 'TgN0SvenSeko40RwO')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setStatus({ success: true, message: 'Message sent' })
            }, function (error) {
                console.log('FAILED...', error);
            });


        setButtonText('Send');
        setForm(formInitial)
    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact us'></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={form.firstName} placeholder='First Name' onChange={(e) => updateForm('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={form.lastName} placeholder='Last Name' onChange={(e) => updateForm('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={form.email} placeholder='Email' onChange={(e) => updateForm('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={form.phone} placeholder='Phone' onChange={(e) => updateForm('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row='6' value={form.message} placeholder='Message' onChange={(e) => updateForm('message', e.target.value)} />
                                    <button type='submit'> <span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}