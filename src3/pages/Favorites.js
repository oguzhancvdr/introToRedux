import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const Favorites = (props) => {
  const favList = useSelector((state) => state.favoriteList);

  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={favList}
        renderItem={({item}) => <Text>{item.name}</Text>}
        ListEmptyComponent={() => <Text>Nothing on favorite list..</Text>}
      />
    </View>
  );
};

export {Favorites};
