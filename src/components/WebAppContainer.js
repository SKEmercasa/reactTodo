import React from 'react';

import { date } from '../assets/dateFns';
import { count, formatTime } from '../assets/count';

import WebApp from './WebApp';

export class WebAppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          liName: ['completed', true, false],
          discriptionText: 'Completed task',
          discriptionMin: '00',
          discriptionSec: '00',
          isTimer: false,
          createdText: 'created now',
          isTagEdit: false,
          createTaskDate: new Date(),
        },
        {
          liName: ['', false, false],
          discriptionText: 'Editing task',
          discriptionMin: '12',
          discriptionSec: '25',
          isTimer: true,
          createdText: 'created now',
          isTagEdit: false,
          createTaskDate: new Date(),
        },
        {
          liName: ['', false, false],
          discriptionText: 'Active task',
          discriptionMin: '12',
          discriptionSec: '25',
          isTimer: true,
          createdText: 'created now',
          isTagEdit: false,
          createTaskDate: new Date(),
        },
      ],
      enterPlace: '',
      enterMin: '',
      enterSec: '',
      li: [
        { buttonText: 'All', buttonClass: 'selected' },
        { buttonText: 'Active', buttonClass: '' },
        { buttonText: 'Completed', buttonClass: '' },
      ],
      activeTaskCount: 2,
      isFormat: false,
      examZero: false,
    };
  }

  componentDidMount() {
    this.dates = setInterval(() => this.taskLifeEvent(), 1000);
    this.watch = setInterval(() => this.stopwatch(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.dates);
    clearInterval(this.watch);
  }

  unError = () => {
    this.setState({ isFormat: false });
  };

  reStart = (e) => {
    this.setState(({ data }) => {
      let newState = data.map((el, i) => {
        if (e.target.parentNode.id == i) {
          return {
            ...el,
            isTimer: e.target.id === 'play' ? true : false,
          };
        } else {
          return el;
        }
      });
      return { data: newState };
    });
  };

  stopwatch() {
    this.setState(({ data }) => {
      let newData = data.map((el) => {
        let min = el.discriptionMin;
        let sec = el.discriptionSec;
        let dotTime = min == '00' && sec == '00';
        if (el.isTimer) {
          if (!dotTime) {
            let arr = count(min, sec);
            return {
              ...el,
              discriptionMin: `${arr[0]}`.padStart(2, '0'),
              discriptionSec: `${arr[1]}`.padStart(2, '0'),
            };
          } else {
            let prevState = ['completed', true, false];
            return {
              ...el,
              isTimer: false,
              liName: prevState,
            };
          }
        } else {
          return el;
        }
      });
      return { data: newData };
    });
  }

  taskLifeEvent() {
    this.setState((state) => {
      const newState = state.data.map((el, i) => {
        el.createdText = date(state.data[i].createTaskDate);
        return el;
      });
      return {
        ...state,
        data: newState,
      };
    });
  }

  reducerTaskCrt = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.setState((state) => {
        let emptyEnter = this.state.enterPlace.trim();
        let minEnter = formatTime(state.enterMin, 'min');
        let secEnter = formatTime(state.enterSec, 'sec');
        let filterStatus = false;
        if (state.li[2].buttonClass === 'selected') {
          filterStatus = true;
        }
        if (minEnter && secEnter && emptyEnter !== '') {
          return {
            ...state,
            data: [
              ...state.data,
              {
                liName: ['', false, filterStatus],
                discriptionText: `${state.enterPlace}`,
                discriptionMin: `${state.enterMin.padStart(2, '0')}`,
                discriptionSec: `${state.enterSec.padStart(2, '0')}`,
                isTimer: true,
                createdText: 'created now',
                isTagEdit: false,
                createTaskDate: new Date(),
              },
            ],
            enterPlace: '',
            enterMin: '',
            enterSec: '',
            activeTaskCount: state.activeTaskCount + 1,
          };
        } else {
          return {
            ...state,
            isFormat: true,
          };
        }
      });
    } else {
      switch (e.target.id) {
        case 'word':
          this.setState((state) => ({
            ...state,
            enterPlace: e.target.value,
          }));
          break;
        case 'min':
          this.setState((state) => ({
            ...state,
            enterMin: e.target.value,
          }));
          break;
        case 'sec':
          this.setState((state) => ({
            ...state,
            enterSec: e.target.value,
          }));
          break;
      }
    }
  };

  reducerTaskCtrl = (e) => {
    this.setState((state) => {
      if (e.type === 'click') {
        let newData = state.data.filter((el, i) => i !== Number(e.target.id));
        return {
          ...state,
          data: newData,
        };
      } else {
        let prevState;
        if (!e.target.checked) {
          prevState = ['', false, false];
        } else {
          prevState = ['completed', true, false];
        }
        state.data[e.target.id].liName = prevState;
        state.data[e.target.id].discriptionMin = '00';
        state.data[e.target.id].discriptionSec = '00';
        return {
          ...state,
        };
      }
    });
    this.setState((state) => {
      let prevCount = 0;
      state.data.forEach((el) => !el.liName[1] && prevCount++);
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
        if (numE === i) {
          el.buttonClass = 'selected';
        } else {
          el.buttonClass = '';
        }
        return el;
      });
      const newData = state.data.map((el) => {
        switch (numE) {
          case 1:
            el.liName[2] = false;
            if (el.liName[1]) {
              el.liName[2] = true;
            }
            break;
          case 2:
            el.liName[2] = false;
            if (!el.liName[1]) {
              el.liName[2] = true;
            }
            break;
          default:
            el.liName[2] = false;
            break;
        }
        return el;
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

  reducerTaskEdit = (e) => {
    let current = Number(e.target.parentNode.firstChild.id);
    this.setState((state) => {
      const newState = state.data.map((el, i) => {
        if (i === current && !el.liName[1]) {
          el.liName[0] = 'editing';
          el.isTagEdit = true;
        }
        return el;
      });
      return {
        ...state,
        data: newState,
      };
    });
  };

  reducerTaskEditRecord = (e) => {
    let current = Number(e.target.previousSibling.firstChild.id);
    let emptyEnter = e.target.value.trim();
    if (e.keyCode === 13 && emptyEnter !== '') {
      this.setState((state) => {
        const newState = state.data.map((el, i) => {
          if (current === i) {
            el.discriptionText = e.target.value;
            el.liName[0] = '';
            el.isTagEdit = false;
          }
          return el;
        });
        return {
          ...state,
          data: newState,
        };
      });
    }
  };

  render() {
    window.state = this.state;
    return (
      <WebApp
        state={this.state}
        doIt={this.reducerTaskCtrl}
        is={this.reducerTaskCrt}
        filter={this.reducerTaskFltr}
        del={this.reducerTaskDlt}
        edit={this.reducerTaskEdit}
        record={this.reducerTaskEditRecord}
        unError={this.unError}
        reStart={this.reStart}
      />
    );
  }
}
