import jwt_decode from 'jwt-decode';
import moment from 'moment';

export const setData = (accessData: string) => {
  localStorage.setItem('accessInfo', accessData);
};

export const getUser = () => {
  const localStore = localStorage.getItem('accessInfo') || '';

  if (localStore !== '') {
    const parse = JSON.parse(localStore);

    if (typeof parse.user !== 'undefined') {
      return parse.user;
    }
  }

  return false;
};

export const getToken = (type: 'access' | 'refresh') => {
  const localStore = localStorage.getItem('accessInfo') || '';

  if (localStore !== '') {
    const parse = JSON.parse(localStore);

    if (typeof parse.accessToken !== 'undefined') {
      let token = '';

      if (
        type === 'access' &&
        typeof parse.accessToken.access !== 'undefined' &&
        parse.accessToken.access &&
        parse.accessToken.access.token
      ) {
        token = parse.accessToken.access.token;
      }

      if (
        type === 'refresh' &&
        typeof parse.accessToken.refresh !== 'undefined' &&
        parse.accessToken.refresh &&
        parse.accessToken.refresh.token
      ) {
        token = parse.accessToken.refresh.token;
      }

      return token;
    }
  }
  return false;
};

export const logOut = (redirect?: boolean) => {
  return new Promise((resolve, reject) => {
    import('../store/index')
      .then(async (data) => {
        const storeData = data.cleanStore;

        await storeData.clear();

        const cookie = localStorage.getItem('showCookie');

        localStorage.clear();

        if (cookie) {
          localStorage.setItem('showCookie', 'false');
        }

        if (typeof redirect === 'undefined' || redirect) {
          window.location.replace('/login');
        }

        resolve(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error', error);

        reject(error);
      });
  });
};

const isValid = (token: string) => {
  const decoded = jwt_decode(token);

  const { exp } = decoded as { exp: number };

  if (exp) {
    const date = moment(exp * 1000);
    const currentDate = moment(moment().toISOString());

    if (currentDate.isSameOrBefore(date)) {
      return true;
    }
  }

  return false;
};

export const loggedIn = (populateUser?: boolean) => {
  const infoData = getToken('access');

  let signedIn = false;

  if (typeof infoData !== 'boolean') {
    const accessToken = infoData;

    signedIn = isValid(accessToken);

    if (signedIn && populateUser) {
      import('../store/index')
        .then(async (data) => {
          const { addUser } = data.default.getActions().User;
          const user = getUser();

          if (typeof user !== 'boolean') {
            const {
              picture,
              firstName,
              lastName,
              email,
              accountType,
              role,
              loggedIn: logged,
              verified
            } = user;

            addUser({
              picture,
              fullName: `${firstName} ${lastName}`,
              firstName,
              lastName,
              email,
              accountType,
              role,
              loggedIn: logged,
              verified
            });
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('error', error);
        });
    }
  }

  return signedIn;
};
