import styled from 'styled-components';
import { media } from '../../styles/media';

export const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: #232533;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  color: #00d3ff;
  font-size: 3.5rem;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

export const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  ${media.desktop`
    flex-direction: row;
  `}
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

export const Label = styled.label`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  padding: 0.5rem 0;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-bottom: 2px solid #00db93;
  }
`;

export const TextArea = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  padding: 0.5rem 0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-bottom: 2px solid #00db93;
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(to right, #00db93, #00d3ff);
  border: none;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 2rem;

  ${media.desktop`
    width: 250px;
  `}

  &:hover {
    filter: brightness(1.2);
  }
`;