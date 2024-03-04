"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { CookingSvg } from "@/components/svgs";

export default function Home() {
  useEffect(() => {
    const handleServiceWorker = async () => {
      navigator.serviceWorker.ready.then(async (register) => {
        const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey:
            "BJeFdPn35EBHJ_rR4x9vTL5NVPnLaYvJywIASm7bIxDDEMAN7Z31CSW3IvPixp7wiOdNGQIpwhq1xAse-vywO5c",
        });

        await fetch("https://web-push-server-seven.vercel.app/subscribe", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "content-type": "application/json",
          },
        });
      });
    };
    handleServiceWorker();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.header}>Food Track</div>
      <div
      >
        <Image

          src="/cooking.svg"
          alt="Cooking"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className={styles.number}>44</div>
      <div>Zamówienie czeka w kolejce</div>
    </main>
  );
}
