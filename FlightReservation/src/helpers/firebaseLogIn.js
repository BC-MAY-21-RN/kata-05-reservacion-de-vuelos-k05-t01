import auth from '@react-native-firebase/auth';

export const logInWithEmailAndPassword = async (email, password) => {
  //   return await auth()
  //     .then(({user}) => {
  //       console.log('User account created & signed in!');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // };
  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Login succesful');
      true;
    })
    .catch(() => {
      console.log('Invalid credentials');
      false;
    });
};
