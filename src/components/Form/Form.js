import React from "react";
import css from "./Form.module.css"
import Button from "components/Button/Button";

const Form = () => {
    return(
        <form className={css.form}>
            <input
              className={css.field}
              type="text"
              placeholder="Enter you text"/>
              <Button type="submit">Add task</Button>
        </form>
    )
}

export default Form;