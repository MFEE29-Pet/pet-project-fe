import React from "react";
import styles from "./LittleItem.module.sass";
import { imgUrl } from "../../../config";

export const LittleItem = ({ItemData,Title,EnTitle}) => {
  return (
    <div className={styles.href}>
      <h2 className={styles.title}>{Title}</h2>
      <small className={styles.small}>{EnTitle}</small>
      <img
        className={styles.foot}
        src={`${imgUrl}/images/dogs_foot_01.png`}
        alt=""
      />
      <img
        className={styles.shadow}
        src={`${imgUrl}/images/shadow.png`}
        alt=""
      />
      <ul className={styles.list}>
        {ItemData.map((e, i) => {
          const { id, name } = e;
          return (
            <li key={id} className={styles.little_href}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
