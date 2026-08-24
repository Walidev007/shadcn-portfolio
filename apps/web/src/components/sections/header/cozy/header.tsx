"use client";

import MotionLink from "@/components/fancy/link";
import { localizedHref } from "@/i18n/routing";
import { useLocale } from "@/lib/locale";
import { motion } from "motion/react";

import styles from "./style.module.scss";

const Header = () => {
  const locale = useLocale();
  return (
    <motion.header
      className={styles.header}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className={styles.bar}>
        <MotionLink
          href={localizedHref(locale, "/")}
          className="text-md inline-flex items-center justify-center font-semibold normal-case"
        >
          Walid MECHERI
        </MotionLink>
      </div>
    </motion.header>
  );
};

export default Header;
