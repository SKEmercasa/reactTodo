import React, { useState, useEffect } from 'react';

import { date } from '../assets/dateFns';
import { count, formatTime } from '../assets/count';
import { initialStateData, initialStateLi } from '../store/store';

import WebApp from './WebApp';

const WebContainer = () => {
  const [data, setData] = useState(initialStateData);
  const [enterPlace, setEnterPlace] = useState('');
  const [enterMin, setEnterMin] = useState('');
  const [enterSec, setEnterSec] = useState('');
  const [li, setLi] = useState(initialStateLi);
  const [activeTaskCount, setActiveTaskCount] = useState(2);
  const [isFormat, setIsFormat] = useState(false);

  useEffect(() => {
    let dates = setInterval(() => taskLifeEvent(), 1000);
    return () => {
      clearInterval(dates);
    };
  }, []);

  useEffect(() => {
    let watch = setInterval(() => stopwatch(), 1000);
    return () => {
      clearInterval(watch);
    };
  }, []);

  const unError = () => {
    setIsFormat(false);
  };

  const reStart = (e) => {
    setData((data) => {
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
      return newState;
    });
  };

  const stopwatch = () => {
    setData((data) => {
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
      return newData;
    });
    setData((data) => {
      let prevCount = 0;
      let newState = data.map((el) => {
        !el.liName[1] && prevCount++;
        return el;
      });
      setActiveTaskCount(prevCount);
      return newState;
    });
  };

  const taskLifeEvent = () => {
    setData((data) => {
      const newState = data.map((el, i) => {
        el.createdText = date(data[i].createTaskDate);
        return el;
      });
      return newState;
    });
  };

  const reducerTaskCrt = (e) => {
    if (e.keyCode === 13) {
      let emptyEnter = enterPlace.trim();
      let minEnter = formatTime(enterMin, 'min');
      let secEnter = formatTime(enterSec, 'sec');
      let filterStatus = false;
      if (li[2].buttonClass === 'selected') {
        filterStatus = true;
      }
      if (minEnter && secEnter && emptyEnter !== '') {
        setData((data) => [
          ...data,
          {
            liName: ['', false, filterStatus],
            discriptionText: `${enterPlace}`,
            discriptionMin: `${enterMin.padStart(2, '0')}`,
            discriptionSec: `${enterSec.padStart(2, '0')}`,
            isTimer: true,
            createdText: 'created now',
            isTagEdit: false,
            createTaskDate: new Date(),
          },
        ]);
        setEnterPlace('');
        setEnterMin('');
        setEnterSec('');
        setActiveTaskCount((activeTaskCount) => activeTaskCount + 1);
      } else {
        setIsFormat(true);
      }
    } else {
      switch (e.target.id) {
        case 'word':
          setEnterPlace(e.target.value);
          break;
        case 'min':
          setEnterMin(e.target.value);
          break;
        case 'sec':
          setEnterSec(e.target.value);
          break;
      }
    }
  };

  const reducerTaskCtrl = (e) => {
    setData((data) => {
      if (e.type === 'click') {
        let newData = data.filter((el, i) => i !== Number(e.target.id));
        return newData;
      } else {
        let prevState;
        if (!e.target.checked) {
          prevState = ['', false, false];
        } else {
          prevState = ['completed', true, false];
        }
        data[e.target.id].liName = prevState;
        data[e.target.id].discriptionMin = '00';
        data[e.target.id].discriptionSec = '00';
        return [...data];
      }
    });
    setData((data) => {
      let prevCount = 0;
      data.forEach((el) => {
        !el.liName[1] && (prevCount = prevCount + 1);
      });
      setActiveTaskCount(prevCount);
      return [...data];
    });
  };

  const reducerTaskFltr = (e) => {
    const numE = Number(e.target.id);
    setLi((li) => {
      const newLi = li.map((el, i) => {
        if (numE === i) {
          el.buttonClass = 'selected';
        } else {
          el.buttonClass = '';
        }
        return el;
      });
      const newData = data.map((el) => {
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
      setData(newData);
      return newLi;
    });
  };

  const reducerTaskDlt = () => {
    setData((data) => {
      const newState = data.filter((el) => !el.liName[1]);
      return newState;
    });
  };

  const reducerTaskEdit = (e) => {
    let current = Number(e.target.parentNode.firstChild.id);
    setData((data) => {
      const newState = data.map((el, i) => {
        if (i === current && !el.liName[1]) {
          el.liName[0] = 'editing';
          el.isTagEdit = true;
        }
        return el;
      });
      return newState;
    });
  };

  const reducerTaskEditRecord = (e) => {
    let current = Number(e.target.previousSibling.firstChild.id);
    let emptyEnter = e.target.value.trim();
    if (e.keyCode === 13 && emptyEnter !== '') {
      setData((data) => {
        const newState = data.map((el, i) => {
          if (current === i) {
            el.discriptionText = e.target.value;
            el.liName[0] = '';
            el.isTagEdit = false;
          }
          return el;
        });
        return newState;
      });
    }
  };

  return (
    <WebApp
      data={data}
      isFormat={isFormat}
      activeTaskCount={activeTaskCount}
      li={li}
      enterPlace={enterPlace}
      enterMin={enterMin}
      enterSec={enterSec}
      doIt={reducerTaskCtrl}
      is={reducerTaskCrt}
      filter={reducerTaskFltr}
      del={reducerTaskDlt}
      edit={reducerTaskEdit}
      record={reducerTaskEditRecord}
      unError={unError}
      reStart={reStart}
    />
  );
};

export default WebContainer;
