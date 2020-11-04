import React from 'react';
import {View, Text, TextInput, Button, Dimensions} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginPage = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPasword] = React.useState('');

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response.user.uid);
      })
      .catch((err) => console.log(err.code));
  };

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <View>
      <View>
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: '#eceff1',
            margin: 5,
            borderRadius: 5,
          }}>
          <TextInput
            placeholder="Type your email..."
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View
          style={{
            backgroundColor: '#eceff1',
            margin: 5,
            borderRadius: 5,
          }}>
          <TextInput
            placeholder="Type your pasword..."
            onChangeText={(text) => setPasword(text)}
          />
        </View>

        <View
          style={{
            width: Dimensions.get('window').width * 0.2,
            marginVertical: 10,
            alignSelf: 'center',
          }}>
          <Button title="Sign up" onPress={signIn} />
        </View>

        <View
          style={{
            width: Dimensions.get('window').width * 0.2,
            alignSelf: 'center',
          }}>
          <Button title="Sign ın" onPress={signUp} />
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
