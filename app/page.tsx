import styles from "./page.module.scss";
import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer/Footer";
import colors from "./colors.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main
        className={styles.main}
        style={{ backgroundColor: colors.grayColor }}>
        <CardList />
      </main>
      <Footer />
    </div>
  );
}
