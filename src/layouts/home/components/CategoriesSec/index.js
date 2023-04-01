import React from "react";
import {
  Btn,
  CenterText,
  MainBtn,
  Box,
  Categories,
  CategoriesContent,
} from "assets/styledComponents/homeStyles";

import categoryOne from "assets/images/cate1.svg";
import categoryTwo from "assets/images/cate2.svg";
import categoryThree from "assets/images/cate3.svg";
import categoryFour from "assets/images/cate4.svg";

function CategoriesSection() {
  return (
    <Categories id="categories">
      <CenterText>
        <h5>Serviços</h5>
        <h2>Principais Serviços</h2>
      </CenterText>

      <CategoriesContent>
        <Box>
          <img src={categoryOne} alt="categorie" />
          <h3>Controle de emprestimos</h3>
          <p>Tenha total controle nos emprestimos de livros.</p>
        </Box>

        <Box>
          <img src={categoryTwo} alt="categorie" />
          <h3>Acervo Digital</h3>
          <p>Adicione, remova e Controle seu acervo de maneira digital.</p>
        </Box>

        <Box>
          <img src={categoryThree} alt="categorie" />
          <h3>Gerenciamento de usuarios</h3>
          <p>Cadastre e gerencie todos os seus leitores.</p>
        </Box>

        <Box>
          <img src={categoryFour} alt="categorie" />
          <h3>Relatorio final</h3>
          <p>Possibilidade de emitir um relatorio mensal da biblioteca.</p>
        </Box>
      </CategoriesContent>

      <MainBtn>
        <Btn href="#">Contratar serviços</Btn>
      </MainBtn>
    </Categories>
  );
}

export default CategoriesSection;
