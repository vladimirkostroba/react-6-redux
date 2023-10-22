import React from "react";
import css from "./StatusFilter.module.css"
import Button from "components/Button/Button";

const StatusFilter = () => {
    return(
        <div>
            <h2>Filter by status</h2>
            <ul className={css.list}>
                <li>
                    <Button>All</Button>
                </li>
                <li>
                    <Button>Active</Button>
                </li>
                <li>
                    <Button>Completed</Button>
                </li>
            </ul>
        </div>
    )
}

export default StatusFilter;