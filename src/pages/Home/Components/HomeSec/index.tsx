import React from 'react'
import { HomeImage, HomeSec, HomeText, Latter, LatterForm } from './styles'

const HomeSection = () => {
  return (
    <HomeSec id="home">
    <HomeText className="home-text">
      <h6>Best digital library</h6>
      <h1>Accessible Online library For All</h1>
      <p>Own your future learning new skills online</p>
      <Latter>
        <LatterForm>
          <input type="email" placeholder="Write Your Email" required />
          <input type="submit" value="Let's Start" required />
        </LatterForm>
      </Latter>
    </HomeText>

    <HomeImage>
      <img src="assets/images/svg/home.svg" />
    </HomeImage>
  </HomeSec>
  )
}

export default HomeSection