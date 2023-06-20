import { CenterText, AboutSec, AboutText } from "assets/styledComponents/homeStyles";

import about from "assets/images/about.png";
import MDBox from "components/MDBox";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

function AboutSection() {
  const theme = useTheme();
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AboutSec>
      <CenterText>
        <h5>Sobre nós</h5>
        <h2>Saiba um pouco mais sobre a Bookshelf</h2>
      </CenterText>

      <Grid
        container
        sx={
          downLg
            ? { display: "block" }
            : {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                alignItems: "center",
                marginTop: "4rem",
                borderRadius: "15px",
              }
        }
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <MDBox
            lg={2}
            component="img"
            sx={{
              width: "400px",
              maxWidth: "100%",
              height: "auto",
              maxHeight: "100%",
            }}
            src={about}
            alt="cape"
          />
        </Box>
        <AboutText>
          <h2>Oque é a Bookshelf</h2>
          <p>
            Somos uma Startup com o foco de trazer uma melhor experiencia para usuarios que
            frequentam bibliotecas. Além disso, o sistema foi desenvolvido e pensado para que tenha
            uma curva de aprendizado baixa para qualquer pessoa de qualquer idade. Organização é
            muito importante quando falamos de uma biblioteca, por isso a BookShelf veio para
            resolver esse problema e trazer a oportunidade para qualquer biblioteca, seja ela, de
            pequeno ou medio porte com um preço acessivel.
          </p>
          <h4>Prezamos pela qualidade</h4>
          <h5>Sempre trazendo novidades</h5>
        </AboutText>
      </Grid>
    </AboutSec>
  );
}

export default AboutSection;
