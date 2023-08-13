import React, {useContext, useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
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

export const UpdateVaccine = ({route}) => {
  const data = route.params.data

  const [fecha, setFecha] = useState('');
  const [lugar, setLugar] = useState('');
  const [descipcion, setDescipcion] = useState('');
  const [image, setImage] = useState('');

  const selectImage=async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const update = (fecha, lugar,descipcion, image) =>{
    let url = `http://192.168.200.4:8000/vacuna/actualizar/${data.vacuna_id}/`;
    let bodyFormData = new FormData()
    if(fecha.length > 0){
      bodyFormData.append('fecha', fecha)
    }
    if(lugar.length > 0){
      bodyFormData.append('lugar_vacuna',lugar)
    }
    if(descipcion.length > 0){
      bodyFormData.append('descripcion_vacuna',descipcion)
    }
    if(image.length>0){
      bodyFormData.append('imagen64',image)
    }
    axios({
      method: 'put',
      url: url,
      data: bodyFormData,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
    alert('Datos actualizados');
  };
  

  return (
    <View>
      <Text>Actualizacion</Text>
      <Text>{data.nombre_vacuna}</Text>

      <TextInput
      value={fecha}
      placeholder='Ingrese la fecha en YYYY-MM-DD'
      onChangeText={text => setFecha(text)}
      />

      <TextInput
      value={lugar}
      placeholder='Ingrese el lugar de vacunacion'
      onChangeText={text => setLugar(text)}
      />

      <TextInput
      value={descipcion}
      placeholder='Ingrese la descripcion de la vacunacion'
      onChangeText={text => setDescipcion(text)}
      />

      <View >

      <Button
        color={"#5FAFB9"}
        title="Guardar"
        onPress={() => {
          update(fecha, lugar,descipcion, image)}}/>
      </View>

    </View>
    
  )
}
