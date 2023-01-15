/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import { date } from '../api/dateFns';

import WebApp from './WebApp';

export class WebAppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          liName: ['completed', true, false],
          discriptionText: 'Completed task',
          createdText: 'created now',
          isTagEdit: false,
          createTaskDate: new Date(),
        },
        {
          liName: ['', false, false],
          discriptionText: 'Editing task',
          createdText: 'created now',
          isTagEdit: false,
          createTaskDate: new Date(),
        },
        {
          liName: ['', false, false],
          discriptionText: 'Active task',
          createdText: 'created now',
          isTagEdit: false,
          createTaskDate: new Date(),
        },
      ],
      enterPlace: '',
      li: [
        { buttonText: 'All', buttonClass: 'selected' },
        { buttonText: 'Active', buttonClass: '' },
        { buttonText: 'Completed', buttonClass: '' },
      ],
      activeTaskCount: 2,
    };
  }

  componentDidMount() {
    this.dates = setInterval(() => this.event(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.dates);
  }

  event() {
    this.setState((state) => {
      const newState = state.data.map((el, i) => {
        const reEl = el;
        reEl.createdText = date(state.data[i].createTaskDate);
        return el;
      });
      return {
        ...state,
        data: newState,
      };
    });
  }

  reducerTaskCrt = (e) => {
    if (e.keyCode === 13) {
      this.setState((state) => {
        let filterStatus = false;
        if (state.li[2].buttonClass === 'selected') {
          filterStatus = true;
        }
        return {
          data: [
            ...state.data,
            {
              liName: ['', false, filterStatus],
              discriptionText: `${state.enterPlace}`,
              createdText: 'created now',
              isTagEdit: false,
              createTaskDate: new Date(),
            },
          ],
        };
      });
      this.setState((state) => ({
        ...state,
        enterPlace: '',
        activeTaskCount: state.activeTaskCount + 1,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        enterPlace: e.target.value,
      }));
    }
  };

  reducerTaskCtrl = (e) => {
    this.setState((state) => {
      if (e.type === 'click') {
        const newData = state.data.filter((el, i) => i !== Number(e.target.id));
        return {
          ...state,
          data: newData,
        };
      }
      let prevState;
      if (!e.target.checked) {
        prevState = ['', false, false];
      } else {
        prevState = ['completed', true, false];
      }
      const reState = state;
      reState.data[e.target.id].liName = prevState;
      return {
        ...state,
      };
    });
    this.setState((state) => {
      const prevCount = 0;
      state.data.forEach((el) => !el.liName[1] && prevCount + 1);
      return {
        ...state,
        activeTaskCount: prevCount,
      };
    });
  };

  reducerTaskFltr = (e) => {
    const numE = Number(e.target.id);
    this.setState((state) => {
      const newLi = state.li.map((el, i) => {
        const reEl = el;
        if (numE === i) {
          reEl.buttonClass = 'selected';
        } else {
          reEl.buttonClass = '';
        }
        return reEl;
      });
      const newData = state.data.map((el) => {
        const reEl = el;
        switch (Number(e.target.id)) {
          case 1: {
            reEl.liName[2] = false;
            if (reEl.liName[1]) {
              reEl.liName[2] = true;
            }
            break;
          }
          case 2: {
            reEl.liName[2] = false;
            if (!reEl.liName[1]) {
              reEl.liName[2] = true;
            }
            break;
          }
          default: {
            reEl.liName[2] = false;
            break;
          }
        }
        return reEl;
      });
      return {
        ...state,
        li: newLi,
        data: newData,
      };
    });
  };

  reducerTaskDlt = () => {
    this.setState((state) => {
      const newState = state.data.filter((el) => !el.liName[1]);
      return {
        ...state,
        data: newState,
      };
    });
  };

  render() {
    return (
      <WebApp
        state={this.state}
        doIt={this.reducerTaskCtrl}
        is={this.reducerTaskCrt}
        filter={this.reducerTaskFltr}
        del={this.reducerTaskDlt}
      />
    );
  }
}
