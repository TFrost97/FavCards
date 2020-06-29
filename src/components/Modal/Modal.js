import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ toggleTheme, toggleModal }) => (
  <div className={styles.wrapper}>
    <div className={styles.settings}>
      <h2 className={styles.header}>settings</h2>
      <label class={styles.label}>
        <div class={styles.toggle}>
          <input
            onClick={toggleTheme}
            class={styles.toggleState}
            type="checkbox"
            name="check"
            value="check"
          />
          <div class={styles.toggleInner}>
            <div class={styles.indicator}></div>
          </div>
          <div class={styles.activeBg}></div>
        </div>
        <div class={styles.labelText}>Dark theme</div>
      </label>
      <button className={styles.closeBtn} onClick={toggleModal}>
        X
      </button>
    </div>
  </div>
);

export default Modal;
