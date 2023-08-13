import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';

export const Home = ({navigation}) => {

  const {userInfo, isLoading, logout} = useContext(AuthContext);
  const token = userInfo.access;

  return (    

      <View>
        <Text>{token}</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Button title="Logout"  onPress={logout} />
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 20,
  },
});
