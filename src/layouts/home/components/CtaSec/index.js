import { CenterText, CtaSec, CtaText } from "assets/styledComponents/homeStyles";

import dashPng from "assets/images/dash.png";
import MDBox from "components/MDBox";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

function CtaSection() {
  const theme = useTheme();
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <CtaSec>
      <CenterText>
        <h5>Dashboard</h5>
        <h2>Painel para todos os usuario</h2>
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
            src={dashPng}
            alt="cape"
          />
        </Box>
        <CtaText>
          <h2>Painel de controle para todo o tipo de usuario</h2>
          <p>
            Sabemos que, no gerenciamento de uma biblioteca, existem dezenas de tarefas que os
            funcionarios devem realizar diariamente.
          </p>
          <p>
            A Bookshelf veio com o intuito de otimizar todas essas tarefas oferecendo diversos
            serviços diretamente da nossa <strong>Dashboard</strong>, trazendo assim maior controle
            e velocidade durante o gerencimento do estabelecimento.
          </p>
        </CtaText>
      </Grid>
    </CtaSec>
  );
}

export default CtaSection;
