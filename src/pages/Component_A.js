import React from 'react';
import {View, Text, Button, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Component_A = (props) => {
  const dispatch = useDispatch();

  console.log('Component_A rendering...');

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Component_A</Text>

      <View
        style={{
          marginTop: 10,
          width: Dimensions.get('window').width * 0.5,
          alignSelf: 'center',
        }}>
        <Button
          title="Up"
          onPress={() => dispatch({type: 'INCREASE_COUNTER'})}
        />
      </View>
      <View
        style={{
          marginVertical: 10,
          width: Dimensions.get('window').width * 0.5,
          alignSelf: 'center',
        }}>
        <Button
          title="Down"
          onPress={() => dispatch({type: 'DECREASE_COUNTER'})}
        />
      </View>
      <View
        style={{
          width: Dimensions.get('window').width * 0.5,
          alignSelf: 'center',
        }}>
        <Button
          title="Update userName"
          onPress={() =>
            dispatch({
              type: 'SET_USERNAME',
              payload: {
                newUserName: 'Aysel',
              },
            })
          }
        />
      </View>
    </View>
  );
};

export default Component_A;
