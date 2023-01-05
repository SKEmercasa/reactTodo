import React from "react";
import WebApp from "./WebApp";
import { date } from "../api/dateFns";


class WebAppContainer extends React.Component {

    state = {
        data: [
            {
                liName: ['completed', true],
                discriptionText: 'Completed task',
                createdText: `created ${date()} ago`,
                isTagEdit: false,
            },
            {
                liName: ['editing', false],
                discriptionText: 'Editing task',
                createdText: `created ${date()} ago`,
                isTagEdit: true,
            },
            {
                liName: ['', false],
                discriptionText: 'Active task',
                createdText: `created ${date()} ago`,
                isTagEdit: false
            }
        ]
    };

    reducer = (e) => {
        if (e.type === 'click') {
            this.setState((state) => {
                let newState = state.data.filter((el, i) => i !== Number(e.target.id));
                return {
                    ...state,
                    data: newState
                };
            });
        } else {
            this.setState((state) => {
                if (!e.target.checked) {
                    return (
                        state.data[e.target.id].liName = ['', false]
                    )
                } else {
                    return (
                        state.data[e.target.id].liName = ['completed', true]
                    )
                };
            });
        };
    };

    render() {
        return <WebApp state={this.state.data} do={this.reducer} />
    }
};

export default WebAppContainer;