import { AxiosResponse } from 'axios';
import { ltzDevice } from '../utils/helper';
import Axios, { axiosObject } from './config';
import { getToken, logOut } from './tokenService';

const Ajax = () => {
  const instance = Axios();

  const userToken = getToken('access');

  if (userToken) {
    const accessToken = userToken;

    instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  instance.defaults.headers.common['LTZ-Device'] = ltzDevice();

  return instance;
};

const { CancelToken } = axiosObject;

const monitorFaction = (response: AxiosResponse<any>, monitor?: boolean) => {
  const { status } = response;

  if (typeof monitor === 'boolean' && monitor && status) {
    switch (status) {
      case 401:
        logOut(false);

        window.location.href = `/login?redirect=${window.location.pathname}&lang=en`;
        break;
      default:
        break;
    }
  }
};

const initCancelToken = (requestName?: string) => {
  if (!requestName) {
    return;
  }
  // eslint-disable-next-line consistent-return
  return new CancelToken((canceller) => {
    import('../store/index')
      .then(async (data) => {
        const { addRequest } = data.default.getActions().HTTPRequest;

        addRequest({
          name: requestName,
          request: canceller
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  });
};

export const Get = async (
  url: string,
  data?: Record<string, unknown>,
  monitor?: boolean,
  timeout?: number,
  requestName?: string
) => {
  const inputData = data || {};

  const response = await Ajax().get(url, {
    params: inputData,
    timeout,
    cancelToken: initCancelToken(requestName)
  });

  monitorFaction(response, monitor);

  return response;
};

export const Post = async (
  url: string,
  data?: Record<string, unknown>,
  monitor?: boolean,
  timeout?: number,
  requestName?: string
): Promise<AxiosResponse<any>> => {
  const response = await Ajax().post(url, data, {
    timeout,
    cancelToken: initCancelToken(requestName)
  });

  monitorFaction(response, monitor);

  return response;
};

export const FormPost = async (
  url: string,
  data: FormData,
  monitor?: boolean,
  timeout?: number,
  requestName?: string
): Promise<AxiosResponse<any>> => {
  const res = await Ajax().post(url, data, {
    timeout,
    cancelToken: initCancelToken(requestName),
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  monitorFaction(res, monitor);

  return res;
};

export const Update = async (
  url: string,
  data?: Record<string, unknown>,
  monitor?: boolean,
  timeout?: number,
  requestName?: string
): Promise<AxiosResponse<any>> => {
  const res = await Ajax().put(url, data, {
    timeout,
    cancelToken: initCancelToken(requestName)
  });

  monitorFaction(res, monitor);

  return res;
};

export const Delete = async (
  url: string,
  data?: Record<string, unknown>,
  monitor?: boolean,
  timeout?: number,
  requestNmae?: string
): Promise<AxiosResponse<any>> => {
  const inputData = data || {};

  const res = await Ajax().delete(url, {
    data: inputData,
    timeout,
    cancelToken: initCancelToken(requestNmae)
  });

  monitorFaction(res, monitor);

  return res;
};
