import { Action, action } from 'easy-peasy';

const defaultPhoto = '';

type UpdateUser = {
  picture: string;
  loggedIn: boolean;
  fullName: string;
  firstName: string;
  lastName: string;
  accountType: string;
  email: string;
  verified: boolean;
  role: string;
};

export type UserObject = {
  loggedIn: boolean;
  picture: string;
  photo: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  blocked: boolean;
  verified: boolean;
  lang: string;
  role: string;
  zone: string;
  accountType: string;
};

export type UserModel = UserObject & {
  changeLanguage: Action<UserObject, string>;
  changeTimezone: Action<UserObject, string>;
  addUser: Action<UserObject, UpdateUser>;
  changeAccountType: Action<UserObject, string>;
  updateName: Action<UserObject, { firstName: string; lastName: string }>;
  addProfilePicture: Action<UserObject, string>;
};

const user: UserModel = {
  loggedIn: false,
  picture: '',
  photo: defaultPhoto,
  firstName: '',
  lastName: '',
  fullName: '',
  email: '',
  blocked: false,
  verified: false,
  accountType: '',
  zone: '',
  role: 'admin',
  lang: 'English',
  changeLanguage: action((state, payload) => {
    const oldState = state;

    if (payload) {
      oldState.lang = payload;
    }
  }),
  changeTimezone: action((state, payload) => {
    const oldState = state;

    if (payload) {
      oldState.zone = payload;
    }
  }),
  addUser: action((state, payload) => {
    const oldState = state;

    oldState.loggedIn = true;
    oldState.picture = `${payload.picture}`;
    oldState.fullName = `${payload.firstName} ${payload.lastName}`;
    oldState.firstName = payload.firstName;
    oldState.lastName = payload.lastName;
    oldState.email = payload.email;
    oldState.verified = payload.verified;

    oldState.accountType = payload.accountType;
    oldState.role = payload.role;
  }),

  updateName: action((state, payload) => {
    const oldState = state;

    oldState.firstName = payload.firstName;
    oldState.lastName = payload.lastName;
    oldState.fullName = `${payload.firstName} ${payload.lastName}`;
  }),
  changeAccountType: action((state, payload) => {
    const oldState = state;

    oldState.accountType = payload;
  }),
  addProfilePicture: action((state, payload) => {
    const oldState = state;

    oldState.picture = payload;
  })
};

export default user;
