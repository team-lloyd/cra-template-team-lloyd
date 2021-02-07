import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebaseAuthUI } from '../host/infra/firebase/useFirebaseAuthUI';

const container = 'firebaseui-auth-container';

const Login: React.FC = function Login() {
  const [user] = useFirebaseAuthUI(`#${container}`);
  const history = useHistory();
  useEffect(() => {
    if (user !== null) {
      history.push('/');
    }
  }, [history, user]);
  return (
    <>
      <div id={container} />
    </>
  );
};

export default Login;
