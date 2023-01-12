import React from "react";
import WebApp from "./WebApp";
import { date } from "../api/dateFns";


class WebAppContainer extends React.Component {

    state = {
        data: [
            {
                liName: ['completed', true, false],
                discriptionText: 'Completed task',
                createdText: `created ${date()} ago`,
                isTagEdit: false
            },
            {
                liName: ['', false, false],
                discriptionText: 'Editing task',
                createdText: `created ${date()} ago`,
                isTagEdit: false
            },
            {
                liName: ['', false, false],
                discriptionText: 'Active task',
                createdText: `created ${date()} ago`,
                isTagEdit: false
            }
        ],
        enterPlace: '',
        li: [
            { buttonText: 'All', buttonClass: 'selected' },
            { buttonText: 'Active', buttonClass: '' },
            { buttonText: 'Completed', buttonClass: '' },
        ],
        activeTaskCount: 2
    };

    reducerTaskCrt = (e) => {
        if (e.keyCode === 13) {
            this.setState((state) => {
                let filterStatus = false;
                if (state.li[2].buttonClass === 'selected') {
                    filterStatus = true;
                }
                return {
                    data: [...state.data, {
                        liName: ['', false, filterStatus],
                        discriptionText: `${this.state.enterPlace}`,
                        createdText: `created ${date()} ago`,
                        isTagEdit: false,
                    }]
                };
            });
            this.setState((state) => {
                return {
                    ...state,
                    enterPlace: '',
                    activeTaskCount: this.state.activeTaskCount + 1
                };
            });
        } else {
            this.setState((state) => {
                return {
                    ...state,
                    enterPlace: e.target.value
                };
            });
        };
    };

    reducerTaskCtrl = (e) => {
        this.setState((state) => {
            if (e.type === 'click') {
                let newData = state.data.filter((el, i) => i !== Number(e.target.id));
                return {
                    ...state,
                    data: newData
                };
            } else {
                let prevState;
                if (!e.target.checked) {
                    prevState = ['', false, false];
                } else {
                    prevState = ['completed', true, false];
                };
                state.data[e.target.id].liName = prevState;
                return {
                    ...state
                };
            };
        });
        this.setState((state) => {
            let prevCount = 0;
            state.data.forEach(el => !el.liName[1] && (prevCount++));
            return {
                ...state,
                activeTaskCount: prevCount
            };
        })
    };

    reducerTaskFltr = (e) => {
        this.setState((state) => {
            let newLi = state.li.map((el, i) => {
                Number(e.target.id) === i ? el.buttonClass = 'selected' : el.buttonClass = '';
                return el;
            });
            let newData = state.data.map(el => {
                switch (Number(e.target.id)) {
                    case 1:
                        el.liName[2] = false;
                        el.liName[1] === true && (el.liName[2] = true);
                        break;
                    case 2:
                        el.liName[2] = false;
                        el.liName[1] === false && (el.liName[2] = true);
                        break;
                    default:
                        el.liName[2] = false;
                        break;
                };
                return el;
            });
            return {
                ...state,
                li: newLi,
                data: newData
            };
        });
    };

    reducerTaskDlt = () => {
        this.setState((state) => {
            let newState = state.data.filter((el, i) => !el.liName[1]);
            return {
                ...state,
                data: newState
            }
        });
    };

    render() {
        return <WebApp state={this.state} do={this.reducerTaskCtrl} is={this.reducerTaskCrt} filter={this.reducerTaskFltr} del={this.reducerTaskDlt}/>
    };
};

export default WebAppContainer;