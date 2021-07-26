import auth from '@react-native-firebase/auth';

export const logInWithEmailAndPassword = async (email, password) => {
  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(({user}) => {})
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
      }

      if (error.code === 'auth/invalid-email') {
      }

      console.error(error);
    });
};
