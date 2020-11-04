import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Component_C = (props) => {
  const myCounter = useSelector((state) => state.counter);

  console.log('Component_C rendering...');

  return (
    <View style={{flex: 1, backgroundColor: '#e0e0e0'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Component_C</Text>
      <Text style={{fontSize: 20}}>Counter: {myCounter}</Text>
    </View>
  );
};

export default Component_C;
