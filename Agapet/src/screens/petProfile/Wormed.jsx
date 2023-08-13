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

export const Wormed = ({route}) => {
  const data = route.params.pet
  const desparacitado=()=>{
    if(data.desparacitado =='S') return true
    else return false
    
  }

  return (
    <View>
        <Text>Desparacitado</Text>
        <Text>{data.desparacitado}</Text>
        <Text>{data.fecha_desparacitado}</Text>
        <Text>{data.lugar_desparacitado}</Text>
        <Text>{data.descripcion_desparacitado}</Text>
    </View>
  )
}
