import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Component_B = (props) => {
  const myUserName = useSelector((globalState) => globalState.userName);

  console.log('Component_B rendering...');

  return (
    <View style={{flex: 1, backgroundColor: '#bdbdbd'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Component_B</Text>

      <Text style={{fontSize: 20}}>Name: {myUserName}</Text>
    </View>
  );
};

export default Component_B;
