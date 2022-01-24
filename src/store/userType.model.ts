import {Action, action } from "easy-peasy";

type UserTypes = 
    'RECRUTOR'| 'USER'| 'GUST';


interface IUserType {
   userType: 'RECRUTOR'| 'USER'| 'GUST'
   setUserType: Action<IUserType, UserTypes>;
  }
  
  const UserType: IUserType = {
   userType: 'USER',
   setUserType: action((state, payload) => {
       const oldState = state;
       oldState.userType = payload;
   })
  };
  export default UserType;
  