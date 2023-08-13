import React, { useContext, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Keyboard,
  Image,
  Dimensions
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../../context/AuthContext';

const width = Dimensions.get('window').width


export const Login = ({ navigation }) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, login } = useContext(AuthContext);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!email) {
      isValid = false;
      return alert('Ingrese su email para iniciar sesion');

    }
    if (!password) {
      isValid = false;
      return alert('Ingrese su contrasena para inicar sesion');

    }
    if (isValid) {
      login(email, password);
    }
  };



  return (
    <View style={style.fondo}>
      <Image style={style.image}
        source={require('../../../assets/yoamo.jpg')}
        resizeMode={'contain'} />
      <Spinner visible={isLoading} />

      <View style={style.fondo2}>
        <View style={style.fondo3}>
          <TextInput
            style={style.input}
            value={email}
            placeholder="Ingrese su correo"
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={style.input}
            value={password}
            placeholder="Ingrese su contraseña"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View style={style.boton}>
        <Button 
          color={"#5FAFB9"}
          margin={'10%'}
          title="Login"
          onPress={() => {
            validate();
          }}
        />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
          <Text>¿No tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={style.sesion}>Registrate</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const style = StyleSheet.create({
  sesion: {
      color: '#5FAFB9',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16
  },
  fondo: {
      backgroundColor: '#DF9F51',
      justifyContent: 'center',
      alignItems: 'center'
  },
  fondo2: {
      backgroundColor: '#fff',
      width: '100%',
      height: '70%',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      overflow: "hidden"
  },
  fondo3: {
      marginTop: '10%',
      marginBottom: '1%'
  },
  image: {
      //width: '50%',
      //height: '30%',
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden",
      marginTop: '25%',
      marginBottom: '10%'
  },
  input: {
      height: 45,
      margin: 10,
      paddingLeft:10,
      marginLeft: '10%',
      marginRight: '10%',
      borderWidth: 1,
      fontSize: width * 0.05,
      borderRadius: 12,
      color: 'grey',
      borderColor: 'grey'
      },
  boton: {
      marginLeft: '10%',
      marginRight: '10%',
      padding: 20,
      borderRadius: 10,
      marginBottom: '5%',
      marginTop: '5%'
  },
  img: {
      width: '5%',
      height: '5%',
      overflow: "hidden"
  },
  contimg: {
      width: 50,
      height: 50
  },
  contimg2: {
      width: 50,
      height: 50,
      top: 100,
      left: 100
  },
  container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: '10%',
      marginTop: '10%'
  },
  tinyLogo: {
      width: 50,
      height: 50,
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '3%',
      marginTop: '3%'
  },
  inputs:{
      marginBottom: '5%',
      marginTop: '5%'
  }
});