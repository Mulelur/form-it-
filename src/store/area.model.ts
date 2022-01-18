import { action, Action } from 'easy-peasy';
import { Component } from '../Interface/project.interface';

interface IArea {
  area: Element[] & Component[];
  addElement: Action<IArea, any>;
  removeElement: Action<IArea, number>;
}

const Area: IArea = {
  area: [],
  addElement: action((state, payload) => {
    const oldState = state;
    // add:
    oldState.area.push(payload);
  }),
  removeElement: action((state, payload) => {
    const oldState = state;
    oldState.area.splice(0, payload);
  })
};

export default Area;
