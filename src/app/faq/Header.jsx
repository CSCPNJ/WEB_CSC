import { Comfortaa } from 'next/font/google'
import styles from "./faq.module.css"

const comfortaa = Comfortaa({ subsets: ['latin'] })

const Header = () => {
  return (
    <>
      <img src="/question.webp" alt="faq" className={styles.image} width={200} />
      <div className="wrapper text-white pb-20">
        <h1 className={"text-7xl pb-3 font-medium " + comfortaa.className}>Frequently Asked Questions</h1>
        <div style={{ clear: 'both' }}></div>
      </div>
    </>
  );
};

export default Header;