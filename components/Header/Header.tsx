import styles from "./Header.module.scss";
import { Button, HStack, Avatar } from "@chakra-ui/react";
import { MdPostAdd, MdSearch } from "react-icons/md";

export default function Header() {
  return (
    <header className={styles.header}>
      <HStack direction="row" spacing={4}>
        <Button leftIcon={<MdPostAdd />} colorScheme="pink" variant="solid">
          Post an ad
        </Button>
        <Button rightIcon={<MdSearch />} colorScheme="gray" variant="outline">
          Find a pet
        </Button>
      </HStack>
      <HStack direction="row" spacing={4}>
        <Button colorScheme="gray" variant="outline">
          Sign up{" "}
        </Button>
        <Button colorScheme="gray" variant="outline">
          Login{" "}
        </Button>
        {/* <p>Dan Abramov</p>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" /> */}
      </HStack>
    </header>
  );
}
