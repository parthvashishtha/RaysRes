import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <FooterWrapper>
      <FooterColumn>
        <ColumnTitle>Our Motive</ColumnTitle>
        <ColumnText>
          We strive to innovate and inspire, creating solutions that make a
          difference in people's lives.
        </ColumnText>
      </FooterColumn>

      <FooterColumn>
        <ColumnTitle>Services</ColumnTitle>
        <ServiceList>
          <ServiceItem>Web Development</ServiceItem>
          <ServiceItem>Mobile Apps</ServiceItem>
          <ServiceItem>UI/UX Design</ServiceItem>
          <ServiceItem>Cloud Solutions</ServiceItem>
        </ServiceList>
      </FooterColumn>

      <FooterColumn>
        <ColumnTitle>Contact Us</ColumnTitle>
        <ContactInfo>
          <ContactItem>Email: info@example.com</ContactItem>
          <ContactItem>Phone: +1 (123) 456-7890</ContactItem>
          <ContactItem>
            Address: 123 Tech Street, Silicon Valley, CA
          </ContactItem>
        </ContactInfo>
      </FooterColumn>

      <FooterColumn>
        <ColumnTitle>Newsletter</ColumnTitle>
        <NewsletterForm onSubmit={handleSubmit}>
          <NewsletterInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <NewsletterButton type="submit">Subscribe</NewsletterButton>
        </NewsletterForm>
      </FooterColumn>

      <FooterColumn>
        <ColumnTitle>Locations</ColumnTitle>
        <LocationList>
          <LocationItem>New York</LocationItem>
          <LocationItem>London</LocationItem>
          <LocationItem>Tokyo</LocationItem>
          <LocationItem>Sydney</LocationItem>
        </LocationList>
      </FooterColumn>
    </FooterWrapper>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3rem 5%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  font-family: "Arial", sans-serif;
  animation: ${fadeIn} 1s ease-in;
`;

const FooterColumn = styled.div`
  flex: 1;
  margin: 0 1rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 30px;
    height: 2px;
    background-color: #4ecca3;
  }
`;

const ColumnText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateX(5px);
    color: #4ecca3;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
`;

const ContactItem = styled.p`
  margin-bottom: 0.5rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 4px;
`;

const NewsletterButton = styled.button`
  padding: 0.5rem;
  background-color: #4ecca3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45b393;
  }
`;

const LocationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LocationItem = styled.li`
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #4ecca3;
  }
`;

export default Footer;
