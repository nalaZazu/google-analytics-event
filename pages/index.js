import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.container}>
     
      <main>
        <h1> Google analytics demo</h1>
        <p>this is demo-main page and try the reat-ga plugin</p>
        <Link href="/about">Go to about</Link>
    <br/>
        <Link href="/contact">Go to Contact</Link>
      </main>
    </div>
  );
}
