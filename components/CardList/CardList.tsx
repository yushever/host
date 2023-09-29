import CardAd from "../CardAd/CardAd";
import styles from "./CardList.module.scss";
import { Grid, GridItem } from "@chakra-ui/react";

export default function CardList() {
  return (
    <Grid templateColumns="repeat(3, 2fr)" gap={6}>
      <CardAd />
      <CardAd />
      <CardAd />
      <CardAd />
      <CardAd />
    </Grid>
  );
}
