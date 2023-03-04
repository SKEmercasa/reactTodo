export const initialStateData = [
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
];

export const initialStateLi = [
  { buttonText: 'All', buttonClass: 'selected' },
  { buttonText: 'Active', buttonClass: '' },
  { buttonText: 'Completed', buttonClass: '' },
];
