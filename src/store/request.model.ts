import { Canceler } from 'axios';
import { action, Action } from 'easy-peasy';

export interface RequestModel {
  requests: Record<string, Canceler>;
  addRequest: Action<
    RequestModel,
    {
      name: string;
      request: Canceler;
    }
  >;
  removeRequest: Action<RequestModel, string>;
}

const requestModel: RequestModel = {
  requests: {},

  addRequest: action((state, payload) => {
    const oldState = state;

    if (oldState.requests[payload.name]) {
      oldState.requests[payload.name] = payload.request;
    } else {
      oldState.requests = {
        ...oldState.requests,
        ...{ [payload.name]: payload.request }
      };
    }
  }),
  removeRequest: action((state, payload) => {
    const oldState = state;

    if (oldState.requests[payload]) {
      delete oldState.requests[payload];
    }
  })
};

export default requestModel;
