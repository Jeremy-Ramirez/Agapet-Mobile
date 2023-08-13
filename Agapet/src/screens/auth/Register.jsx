import React, { useContext, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Keyboard,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../../context/AuthContext';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export const Register = ({ navigation }) => {

  const [name, setName] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [direction, setDirection] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');


  const { isLoading, register } = useContext(AuthContext);

  const validate = () => {


    Keyboard.dismiss();
    let isValid = true;

    if (!name) {
      isValid = false;
      return alert('Ingrese su nombre completo');

    }

    if (!email) {
      isValid = false;
      return alert('Ingrese su email');

    } else if (!email.match(/\S+@\S+\.\S+/)) {
      isValid = false;
      return alert('Ingrese su email de forma correcta');

    }

    if (!phone) {
      isValid = false;
      return alert('Ingrese su telefono');

    }

    if (!direction) {
      isValid = false;
      return alert('Ingrese su direccion');

    }

    if (!password || !password2) {
      isValid = false;
      return alert('Error en las contrasenas');

    } else if (password.length < 2 || password2.length < 2 || password != password2) {
      isValid = false;
      return alert('Verifique la contrasenas');

    }

    if (isValid) {
      register(name,lastname,email, phone, direction, password);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#DF9F51', flex: 1 }}>
      <ScrollView >
        {/*CODIGO*/}
        <View style={styles.fondo}>
          <Image style={styles.image}
            source={require('../../../assets/yoamo.jpg')}
            resizeMode={'contain'} />
          <Spinner visible={isLoading} />
          <View style={styles.fondo2}>
            <View style={{marginTop:'10%'}} >
              <TextInput
                style={styles.input}
                value={name}
                placeholder="Ingrese su nombre "
                onChangeText={text => setName(text)}
              />
               <TextInput
                style={styles.input}
                value={lastname}
                placeholder="Ingrese su apellido "
                onChangeText={text => setlastname(text)}
              />

              <TextInput
                style={styles.input}
                value={email}
                placeholder="Ingrese su correo"
                onChangeText={text => setEmail(text)}
              />

              <TextInput
                style={styles.input}
                value={phone}
                placeholder="Ingrese su telefono"
                onChangeText={text => setPhone(text)}
              />

              <TextInput
                style={styles.input}
                value={direction}
                placeholder="Ingrese su direccion"
                onChangeText={text => setDirection(text)}
              />

              <TextInput
                style={styles.input}
                value={password}
                placeholder="Ingrese su contraseña"
                onChangeText={text => setPassword(text)}
                secureTextEntry
              />

              <TextInput
                style={styles.input}
                value={password2}
                placeholder="Ingrese su contraseña"
                onChangeText={text => setPassword2(text)}
                secureTextEntry
              />


              <View style={styles.boton}>
              <Button
              color={'#5FAFB9'}
                title="Registrar"
                onPress={() => {
                  validate()
                }}
              />
              </View>
            </View>
            <View >
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Iniciar sesion
              </Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
      height: height*0.65,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      overflow: "hidden",
      justifyContent: 'center'
  },
  fondo3: {
      marginTop: '10%',
      marginBottom: '1%'
  },
  fondoPerfil:{
      justifyContent:'center',
      alignItems:'center'
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
  image2: {
      //width: '50%',
      //height: '30%',
      width: 200,
      height: 200,
      borderRadius: 100,
      marginTop: '2%',
      marginBottom: '2%'
  },
  input: {
      height: 45,
      margin: 10,
      marginLeft: '10%',
      marginRight: '10%',
      paddingLeft:10,
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
      //marginBottom: '5%',
      //marginTop: '5%'
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
  inputs: {
      marginBottom: '5%',
      marginTop: '5%'
  }
});