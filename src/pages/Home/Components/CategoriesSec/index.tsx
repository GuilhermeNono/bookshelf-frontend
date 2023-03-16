import React from 'react'
import { Btn, CenterText, MainBtn } from '../../styles'
import { Box, Categories, CategoriesContent } from './styles'

const CategoriesSection = () => {
  return (
    <Categories id="categories">
        <CenterText>
          <h5>Serviços</h5>
          <h2>Principais Serviços</h2>
        </CenterText>

        <CategoriesContent>
          <Box>
            <img src="assets/images/svg/cate1.svg" />
            <h3>Controle de emprestimos</h3>
            <p>Tenha total controle nos emprestimos de livros.</p>
          </Box>

          <Box>
            <img src="assets/images/svg/cate2.svg" />
            <h3>Acervo Digital</h3>
            <p>Adicione, remova e Controle seu acervo de maneira digital.</p>
          </Box>

          <Box>
            <img src="assets/images/svg/cate3.svg" />
            <h3>Gerenciamento de usuarios</h3>
            <p>Cadastre e gerencie todos os seus leitores.</p>
          </Box>

          <Box>
            <img src="assets/images/svg/cate4.svg" />
            <h3>Relatorio final</h3>
            <p>Possibilidade de emitir um relatorio mensal da biblioteca.</p>
          </Box>
        </CategoriesContent>

        <MainBtn>
          <Btn href="#">Contratar serviços</Btn>
        </MainBtn>
      </Categories>
  )
}

export default CategoriesSection