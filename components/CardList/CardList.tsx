import CardAd from "../CardAd/CardAd";
import styles from "./CardList.module.scss";
import { Grid, GridItem } from "@chakra-ui/react";

export default function CardList() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(3, 2fr)",
        md: "repeat(4, 2fr)",
        sm: "repeat(1, 1fr)",
      }}
      gap={6}
      justifyItems="center">
      <CardAd />
      <CardAd />
      <CardAd />
      <CardAd />
      <CardAd />
    </Grid>
  );
}
