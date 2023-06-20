import { HomeImage, HomeSec } from "assets/styledComponents/homeStyles";
import homeSvg from "assets/images/home.svg";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { useMediaQuery } from "@mui/material";
import theme from "assets/theme";
import MDButton from "../../../../components/MDButton";

function HomeSection() {
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <HomeSec>
      <MDBox>
        <MDTypography
          variant="h6"
          sx={
            downMd
              ? {
                  color: "#cecece",
                  fontSize: "18px",
                  fontFamily: "poppins",
                  fontWeight: "600",
                  letterSpacing: "2px",
                }
              : {
                  color: "#cecece",
                  fontSize: "18px",
                  fontFamily: "poppins",
                  fontWeight: "600",
                  letterSpacing: "2px",
                }
          }
        >
          Melhor biblioteca digital
        </MDTypography>
        <MDTypography
          variant="h1"
          sx={
            downMd
              ? {
                  fontSize: "3.0rem",
                  margin: "15px 0 15px",
                  fontFamily: "poppins",
                }
              : {
                  fontSize: "3.8rem",
                  margin: "15px 0 15px",
                  fontFamily: "poppins",
                }
          }
        >
          Biblioteca online acessível para todos
        </MDTypography>
        <MDTypography
          variant="p"
          sx={{
            color: "#cecece",
            fontSize: "18px",
            fontWeight: "600",
            fontFamily: "poppins",
          }}
        >
          Seja o dono do seu futuro aprendendo novas habilidades online
        </MDTypography>
        <MDBox mt={3}>
          <MDButton type="submit" color="info" size="large" sx={{ borderRadius: "20px" }}>
            Cadastre-se na Bookshelf
          </MDButton>
        </MDBox>
      </MDBox>
      <HomeImage>
        <img src={homeSvg} alt="home" />
      </HomeImage>
    </HomeSec>
  );
}

export default HomeSection;
