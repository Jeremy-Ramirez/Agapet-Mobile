import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
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
    ScrollView,
    SafeAreaView,
    StatusBar,
    TouchableWithoutFeedback,
    ImageBackground
} from 'react-native';
import { BottomNotification } from '../../screens/timeline/BottomNotification'
import Searchbar from '../../components/Searchbar'
import YoutubePlayer from 'react-native-youtube-iframe'
import { useNavigation } from '@react-navigation/native';


const popupList = [
    {
        id: 1,
        name: 'Task'
    },
    {
        id: 2,
        name: 'Message'
    },
    {
        id: 3,
        name: 'Note'
    }
]

const { height, width } = Dimensions.get('window');

var FONT_BACK_LABEL = 18;

if (PixelRatio.get() <= 2) {
    FONT_BACK_LABEL = 14;
}

export const InfoCurso = ({ route }) => {
    const cursos = route.params.Infocursos
    const usuario = route.params.usuario
    const mascota = route.params.mascota
    const navigation = useNavigation();
    const [temas, setTemas] = useState([]);




    let popupRef7 = React.createRef()
    const onShowPopup7 = () => {
        popupRef7.show()
    }
    const onClosePopup7 = () => {
        popupRef7.close()
    }

    const getTema = () => {
        axios.get(`http://192.168.200.4:8000/cursos/tema/cursos?idcurso=${cursos.idcurso}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                let data = res.data
                setTemas(data)
            }).catch(e => {
                console.log(`data error ${e}`);
            });
    };

    useEffect(() => {
        getTema();
    }, [])






    return (
        <View style={style.fondo}>

            <View style={style.fondo3}>
                <View style={style.contenedorCaract}>
                    <View style={style.caracte}>
                        <View style={style.iconCaracte}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Pet')}>
                                <Image style={style.imgIcon2}
                                    source={{ uri: `${pet.image64}` }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={style.iconCaracte2}>
                            <Text style={{ fontWeight: "bold", fontSize: width * 0.045, color: 'white' }}> ¡Hola {mascota.nombre}!</Text>
                            <View style={{ flexDirection: "row", marginLeft: '2%', marginTop: '2%' }}>
                                <Image style={style.imgIcon5}

                                    source={require('../../../assets/coin.png')}
                                />
                                <Text style={{ fontSize: width * 0.03, marginTop: '2%', marginBottom: '2%', color: 'yellow' }}> {usuario.points} puntos</Text>
                            </View>
                        </View>
                        <View style={style.iconCaracte3}>
                            <StatusBar barStyle='dark-content'></StatusBar>
                            <SafeAreaView style={style.container2}>
                                <TouchableWithoutFeedback onPress={onShowPopup7}>

                                    <Image style={style.imgIcon6}

                                        source={require('../../../assets/notificacion.png')}
                                    />

                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomNotification
                                title='¡Felicitaciones!'
                                estado='No iniciado'
                                ref={(target) => popupRef7 = target}
                                onTouchOutside={onClosePopup7}
                                data={popupList}
                            />

                        </View>
                    </View>

                </View>
            </View>
            <Text style={{ fontSize: width * 0.055, marginTop: '6%', marginLeft: '5%', fontWeight: "bold" }}> {cursos.titulo}</Text>

            <View style={style.iconCaracte4}>
                <YoutubePlayer
                    play={false}
                    width={width * 0.9}
                    height={height * 0.3}
                    videoId={cursos.url}
                />
            </View>
            <View style={{ flexDirection: 'row', width: width, marginTop: '2%' }}>
                <View style={{ backgroundColor: '#f5f5f5', marginLeft: '5%', borderRadius: 15, justifyContent: 'center', width: width * 0.25 }} >
                    <View style={{ flexDirection: 'row', marginBottom: '1%' }}>
                        <Image style={style.imgIcon2v1}

                            source={require('../../../assets/icons8-clock-384.png')}
                        />
                        <Text style={{ fontSize: width * 0.03 }}>
                            {cursos.minutos} mins
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '1%' }}>
                        <Image style={style.imgIcon2v1}

                            source={require('../../../assets/coin.png')}
                        />
                        <Text style={{ fontSize: width * 0.03 }}>
                            {cursos.puntos} puntos
                        </Text>
                    </View>
                </View>
                <View style={{ width: width * 0.6 }} >
                    <Text style={{ fontSize: width * 0.035, marginLeft: '5%', fontWeight: "bold", margin: '1%' }}> Descripción</Text>
                    <Text style={{ fontSize: width * 0.03, marginLeft: '5%', fontWeight: "bold", color: 'grey', margin: '1%' }}>
                        {cursos.descripcion}
                    </Text>
                </View>
            </View>

            <Text style={{ fontSize: width * 0.045, marginLeft: '5%', fontWeight: "bold", margin: '1%', marginTop: '4%', marginBottom: '4%' }}> Temas</Text>

            {
                temas.map(temas => {
                    return (
                        <View style={style.tablatemas} key={temas.idtema}>
                            <Image style={style.imgIcon2v1v}
                                source={require('../../../assets/icons8-play-button-circled-90.png')}
                            />
                            <Text style={{ fontSize: width * 0.035, width: '50%' }}>
                                {temas.tema}
                            </Text>
                            <Text style={{ fontSize: width * 0.035, fontWeight: 'bold', width: '15%' }}>
                                {temas.minutos} min
                            </Text>
                            <Text style={{ fontSize: width * 0.035, color: '#74c2d1', fontWeight: 'bold' }}> {temas.porcentaje}%</Text>
                        </View>
                    )
                })
            }


            <View style={style.boton}>
                <Button
                    color={"#5FAFB9"}
                    margin={'2%'}
                    title="Ganar Puntos"
                />
            </View>

        </View>


    );
}

const style = StyleSheet.create({

    fondo: {
        backgroundColor: 'white',
        height:height

    },

    fondo3: {
        width: width,
        height: width * 0.2,
        elevation: 10,
        backgroundColor: '#5FAFB9',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10
    },

    contenedorCaract: {
        flexDirection: 'row',
        margin: '3%'

    },



    caracte: {
        width: width * 0.35,
        height: width * 0.10,
        borderRadius: width * 0.25,
        flexDirection: "row"
    },
    iconCaracte: {
        //width: width * 0.10,
        //height: width * 0.15,
        width: width * 0.15,
        borderRadius: width * 0.5,
        //backgroundColor: 'red',
        marginTop: '8%',
        //borderRadius: width * 0.25,
        marginLeft: '10%',
        alignItems: 'center',
        justifyContent: 'center'

    },

    iconCaracte2: {
        height: '90%',
        //alignItems: 'left',
        marginLeft: '4%'

    },
    iconCaracte3: {
        width: '100%',
        //justifyContent: 'flex-end',
        //alignItems: 'flex-end',
        paddingLeft: '70%'
    },

    imgIcon2: {

        height: width * 0.15,
        width: width * 0.15,
        borderRadius: width * 0.5
    },

    imgIcon5: {
        height: width * 0.05,
        width: width * 0.05,
        alignSelf: 'flex-end'
    },
    imgIcon6: {

        height: width * 0.11,
        width: width * 0.11
    },
    imgIcon7Actual: {
        height: width * 0.15,
        width: width * 0.15,
        resizeMode: 'contain'
    },
    scrollStyle: {
        width: width,
        height: height * 0.9

    },

    iconCaracte5: {
        width: width * 0.55,
        //alignItems: 'left',
        marginLeft: '5%'

    },
    iconCaracte5v: {
        //height: width,
        marginTop: '6%',
        alignItems: 'center',
        //marginLeft: '2%'

    },
    imgIcon4: {
        height: width * 0.03,
        width: width * 0.03,
        resizeMode: 'stretch'
    },
    iconCaracte4: {

        alignItems: 'center',
        //justifyContent: 'center',
        top: '3%'
    },
    imgIcon2v: {

        height: width * 0.8,
        width: width * 0.8,
        resizeMode: 'stretch',
        borderRadius: 50
    },
    fondo6: {
        position: 'relative',
        width: width * 0.9,
        height: height * 0.12,
        elevation: 5,
        marginTop: '5%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignSelf: 'center',
        marginBottom: '1%'
    },
    boton: {
        marginLeft: '10%',
        marginRight: '10%',
        padding: 20,
        borderRadius: 10,
        marginBottom: '5%',
        marginTop: '5%'
    },
    imgIcon2v1: {
        marginLeft: '7%',
        height: width * 0.055,
        width: width * 0.055,
        resizeMode: 'stretch',
        marginRight: '3%'
    },
    tablatemas: {
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 0.4,
        width: width * 0.85,
        alignSelf: 'center',
        borderColor: 'grey',
        height: height * 0.045,
        alignItems: 'center',
        margin: '2%'
    },
    imgIcon2v1v: {
        marginLeft: '7%',
        height: width * 0.07,
        width: width * 0.07,
        resizeMode: 'stretch',
        marginRight: '3%'
    }

});