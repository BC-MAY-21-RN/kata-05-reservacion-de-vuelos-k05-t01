import auth from '@react-native-firebase/auth'
const LogOut = navigation => {
  auth().signOut().then(navigation.navigate('LogIn'));
};
export default LogOut