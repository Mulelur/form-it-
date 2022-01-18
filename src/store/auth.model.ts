import { Action, action } from 'easy-peasy';
import auth from '../components/auth';
import { ItemType } from '../Interface/select.interface';

export interface FirstStep {
  account: string;
  email: string;
  fullName: string;
  picture: string;
  accessToken: string;
  authType: string;
}

export default auth;
