import React from 'react'
import { 
  ContactContent,
  ContactSec,
  MainContact
 } from './styles'

const Footer = () => {
  return (
    <>
    <ContactSec id="contact">
        <MainContact>
          <ContactContent>
            <img src="assets/images/svg/fullLogo.svg" />
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ContactContent>

          <ContactContent>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ContactContent>

          <ContactContent>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Instructor</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
          </ContactContent>

          <ContactContent>
            <li>
              <a href="#">
                San Francisco,
                <br /> California, CA 94108{" "}
              </a>
            </li>
            <li>
              <a href="#">dreamslms@example.com</a>
            </li>
            <li>
              <a href="#">01646895741</a>
            </li>
          </ContactContent>
        </MainContact>
      </ContactSec>
    </>
  )
}

export default Footer