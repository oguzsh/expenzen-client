import * as React from "react";
import { Container, Grid2 } from "@mui/material";
import { Header } from "@/app/components/base/Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Container maxWidth="lg">
        <Grid2 container spacing={2}>
          <Grid2 size={3}>
            <p>size=3</p>
          </Grid2>
          <Grid2 size={3}>
            <p>size=3</p>
          </Grid2>
          <Grid2 size={3}>
            <p>size=3</p>
          </Grid2>
          <Grid2 size={3}>
            <p>size=3</p>
          </Grid2>
        </Grid2>
      </Container>
    </Container>
  );
}
