import React from 'react'
import Footer from '../../components/ContactPageComponents/Footer'
import Header from '../../components/ContactPageComponents/Header'
import {Container} from './styles'
import { useAuthValue } from '../../context/authContext'

const Home = () => {

    const value = useAuthValue();

  return (
    <Container>
        Content {value}
    </Container>
  )
}

export default Home
