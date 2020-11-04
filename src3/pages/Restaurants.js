import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {RestaurantItem} from '../components';
import {useDispatch} from 'react-redux';

const Restaurants = (props) => {
  const [list, setList] = useState('');

  const dispatch = useDispatch();

  {
    /** // * requesting with API key and POST method
    const fetchData = () => {
    axios
      .post(
        'https://rapidapi.p.rapidapi.com/photos',
        {
          language: 'en_US',
          location_id: '15333482',
          currency: 'USD',
          limit: '15',
        },
        {
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-key':
              'b34daf7999msh86e434ce961be9dp104c97jsn52b797f3119d',
            'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          },
        },
      )
      .then((response) => setList(response.data.results.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchData(), []); 
 */
  }

  const fetchData = () => {
    axios
      .get('http://opentable.herokuapp.com/api/restaurants', {
        params: {
          state: 'IL',
        },
      })
      .then((response) => {
        // console.log(response);
        setList(response.data.restaurants);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchData(), []);

  const renderList = ({item}) => {
    return (
      <RestaurantItem
        item={item}
        onAddFavorite={() =>
          dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: {
              selectedRestaurant: item,
            },
          })
        }
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>
        Restaurants
      </Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={renderList}
        ItemSeparatorComponent={() => (
          <View style={{borderWidth: 1, borderColor: '#bdbdbd'}}></View>
        )}
      />
    </View>
  );
};

export {Restaurants};
