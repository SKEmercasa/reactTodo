import React from "react";
import TaskList from "./TaskList";
import Task from "./Task/Task";
import { date } from "../../../api/dateFns";

class TaskListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    liName: 'completed',
                    discriptionText: 'Completed task',
                    createdText: `created ${date()} ago`,
                    isTagEdit: false
                },
                {
                    liName: 'editing',
                    discriptionText: 'Editing task',
                    createdText: `created ${date()} ago`,
                    isTagEdit: true
                },
                {
                    liName: '',
                    discriptionText: 'Active task',
                    createdText: `created ${date()} ago`,
                    isTagEdit: false
                }
            ]
        };
    };

    render() {
        let li = this.state.data.map((liData, i) => <Task li={liData} key={`list${i}`} />);
        return <TaskList li={li} />
    };
};

export default TaskListContainer;