import React from "react";
import css from "./Task.module.css"

const Task = ({task}) => {
    return(
        <div className={css.wrapper}>
            <input
            type="checkbox"
            className={css.checkbox}
            />
            <p className={css.text}></p>
            <button className={css.btn}>
             close
            </button>
        </div>
    );
};

export default Task;