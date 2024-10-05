import * as React from "react";
import { Typography, Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Expenzen
        </Typography>
        <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
          Coming soon...
        </Typography>
      </Box>
    </Container>
  );
}
