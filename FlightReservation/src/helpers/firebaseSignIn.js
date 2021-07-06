import auth from '@react-native-firebase/auth';

export const signInWithNameEmailAndPassword = async (name, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: name});
    return 'User account created & signed in';
  } catch (error) {
    return error.code;
  }
};
