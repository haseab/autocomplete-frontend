import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
// import { supabase } from "../src/services/supabase";

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Setup() {
  const googleLogin = async () => {
    const { user, session, error } = await supabase.auth.signInWithOAuth(
      {
        provider: "google",
      },
      { redirectTo: "http://localhost:3001/success" }
    );
  };

  // useEffect(() => {
  //   const session = supabase.auth.session();
  //   console.log(session);
  // }, []);

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
                paddingTop: "50%",
                paddingBottom: "50px",
              }}
            >
              Sign up to use Extension
            </Typography>
          </Grid>
          <Grid>
            <button className="image-button" onClick={googleLogin}>
              <img src="/sign-in-with-google.png" width="300px"></img>
            </button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
