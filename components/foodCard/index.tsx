import Image from "next/image";
import styles from "./../../styles/FoodCard.module.css";

const FoodCard = () => {
  return (
    <div
      //   className={
      //     styles["card-example-menu-squared"] +
      //     " " +
      //     styles["flex-col-hstart-vstart"]
      //   }
      className={"card-example-menu-squared flex-col-hstart-vstart"
        .split(" ")
        .map((e) => styles[e]).reduce((a,c) => ((a + ' ' +c)),'')}
        // .join("")}
    >
      <div className={styles["group-0104"] + " " + styles["] flex-col"]}>
        <Image
          width="267.12px"
          height="151.32px"
          src="/foodItem.png"
          alt="Food Item"
          className={styles["img-mask"]}
        />
        <p className={styles["txt-596"]}>Roll set</p>
        <p className={styles["txt-1072"]}>
          Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
          ignota euismod corpora, et saepe.
        </p>
        <div className={styles["group-451"] + " " + styles["flex-row"]}>
          <p className={styles["txt-529"]}>$ 22.56</p>
          <Image
            width="26.88px"
            height="26.88px"
            src="/plusIcon.png"
            alt="Add to Card"
            className={styles["circular-button-filled-light-accent-default"]}
          />
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
