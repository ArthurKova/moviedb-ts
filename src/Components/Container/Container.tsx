import { ReactNode } from "react";
import style from "./Container.module.css";

const Container = ({ children }: { children: ReactNode }) => (
  <div className={style.box}>{children}</div>
);

export default Container;
