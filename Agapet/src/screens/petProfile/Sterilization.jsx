import React from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Keyboard,
  Image,
  Dimensions,
  PixelRatio,
  Modal
} from 'react-native';

export const Sterilization = ({route}) => {
  const data = route.params.pet
  const esterelizado=()=>{
    if(data.esterelizado =='S') return true
    else return false
  }
  return (
    <View>
        <Text>Esterilizacion</Text>
        <Text>{data.esterilizado}</Text>
        <Text>{data.fecha_esterelizado}</Text>
        <Text>{data.lugar_esterelizado}</Text>
        <Text>{data.descripcion_esterelizado}</Text>
    </View>
  )
}
