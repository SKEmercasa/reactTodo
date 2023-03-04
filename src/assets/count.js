export const count = (minute, second) => {
  let time = Number(minute) * 60 + Number(second);
  time--;
  let rMinute = Math.trunc(time / 60);
  let rSecond = time % 60;
  return [rMinute, rSecond];
};

export const formatTime = (time, id) => {
  let number = !Number.isNaN(Number(time)) && time.length <= 2 && time.length > 0;
  if (id === 'min' && number && Number(time) <= 99) {
    return true;
  } else if (id === 'sec' && number && Number(time) < 60) {
    return true;
  } else {
    return false;
  }
};
