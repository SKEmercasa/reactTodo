import React from "react";
import Footer from "./Footer";
import TasksFilter from "./TasksFilter/TasksFilter";
class FooterContainer extends React.Component {
    state = {
            li: [
                { buttonText: 'All', buttonClass: 'selected' },
                { buttonText: 'Active', buttonClass: '' },
                { buttonText: 'Completed', buttonClass: '' },
            ]
        };

    render() {
        let li = this.state.li.map((liData, i) => <TasksFilter key={`filter${i}`} li={liData} />)
        return (
            <Footer li={li}/>
        );
    };
};

export default FooterContainer;