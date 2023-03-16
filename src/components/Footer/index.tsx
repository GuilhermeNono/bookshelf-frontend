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
              <a href="#categories">Serviços</a>
            </li>
            <li>
              <a href="#about">Sobre nós</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
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
              <a href="#">Dashboard</a>
            </li>
          </ContactContent>

          <ContactContent>
            <li>
              <a href="#">
                São paulo, BR,
                <br /> Barra bonita, Jorge mauricio, 402,{" "}
              </a>
            </li>
            <li>
              <a href="#">Bookshelf@support.com</a>
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