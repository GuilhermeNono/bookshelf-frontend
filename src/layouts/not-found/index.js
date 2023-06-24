import { NotFoundSec, NotFoundImage } from "assets/styledComponents/notFoundStyles";
import notFoudSvg from "assets/images/notfound.svg";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { useMediaQuery } from "@mui/material";
import theme from "assets/theme";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";

function NotFoundPage() {
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <NotFoundSec id="notfound">
      <MDBox>
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
          Página não encontrada!
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
          Oops! Parece que você se perdeu...
        </MDTypography>
        <MDBox mt={3}>
          <Link to="/">
            <MDButton>Voltar</MDButton>
          </Link>
        </MDBox>
      </MDBox>
      <NotFoundImage>
        <img src={notFoudSvg} alt="notfound" />
      </NotFoundImage>
    </NotFoundSec>
  );
}

export default NotFoundPage;
