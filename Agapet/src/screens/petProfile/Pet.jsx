import React, {useContext, useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Keyboard,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import {PetContext} from '../../context/PetContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { AntDesign } from '@expo/vector-icons';

import {
    Ionicons,
    FontAwesome5,
    FontAwesome,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";



const {height,width}= Dimensions.get('window');

export const Pet = () => {

  const {pet,isLoading} = PetContext();

  const navigation = useNavigation();
  
  return (
    <ScrollView>

        {!!pet?
        <View style={style.fondo}>
        <View style={style.backgroundContainer}>
            <Image style={style.image} source={{uri: `${pet?.image64}`}}/>
            <View style={style.fondo3}>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={style.sesion}>{pet.nombre}</Text>
                        {
                            pet.genero == 'H' ?
                            (
                                <>
                                <Image style={style.imgIcon} source={require('../../../assets/female.png')}/>
                                </>
                            ):
                            (
                                <>
                                <Image style={style.imgIcon} source={require('../../../assets/male.png')}/>
                                </>
                            )
                        } 
                    </View>
                    {
                    /*<View style={style.editContenedor}>
                        <Image style={style.imgIcon} source={require('../../../assets/edit.png')}/>
                    </View>
                    <Text style={style.estadoMascota}>{pet.estado==="S"?'Disponible':'No Disponible'}</Text>
                    */
                    }
                    <Text style={style.estadoMascota}>{pet.estado==="S"?'Disponible':'No Disponible'}</Text>
                    <Text style={style.descripcionMascota}>{pet.descripcion}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={style.containerCarac}>
                        <Text> Edad</Text>
                        <Text style={{ fontWeight: "bold" }}> {pet.edad} años</Text>
                    </View>
                    <View style={style.containerCarac}>
                        <Text> Peso</Text>
                        <Text style={{ fontWeight: "bold" }}> {pet.peso} Kg</Text>
                    </View>
                    <View style={style.containerCarac}>
                        <Text> Comida</Text>
                        <Text style={{ fontWeight: "bold" }}>{pet.comida}</Text>
                    </View>
                </View>
                <View style={style.inputs}>
                    <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", gap:5}}>
                    <View >
                        <Button
                            onPress={()=> navigation.navigate('Clinic')}
                            color={"#5FAFB9"}
                            margin={'2%'}
                            title="Historial clínico"
                        />
                    </View>
                    <View >
            
                        <Button
                            onPress={()=> navigation.navigate('Timeline')}
                            color={"#5FAFB9"}
                            margin={'2%'}
                            title="Proceso de adopción"
                        />
                    </View>

                    </View>
                    
                </View>
            </View>
        </View>
        {//<Spinner visible={isLoading} />
        }
        <View style={style.fondo2}>
            <View style={style.contenedorCaract}>
                <View style={style.caracte}>
                    <View style={style.iconCaracte}>
                        <Image style={style.imgIcon2}

                            source={require('../../../assets/deportivo.png')}
                        />
                    </View>
                    <View style={style.iconCaracte2}>
                        <Text style={{ fontWeight: "bold" }}> Deportivo</Text>
                        <View style={{ alignItems: 'center', marginTop: 5, flexDirection: 'row' }}>
                            {
                                [... new Array(5)].map((star, index)=>{
                                    <View key={index+1}></View>
                                    return index < pet.deportivo ? 
                                    <AntDesign name="star" size={15} color="gold" key={index}/> : <AntDesign name="staro" size={15} color="black" key={index}/>
                                })
                            }
                        </View>
                    </View>

                </View>
                <View style={style.caracte}>
                    <View style={style.iconCaracte}>
                        <Image style={style.imgIcon2}

                            source={require('../../../assets/dog-playing.png')}
                        />
                    </View>
                    <View style={style.iconCaracte2}>
                        <Text style={{ fontWeight: "bold" }}> Juguetón</Text>
                        <View style={{ alignItems: 'center', marginTop: 5, flexDirection: 'row' }}>
                        {
                            [... new Array(5)].map((star, index)=>{
                                <View key={index+1}></View>
                                return index < pet.jugueton ? 
                                <AntDesign name="star" size={15} color="gold" key={index}/> : <AntDesign name="staro" size={15} color="black" key={index}/>
                            })
                        }
                        </View>
                    </View>
                </View>
            </View>
            <View style={style.contenedorCaract}>
                <View style={style.caracte}>
                    <View style={style.iconCaracte}>
                        <Image style={style.imgIcon2}

                            source={require('../../../assets/sociable.png')}
                        />
                    </View>
                    <View style={style.iconCaracte2}>
                        <Text style={{ fontWeight: "bold" }}> Sociable</Text>
                        <View style={{ alignItems: 'center', marginTop: 5, flexDirection: 'row'}}>
                        {
                            [... new Array(5)].map((star, index)=>{
                                <View key={index+1}></View>
                                return index < pet.sociable ? 
                                <AntDesign name="star" size={15} color="gold"  key={index}/> : <AntDesign name="staro" size={15} color="black" key={index}/>
                            })
                        }
                        </View>
                    </View>
                </View>
                <View style={style.caracte}>
                    <View style={style.iconCaracte}>
                        <Image style={style.imgIcon2}

                            source={require('../../../assets/miedo.png')}
                        />
                    </View>
                    <View style={style.iconCaracte2}>
                        <Text style={{ fontWeight: "bold" }}> Miedoso</Text>
                        <View style={{ alignItems: 'center', marginTop: 5, flexDirection: 'row'}}>
                        {
                            [... new Array(5)].map((star, index)=>{
                                return index < pet.miedoso ? 
                                <AntDesign name="star" size={15} color="gold" key={index} /> : <AntDesign name="staro" size={15} color="black" key={index}/>
                            })
                        }
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>:
    <View>
        <View style={style.nomascota}>
        <Text>Aún no tienen una mascota asignada</Text>
        </View>
        
    </View>
    
    }


        
        </ScrollView>
  )
};


const style = StyleSheet.create({
  sesion: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      margin: 5
  },
  estadoMascota: {
      color: 'orange',
      fontWeight: 'bold',
      fontSize: 13,
      margin: 5
  },
  descripcionMascota: {
      margin: 5
  },
  fondo: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
  },
  fondo2: {
      backgroundColor: '#fff',
      width: '100%',
      height: '20%',
      overflow: "hidden",
      justifyContent: 'center',
      position: 'relative',
      top: -170
  },
  fondo3: {
      position: 'relative',
      margin: '5%',
      width: '90%',
      top: -190,
      paddingHorizontal: 20,
      elevation: 5,
      backgroundColor: 'white',
      borderRadius: 25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 5
  },
  contenedorCaract: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
  },
  image: {
      width: width,
      height: width,
      borderBottomLeftRadius: width*0.4,
      borderBottomRightRadius: width*0.4,
      overflow: "hidden",
      top: 0,
      marginBottom: '10%'
  },
  input: {
      height: 45,
      margin: 10,
      marginLeft: '10%',
      marginRight: '10%',
      borderWidth: 1,
      fontSize: width * 0.05,
      borderRadius: 12,
      color: 'grey',
      borderColor: 'grey'
  },
  boton: {
      marginLeft: '20%',
      marginRight: '20%',
      padding: 20,
      borderRadius: 10,
      marginTop: '2%'
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
  },
  backgroundContainer: {
      //top: 15,
      bottom: 0,
      left: 0,
      right: 0,
  },
  containerCarac: {
      margin: '3%',
      backgroundColor: '#F6F3F4',
      borderRadius: 10,
      width: width*0.21,
      height: width*0.2,
      alignItems: 'center',
      justifyContent: 'center'
  },
  imgIcon: {
      padding: 10,
      marginTop: 8,
      height: 15,
      width: 15,
      resizeMode: 'stretch'
  },
  editContenedor: {
      position: 'absolute',
      top: 2,
      left: 260,
  },
  caracte: {
      width: 150,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 20,
      margin: 10,
      borderWidth: 1,
      borderColor: '#E4DCDF',
      flexDirection: "row"
  },
  iconCaracte: {
      width: 40,
      height: 40,
      backgroundColor: '#5FAFB9',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 10,
      left: 10
  },
  iconCaracte2: {
      //justifyContent: 'left',
      position: 'absolute',
      top: 10,
      left: 55
  },
  imgIcon2: {
      padding: 10,
      height: 30,
      width: 30,
      resizeMode: 'stretch'
  },
  nomascota:{
    //paddingTop:100,
    //paddingLeft:100
    padding:100,
    fontWeight: 'bold',
    fontSize: 20,
  },
  opciones:{
    display:"flex"
  }

});