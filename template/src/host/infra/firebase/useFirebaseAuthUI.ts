import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { auth } from 'firebaseui';

import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';
import { useFirebaseApp } from './useFirebaseApp';

interface UseFirebaseAuthUI {
  (container: string | Element): [firebase.User | null];
}

export const useFirebaseAuthUI: UseFirebaseAuthUI = function useFirebaseAuthUI(
  container,
) {
  const [user, setNextUser] = useState<firebase.User | null>(null);
  const [app] = useFirebaseApp();

  useEffect(() => {
    if (app === null) {
      return;
    }
    const authUI = new auth.AuthUI(app.auth());

    authUI?.start(container, {
      signInOptions: ['google.com'],
      callbacks: {
        signInSuccessWithAuthResult: function signInSuccessWithAuthResult() {
          return false;
        },
      },
    });
    return firebase.auth().onAuthStateChanged(async function (user) {
      setNextUser(user);
    });
  }, [app, container]);

  return [user];
};
