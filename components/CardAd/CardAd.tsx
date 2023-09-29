import styles from "./Card.module.scss";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Spacer,
  Icon,
  Button,
  HStack,
} from "@chakra-ui/react";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdGroupWork } from "react-icons/md";

export default function CardAd() {
  return (
    <Card maxW="sm" cursor="pointer">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80"
          alt="cat"
          borderRadius="lg"
        />
        <Flex direction="row" mt="4">
          <Stack spacing="3">
            <Heading size="md">Cute cat</Heading>
            <Text color="grey.600" fontSize="1xl">
              1-5 September
            </Text>
          </Stack>
          <Spacer />
          <Icon boxSize={10} color="pink.500">
            <HiCurrencyDollar />
          </Icon>
        </Flex>
      </CardBody>
    </Card>
  );
}
