import { FC, PropsWithChildren } from "react";

import styles from "./divider.module.scss";

export const Divider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.divider}>
      <div className={styles.left} />
      <div className={styles.children}>{children}</div>
      <div className={styles.right} />
    </div>
  );
};
