import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Success() {
  return (
    <div>
      <Container
        // maxWidth="xxl"
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          background: "linear-gradient(to bottom, #000000, #363535)",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignText: "center",
            flexGrow: 1,
          }}
        >
          <Grid>
            <Typography
              variant="h3"
              className="type"
              sx={{
                paddingTop: "25%",
                paddingBottom: "25px",
              }}
            >
              Thanks for signing up 👊
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h5"
              className="type"
              sx={{
                paddingBottom: "25px",
              }}
            >
              See how to access your extension.
            </Typography>
          </Grid>
          <Grid>
            <img src="./turn-on.gif"></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
