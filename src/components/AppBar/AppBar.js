import React from "react";
import css from './AppBar.module.css'
import TaskCounter from "components/TaskCounter/TaskCounter";
import StatusFilter from "components/StatusFilter/StatusFilter";

const AppBar = () => {
    return(
        <div className={css.Bar}>
            <TaskCounter/>
            <StatusFilter/>
        </div>
    )
}

export default AppBar;