import { useEffect, useState } from 'react';
import firebase from 'firebase/app';

let persistentApp: firebase.app.App | null = null;

export interface UseFirebaseApp {
  (): [firebase.app.App | null];
}

export const useFirebaseApp: UseFirebaseApp = function useFirebaseApp() {
  const [app, setNextApp] = useState<firebase.app.App | null>(persistentApp);
  const [nextfirebaseConfig, setNextfirebaseConfig] = useState<object>();

  useEffect(() => {
    import('../../../config/app.json').then((app: any) => {
      setNextfirebaseConfig(app['firebaseConfig']);
    });
  }, []);

  useEffect(() => {
    if (nextfirebaseConfig === undefined) {
      return;
    }
    if (app !== null) {
      return;
    }
    const firebaseApp = firebase.initializeApp(nextfirebaseConfig);
    setNextApp(firebaseApp);
  }, [app, nextfirebaseConfig]);

  return [app];
};
