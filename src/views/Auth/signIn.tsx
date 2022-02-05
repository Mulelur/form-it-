import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../../components/auth/auth.components';
import Button from '../../components/common/buttons/PrimaryButton';
import Icons from '../../components/common/general/Icons';
import { InputFieldContainer } from '../../containers/fields/inputField';
import { Post } from '../../services/service';
import { setData } from '../../services/tokenService';
import { useActions } from '../../store';

export default function SignIn() {
  const history = useHistory();

  const [passwordInputChange, setPasswordInputChange] = React.useState('');

  const [emailInputChange, setEamilInputChange] = React.useState('');

  const [goTo, setGoTo] = React.useState('/');

  const { addUser } = useActions((action) => action.User);




  // const location = useLocation<never>();

  const onChangeURL = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    // const [goTo, setGoTo] = React.useState('/recent')

    history.push({
      pathname: '/signup'
      // search: goTo ? `redirect=${goTo}` : '',
    });
  };

  // React.useEffect(() => {
  //   const query = useQuery();

  //   let hasState = false;
  //   if (typeof location.state !== 'undefined') {
  //     hasState = true;
  //   };

  //   const checkRedirectURL = query.get('redirect');

  //   if (hasState &&
  //     typeof location.state.redirect !== 'undefined' &&
  //     checkRedirectURL === null
  //   ) {
  //     setGoTo(location.state.redirect);
  //   } else if (checkRedirectURL) {
  //     setGoTo(checkRedirectURL);
  //   };
  // }, [location.state, history]);

  const handelChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    switch (type) {
      case 'passowrd':
        setPasswordInputChange(event.target.value);
        break;
      case 'email':
        setEamilInputChange(event.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log('submited');

    const endPoint = 'login';

    const requestData = {
      emailInputChange,
      passwordInputChange
    };

    Post(`/account/auth/${endPoint}`, requestData)
      // eslint-disable-next-line consistent-return
      .then((res) => {
        const { data } = res;

        if (data.success) {
          setData(
            JSON.stringify({
              accessToken: data.accessToken,
              user: data.profile
            })
          );

          addUser(data.profile);

          return history.replace(goTo);
        }

        if (data.error.toLowerCase() === 'account not activated') {
          // eslint-disable-next-line no-console
          return console.log('Not working');
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, requestData);
        // eslint-disable-next-line no-console

      });

    setGoTo('/');
  };

  return (
    <Auth>
      <Auth.Header>
        <Auth.HeaderLogo>Fort It</Auth.HeaderLogo>
        <Auth.HeaderLink>New to Fortm It?</Auth.HeaderLink>
        <Auth.HeaderButton onClick={onChangeURL}>
          create a new account
        </Auth.HeaderButton>
      </Auth.Header>
      <Auth.Body>
        <Auth.Form onSubmit={onSubmit}>
          <Auth.Heading>Sign In</Auth.Heading>
          <Button width="100%" type="button" color="tertiary">
            <Icons name="google" />
            Sing In With
          </Button>
          <Auth.Divider> or Sing in with Your email</Auth.Divider>
          <InputFieldContainer
            onChange={(e) => handelChange(e, 'email')}
            style={{ padding: '0.5rem 0' }}
            type="email"
          >
            Email Address
          </InputFieldContainer>
          <InputFieldContainer
            style={{ padding: '0.5rem 0' }}
            onChange={(e) => handelChange(e, 'password')}
            type="password">
            Passsword
          </InputFieldContainer>
          <Auth.Spacer />
          <Button width="100%" type="submit" color="secondary">
            Sing In
          </Button>
        </Auth.Form>
      </Auth.Body>
      <Auth.Footer>
        <Auth.CopyRight>© 2021 WebLinnk</Auth.CopyRight>
        <Auth.FooterLink>Terms</Auth.FooterLink>
        <Auth.FooterLink>Privacy</Auth.FooterLink>
        <Auth.FooterLink>Security</Auth.FooterLink>
        <Auth.FooterLink>Get in Touch</Auth.FooterLink>
      </Auth.Footer>
    </Auth>
  );
}
