"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    // if ("serviceWorker" in navigator) {
    const handleServiceWorker = async () => {
      // const register = await navigator.serviceWorker.register("/sw.js");

      // const subscription = await register.pushManager.subscribe({
      //   userVisibleOnly: true,
      //   applicationServerKey: "BJeFdPn35EBHJ_rR4x9vTL5NVPnLaYvJywIASm7bIxDDEMAN7Z31CSW3IvPixp7wiOdNGQIpwhq1xAse-vywO5c",
      // });

      // const subscription = navigator.serviceWorker

      // const res = await fetch("http://localhost:4000/subscribe", {
      //   method: "POST",
      //   body: JSON.stringify(subscription),
      //   headers: {
      //     "content-type": "application/json",
      //   },
      // });

      // const data = await res.json();
      // console.log(data);

      navigator.serviceWorker.ready.then(async (register) => {
        console.log("READY !!");
        setIsReady(true);
        const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey:
            "BJeFdPn35EBHJ_rR4x9vTL5NVPnLaYvJywIASm7bIxDDEMAN7Z31CSW3IvPixp7wiOdNGQIpwhq1xAse-vywO5c",
        });

        const res = await fetch("https://web-push-server-seven.vercel.app/subscribe", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "content-type": "application/json",
          },
        });

        const data = await res.json();
        console.log(data);
      });
    };
    handleServiceWorker();
    // }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{isReady ? "READY" : "HMMM..."}</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
