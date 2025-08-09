import React from 'react';
import {
    ContactSection,
    SectionTitle,
    FormContainer,
    Form,
    FormRow,
    FormGroup,
    Label,
    Input,
    TextArea,
    SubmitButton
} from './styles';

const Contact = () => {
    return (
        <ContactSection id="contact" aria-labelledby="titulo-contato">
            <SectionTitle id="titulo-contato">Entre em Contato</SectionTitle>

            <FormContainer>
                <Form data-aos="fade-up" action="https://formspree.io/f/xrblrznr" method="POST">
                    <FormRow>
                        <FormGroup>
                            <Label htmlFor="name">Nome *</Label>
                            <Input type="text" id="name" name="name" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email *</Label>
                            <Input type="email" id="email" name="email" required />
                        </FormGroup>
                    </FormRow>

                    <FormGroup>
                        <Label htmlFor="message">Mensagem *</Label>
                        <TextArea id="message" name="message" rows="5" required></TextArea>
                    </FormGroup>

                    <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
                </Form>
            </FormContainer>
        </ContactSection>
    );
};

export default Contact;