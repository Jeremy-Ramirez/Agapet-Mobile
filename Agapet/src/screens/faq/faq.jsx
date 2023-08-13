import React, { Component, useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ImageBackground,
    FlatList,
    Image,
    ScrollView,
    Button,
    TouchableOpacity,
    TextInput
} from 'react-native';
import AccordionItem from '../../components/AccordionItem'
import Searchbar from '../../components/Searchbar.js'


const { height, width } = Dimensions.get('window');


export const Faq = () => {

    const [faq, setFaq] = useState([]);
    const [tema, setTema] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }


    //solo poner los datos en data y se generan solo los contenedores de las preguntas
    const data = [
        {
            id: 0,
            title: 'Pregunta',
            body: 'Respuesta de laa pregunta'
        },
        {
            id: 1,
            title: 'Pregunta 1',
            body: 'Respuesta de laa pregunta 1'
        },
        {
            id: 2,
            title: '¿ADJKSFKSAFNDSJFNJDSNFJDNFKJSDNF KSFNJKJSJNFKER?',
            body: 'Respuesta de laa pregunta 2'
        }
    ];

    const getFaq = () => {
        const url = 'http://192.168.200.4:8000/faq/faq/tema';
        axios.get(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => {
                setisLoading(false);
                let data = res.data
                setFaq(data);
            }).catch(e => {
                console.log(`data error ${e}`);
            });
    };

    const getTema = () => {
        const url = 'http://192.168.200.4:8000/faq/tema';
        axios.get(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => {
                let data = res.data
                setTema(data);
            }).catch(e => {
                console.log(`data error ${e}`);
            });
    };

    renderTitle = () => {
        return (
            <View><Text style={style.titulo}>Top Questions</Text></View>
        )
    }

    useEffect(() => {
        getFaq();
        getTema();
    }, [])

    let Allcategory = ['All', ...new Set(tema.map(c => c.temaid))]
    let Information = [...new Set(faq.map(c => c))]

    //cuidado se dana
    const filterFaq = (category) => {
        Information = faq.filter(c => c.temaid === category)
        setFaq(Information)
    }
    const filter = (category) => {
        if (category === 'All') {
            Information = faq.filter(c => c)
        } else if (category === '1') {
            setFaq(filterFaq(1))
        }
        setTipo(0);
        setTema2(category);
        preguntas();
    }
    /* ************************ */

    const [texto, setTexto] = useState('');
    const [tema2, setTema2] = useState('');
    const [tipo, setTipo] = useState('');

    const handleTextoChange = (text) => {
        setTipo(1);
        setTexto(text);
        preguntas(text);
        //console.log(text);
    };

    function preguntas(buscador) {

        if ((buscador == '' && tipo == 1) || (tema2 == 'All' && tipo == 0)) {
            return (
                <FlatList
                    data={Information}
                    keyExtractor={(item) => item.faqid.toString()}
                    renderItem={({ item }) => (
                        <AccordionItem title={item.pregunta} bodyText={item.respuesta} />
                    )}
                />
            )
        } else {
            let fil = [];
            if (tipo == 1) {
                fil = [...new Set(faq.filter(c => (c.pregunta.toUpperCase()).includes(texto.toUpperCase())))];

            } else {
                fil = [...new Set(faq.filter(c => (c.temaid.toString()).includes(tema2)))];
            }

            return (
                <FlatList
                    data={fil}
                    keyExtractor={(item) => item.faqid.toString()}
                    renderItem={({ item }) => (
                        <AccordionItem title={item.pregunta} bodyText={item.respuesta} />
                    )}
                />
            );
        }

    }



    return (
        <View style={style.fondo}>

            <ImageBackground style={style.imgFondo} source={require('../../../assets/faq.jpg')} >


            </ImageBackground>

            {/*<View style={{ marginTop: width * 0.05, marginBottom: width * 0.06, width: width * 0.75, height: width * 0.12, borderRadius: 10, borderColor: 'grey', borderWidth: 1 }}>
                <Image
                    source={require('../../../assets/ic_back.png')} />
                <TextInput value={texto} onChangeText={handleTextoChange}  ></TextInput>
            </View>*/}

            <ImageBackground source={require('../../../assets/huellasfaq.jpg')} style={{alignItems :'center', height:height*0.8, width:width}}>
                <View style={style.buscador}>
                    <View style={styles.container}>
                        <View style={styles.searchContainer}>
                            <View style={styles.vwSearch}>
                                <Image
                                    style={styles.icSearch}
                                    source={require('../../../assets/ic_search.png')} />
                            </View>

                            <TextInput
                                value={texto}
                                placeholder="Search"
                                style={styles.textInput}
                                onChangeText={handleTextoChange}
                            ></TextInput>
                            {
                                /*texto ?
                                    <TouchableOpacity
                                        onPress={() => {
    
                                            setTexto('');
                                        }}
                                        style={styles.vwClear}>
                                        <Image
                                            style={styles.icClear}
                                            source={require('../../../assets/ic_clear.png')} />
                                    </TouchableOpacity>
                                    : <View style={styles.vwClear} />*/
                            }

                        </View>

                    </View >
                </View>

                <Text style={style.titulo}>Top Questions</Text>
                <View style={{
                    flexDirection: "row", marginTop: width * 0.045, marginBottom: width * 0.045
                }}>
                    {
                        Allcategory.map(c => (
                            <TouchableOpacity
                                onPress={() => filter(c)} //cuidado con el onpres
                                key={c}

                            >
                                <Text style={style.tituloSelec} >{c}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>


                <View style={style.backgroundContainer}>
                    <SafeAreaView>

                        <View >
                            {
                                preguntas(texto)
                            }

                        </View>
                    </SafeAreaView>
                </View>
                </ImageBackground>

        </View>
        
    );
}

const style = StyleSheet.create({
    titulo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: width * 0.045,
        alignSelf: 'flex-start',
        marginLeft: '4%'
    },
    titulo2: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: width * 0.035,
        alignSelf: 'flex-start',
        marginLeft: '4%',
        backgroundColor: '#F7E6D5',
        borderRadius: width * 0.03,
    },
    titulo3: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: width * 0.04,
        alignSelf: 'flex-start',
        marginLeft: '4%',
        backgroundColor: '#B900FF',
        borderRadius: width * 0.02,
        height: width * 0.07,
        width: width * 0.1,
        textAlign: 'center'
    },
    tituloSelec: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: width * 0.04,
        alignSelf: 'flex-start',
        marginLeft: '4%',
        backgroundColor: '#FFFAEE',
        borderRadius: width * 0.02,
        height: width * 0.07,
        width: width * 0.1,
        textAlign: 'center'
    },
    fondo: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: height
    },
    backgroundContainer: {

        bottom: 0,
        left: 0,
        right: 0
    },
    imgFondo: {
        width: width,
        height: height * 0.25
    },
    buscador: {
        backgroundColor: '#f5f5f5',
        alignSelf: 'center',
        margin: '2%',
        width: width * 0.9,
        height: width * 0.12,
        borderRadius: 10,
        borderColor: 'grey',
        paddingTop: '3%'
    }
});

const styles = StyleSheet.create({
    txtError: {
        marginTop: '2%',
        width: '89%',
        color: 'white',

    },
    vwClear: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        // backgroundColor: 'green',
        flex: 1,
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'red'
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {
        //backgroundColor: 'white',
        //width: '90%',
        //height: 40,
        flexDirection: 'row'
    },
    container: {
        height: 80,
        alignItems: 'center',
        // height: '100%', width: '100%' 
    },
});





