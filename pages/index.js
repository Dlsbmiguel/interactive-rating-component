import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <body>
        <Image src="/images/icon-star.svg" alt="icon star" layout="fill" />
        <div>
          <span>
            <h2>How did we do?</h2>
          </span>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div>1,2,3,4,5</div>
          <div>submit</div>
        </div>
      </body>
    </>
  );
}
