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

export const Vaccine = ({route}) => {
  const data = route.params.data
  
  const compararFechas=(fecha)=>{
  let fecha_actual = new Date();
  let mi_fecha = new Date(fecha);
  if (fecha_actual > mi_fecha) return true;
  else if (fecha_actual < mi_fecha) return false;
  };


  return (
    <View>
      <Text>{data.nombre_vacuna}</Text>
      <Text>{data.fecha}</Text>
      <Text>{data.lugar_vacuna}</Text>
      <Text>{data.descripcion_vacuna}</Text>
    </View>
    
  )
}
