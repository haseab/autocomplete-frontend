import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Mixpanel } from "../mixpanel";

const navItems = [
  // {
  //   name: "About",
  //   link: "/about",
  // },
  {
    name: "Download Extension",
    link: "https://chrome.google.com/webstore/detail/autocompletelive/ncdlldldjpejfobncikpgijjebcpjona",
  },
];

export default function DrawerAppBar() {
  return (
    <>
      {/* <Alert
        variant="filled"
        severity="success"
        style={{
          justifyContent: "center",
          backgroundColor: "light red",
          fontSize: "1.00rem",
        }}
        icon={false}
      >
        ⚠️ This software is still in very early development. Please report any
        bugs or issues
        <a
          href="https://www.twitter.com/haseabamin"
          style={{
            color: "white",
            textDecoration: "underline",
          }}
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
      </Alert> */}
      <AppBar
        component="nav"
        style={{ backgroundColor: "black", position: "relative" }}
        elevation={0}
        // variant="outlined"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            <a
              href="/"
              onClick={() =>
                Mixpanel.track("Click: µ", {
                  environment: process.env.NODE_ENV,
                })
              }
            >
              <img
                src="/autocomplete-crop-dark.gif"
                alt="Autocomplete Logo"
                style={{
                  display: "flex",
                  width: "200px",
                  height: "auto",
                  cursor: "pointer",
                }}
              />
            </a>
          </Typography>
          <Box sx={{ display: { sm: "block" } }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  Mixpanel.track("Click: How to Use", {
                    environment: process.env.NODE_ENV,
                  })
                }
              >
                <Button sx={{ color: "white" }}>{item.name}</Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
