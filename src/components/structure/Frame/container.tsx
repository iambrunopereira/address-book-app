"use client";

import { Divisor } from "@/components";
import { Button } from "@/components/common/Button";
import { config } from "@/configs";
import { menuToggle } from "@/store/slices/settingsSlice";
import { useDispatch, useSelector } from "@/store/store";
import { FC } from "react";
import styles from "./container.module.scss";
interface Props {
  children: React.ReactNode;
}

const Frame: FC<Props> = ({ children }) => {
  const { menuOpened } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  return (
    <div className={styles.appContainer}>
      <nav className={styles.nav}>
        <section className={styles.logoSection}>
          <img src="/assets/logo.svg" alt="logo" />
          <span>{config.appName}</span>
        </section>
        <button onClick={() => dispatch(menuToggle())}>menu</button>
      </nav>
      <div className={styles.contentContainer}>
        <aside
          className={`${styles.sidebar} ${!menuOpened ? styles.close : ""}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
             <div
              style={{
                justifyContent: "flex-end",
                display: "flex",
              }}
            > 
              <Button variant="clear">X</Button>
            </div>
          </div>
          <Divisor />
        </aside>
        <main
          className={`${styles.main} ${menuOpened ? styles.menuIsOpen : ""}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Frame;
