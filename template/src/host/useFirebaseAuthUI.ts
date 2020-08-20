import { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import { auth } from 'firebaseui';

import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';

interface UseFirebaseAuthUI {
  (container: string | Element): [firebase.User | null];
}

export const useFirebaseAuthUI: UseFirebaseAuthUI = function useFirebaseAuthUI(
  container,
) {
  const [user, setNextUser] = useState<firebase.User | null>(null);
  const [nextfirebaseConfig, setNextfirebaseConfig] = useState<object>();

  useEffect(() => {
    import('../config/app.json').then((app: any) => {
      setNextfirebaseConfig(app['firebaseConfig']);
    });
  }, [container]);

  useEffect(() => {
    if (nextfirebaseConfig === undefined) {
      return;
    }
    const firebaseApp = firebase.initializeApp(nextfirebaseConfig);
    const authUI = new auth.AuthUI(firebaseApp.auth());

    authUI?.start(container, {
      signInOptions: ['google.com'],
      callbacks: {
        signInSuccessWithAuthResult: function signInSuccessWithAuthResult() {
          return false;
        },
      },
    });
    return firebase.auth().onAuthStateChanged(async function (user) {
      if (user !== null) {
        const idToken = await user.getIdToken();
        localStorage.setItem('idToken', idToken);
      }
      setNextUser(user);
    });
  }, [nextfirebaseConfig, container]);

  return [user];
};
