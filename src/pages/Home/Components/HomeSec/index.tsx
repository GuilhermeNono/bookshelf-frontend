import React from 'react'
import { Btn } from '../../styles'
import { HomeImage, HomeSec, HomeText, Latter, LatterForm } from './styles'

const HomeSection = () => {
  return (
    <HomeSec id="home">
    <HomeText className="home-text">
      <h6>Best digital library</h6>
      <h1>Accessible Online library For All</h1>
      <p>Own your future learning new skills online</p>
      <Latter>
        <Btn>Cadastre-se na Bookshelf</Btn>
      </Latter>
    </HomeText>

    <HomeImage>
      <img src="assets/images/svg/home.svg" />
    </HomeImage>
  </HomeSec>
  )
}

export default HomeSection