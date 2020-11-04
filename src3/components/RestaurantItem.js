import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RestaurantItem = ({item, onAddFavorite}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onAddFavorite}>
      <Icon name={'modx'} size={20} color={'red'} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export {RestaurantItem};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    fontWeight: '200',
  },
});

{
  /** 
  "id": 114373,
  "name": "Barley & Rye",
  "address": "1320 Fifth Ave",
  "city": "Moline",
  "state": "IL",
  "area": "Iowa",
  "postal_code": "61265",
  "country": "US",
  "phone": "3097571557x",
  "lat": 41.505273,
  "lng": -90.51788,
  "price": 2,
  "reserve_url": "http://www.opentable.com/single.aspx?rid=114373",
  "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=114373",
  "image_url": "https://www.opentable.com/img/restimages/114373.jpg"
  */
}
