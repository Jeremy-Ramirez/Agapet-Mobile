import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
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
  ImageBackground,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { BottomNotification } from "./BottomNotification";
import { BottomPopup } from "./BottomPopup";
import { PetContext } from "../../context/PetContext";
import { BottomPet } from "./BottomPet";
import { caminocompleto } from "../../../assets/caminocompleto.png";

const popupList = [
  {
    id: 1,
    name: "Task",
  },
  {
    id: 2,
    name: "Message",
  },
  {
    id: 3,
    name: "Note",
  },
];

const { height, width } = Dimensions.get("window");

var FONT_BACK_LABEL = 18;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}

export const Timeline = () => {

  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };
  const onClosePopup = () => {
    popupRef.close();
  };

  let popupRef2 = React.createRef();

  const onShowPopup2 = () => {
    popupRef2.show();
  };
  const onClosePopup2 = () => {
    popupRef2.close();
  };

  let popupRef3 = React.createRef();
  const onShowPopup3 = () => {
    popupRef3.show();
  };
  const onClosePopup3 = () => {
    popupRef3.close();
  };

  let popupRef4 = React.createRef();
  const onShowPopup4 = () => {
    popupRef4.show();
  };
  const onClosePopup4 = () => {
    popupRef4.close();
  };

  let popupRef5 = React.createRef();
  const onShowPopup5 = () => {
    popupRef5.show();
  };
  const onClosePopup5 = () => {
    popupRef5.close();
  };

  let popupRef6 = React.createRef();
  const onShowPopup6 = () => {
    popupRef6.show();
  };
  const onClosePopup6 = () => {
    popupRef6.close();
  };

  let popupRef7 = React.createRef();
  const onShowPopup7 = () => {
    popupRef7.show();
  };
  const onClosePopup7 = () => {
    popupRef7.close();
  };

  let popupRef8 = React.createRef();
  const onShowPopup8 = () => {
    popupRef8.show();
  };
  const onClosePopup8 = () => {
    popupRef8.close();
  };

  const { userInfo, logout } = useContext(AuthContext);
  const { pet } = PetContext();
  const [image, setImage] = useState(`../../../assets/caminocompleto.png`);

  const [isLoading, setisLoading] = useState(true);
  const [fases, setFases] = useState([]);

  const [fasesTimeline, setfasesTimeline] = useState([]);

  /* 
    const getFases = () => {
        const url = 'http://192.168.200.4:8000/user/data';
        axios.get(url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userInfo.access
                },
            }).then(res => {
                // *********************
                axios.get(`http://192.168.200.4:8000/timeline/fases?iduser=${res.data.iduser}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }).then(res => {
                        setisLoading(false);
                        let data = res.data
                        setFases(data)
                    }).catch(e => {
                        console.log(`data error ${e}`);
                    });
                // *********************
            }).catch(e => {
                console.log(`data error ${e}`);
            });
    };*/

  const getFases = async () => {
    try {
      const resp = await axios.get(
        `http://192.168.200.4:8000/timeline/adoptante/${userInfo.idAdoptante}`
      );
      //console.log(resp.data[0].fases);
      setfasesTimeline(resp.data[0].fases); //[{},{},{}]
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFases();
  }, []);
  const navigation = useNavigation();

  //colores e imagenes
  let path = require("../../../assets/caminocompleto.png");
  let colorFormulario = "grey";
  let colorEntrevista = "grey";
  let colorVisita = "grey";
  let colorContrato = "grey";
  let colorEntrega = "grey";
  let colorSeguimiento = "grey";

  /*ADAPTACION JERE*/

  let Formulario = fasesTimeline.filter((e) => e.fase.nombre == "Formulario"); //[{}]
  let Entrevista = fasesTimeline.filter(
    (e) => e.fase.nombre == "Entrevista por whatsapp"
  );
  let Visita = fasesTimeline.filter(
    (e) => e.fase.nombre == "Visita al domicilio"
  );
  let FirmaContrato = fasesTimeline.filter(
    (e) => e.fase.nombre == "Firma de contrato"
  );
  let Entrega = fasesTimeline.filter((e) => e.fase.nombre == "Entrega");
  let Seguimiento = fasesTimeline.filter((e) => e.fase.nombre == "Seguimiento");

  console.log(Formulario[0]);
  console.log(Formulario[0]?.fase.descripcion);
 

  Formulario.forEach((e) => {
    if (e.estado == "A") {
      path = require("../../../assets/caminofase1aceptado.png");
      colorFormulario = "gold";
    } else if (e.estado == "S") {
      path = require("../../../assets/caminofase1noaceptado.png");
      colorFormulario = "red";
    }
  });

  Entrevista.forEach((e) => {
    if (e.estado == "A") {
      path = require("../../../assets/caminofase2aceptado.png");
      colorEntrevista = "gold";
    } else if (e.estado == "S") {
      path = require("../../../assets/caminofase2noaceptado.png");
      colorEntrevista = "red";
    }
  });
  Visita.forEach((e) => {
    if (e.estado == "A") {
      path = require("../../../assets/caminofase3aceptado.png");
      colorVisita = "gold";
    } else if (e.estado == "S") {
      path = require("../../../assets/caminofase3noaceptado.png");
      colorVisita = "red";
    }
  });

  FirmaContrato.forEach((e) => {
    if (e.estado == "A") {
      path = require("../../../assets/caminofase4aceptado.png");
      colorContrato = "gold";
    } else if (e.estado == "S") {
      path = require("../../../assets/caminofase4noaceptado.png");
      colorContrato = "red";
    }
  });
  Entrega.forEach((e) => {
    if (e.estado == "A") {
      path = require("../../../assets/caminofase5aceptado.png");
      colorEntrega = "gold";
    } else if (e.estado == "S") {
      path = require("../../../assets/caminofase5noaceptado.png");
      colorEntrega = "red";
    }
  });
  Seguimiento.forEach((e) => {
    if (e.estado == "A") {
      path = require("../../../assets/caminofase6aceptado.png");
      colorSeguimiento = "gold";
    } else if (e.estado == "S") {
      path = require("../../../assets/caminofase6noaceptado.png");
      colorSeguimiento = "red";
    }
  });





  const [refresh, setrefresh] = useState(false);
  const pullMe = async () => {
    setrefresh(true);
    const resp = await axios.get(
      `http://192.168.200.4:8000/timeline/adoptante/${userInfo.idAdoptante}`
    );
    setfasesTimeline(resp.data[0].fases); 
    setTimeout(() => {
      setrefresh(false);
    }, 1000);
  };

  return (
    <View style={style.fondo}>
      <View style={style.fondo3}>
        <View style={style.contenedorCaract}>
          <View style={style.caracte}>
            <View style={style.iconCaracte}>
              <TouchableOpacity onPress={() => navigation.navigate("Pet")}>
                <Image
                  style={style.imgIcon2}
                  source={{ uri: `${pet.image64}` }}
                />
              </TouchableOpacity>
            </View>

            <View style={style.iconCaracte2}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: width * 0.038,
                  color: "white",
                }}
              >
                {" "}
                ¡Hola {pet.nombre}!
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: "2%",
                  marginTop: "2%",
                }}
              >
                <Image
                  style={style.imgIcon5}
                  source={require("../../../assets/coin.png")}
                />
                <Text
                  style={{
                    fontSize: width * 0.03,
                    marginTop: "2%",
                    marginBottom: "2%",
                    color: "yellow",
                  }}
                >
                  {" "}
                  100 puntos
                </Text>
              </View>
            </View>
            <View style={style.iconCaracte3}>
              <StatusBar barStyle="dark-content"></StatusBar>
              <SafeAreaView style={style.container2}>
                <TouchableWithoutFeedback onPress={onShowPopup7}>
                  <Image
                    style={style.imgIcon6}
                    source={require("../../../assets/notificacion.png")}
                  />
                </TouchableWithoutFeedback>
              </SafeAreaView>
              <BottomNotification
                title="¡Felicitaciones!"
                estado="No iniciado"
                ref={(target) => (popupRef7 = target)}
                onTouchOutside={onClosePopup7}
                data={popupList}
              />
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={style.scrollStyle}  refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }>
        {/*BackGround*/}
        <ImageBackground style={style.imgFondo} source={path}>
          <View style={{ width: "100%", marginTop: "6%" }}>
            <View style={style.iconCaracte5d}>
              <StatusBar barStyle="dark-content"></StatusBar>
              <SafeAreaView style={style.container2}>
                <TouchableWithoutFeedback onPress={onShowPopup6}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ justifyContent: "center" }}>
                      <Image
                        style={style.imgIcon7}
                        source={require("../../../assets/perro.png")}
                      />
                    </View>
                    <Icon
                      size={width * 0.05}
                      name="arrow-left-bold"
                      color={colorSeguimiento}
                    />
                    <Text
                      style={{
                        color: colorSeguimiento,
                        fontSize: width * 0.035,
                        marginBottom: "1%",
                      }}
                    >
                      {" "}
                      Seguimiento
                    </Text>

                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "flex-end",
                        paddingLeft: width * 0.1,
                      }}
                    >
                      {Seguimiento.map((Seguimiento) => {
                        if (Seguimiento.estado == "A") {
                          return (
                            <Image
                              style={style.imgIcon4}
                              key={Seguimiento.id}
                              source={require("../../../assets/check.png")}
                            />
                          );
                        }
                      })}
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </SafeAreaView>
              {Seguimiento.map((Seguimiento) => {
                return (
                  <BottomPopup
                    key={Seguimiento.id}
                    title="Seguimiento"
                    estado={Seguimiento.estado}
                    descripcion={Seguimiento[0]?.fase.descripcion}
                    src={require("../../../assets/perro.png")}
                    ref={(target) => (popupRef6 = target)}
                    onTouchOutside={onClosePopup6}
                    data={popupList}
                  />
                );
              })}
            </View>

            {/*Entrega Mascota*/}
            <View style={style.iconCaracte5i22}>
              <StatusBar barStyle="dark-content"></StatusBar>
              <SafeAreaView style={style.container2}>
                <TouchableWithoutFeedback onPress={onShowPopup5}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: colorEntrega,
                        fontSize: width * 0.035,
                        marginBottom: "1%",
                      }}
                    >
                      {" "}
                      Entrega de mascota
                    </Text>
                    <Icon
                      size={width * 0.05}
                      name="arrow-right-bold"
                      color={colorEntrega}
                    />
                    <View style={{ justifyContent: "center" }}>
                      <Image
                        style={style.imgIcon7}
                        source={require("../../../assets/gatito.png")}
                      />
                    </View>
                    <View
                      style={{ position: "absolute", alignSelf: "flex-end" }}
                    >
                      {Entrega.map((Entrega) => {
                        if (Entrega.estado == "A") {
                          return (
                            <Image
                              style={style.imgIcon4}
                              key={Entrega.id}
                              source={require("../../../assets/check.png")}
                            />
                          );
                        }
                      })}
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </SafeAreaView>
              {Entrega.map((Entrega) => {
                return (
                  <BottomPopup
                    key={Entrega.id}
                    title="Entrega de mascota"
                    estado={Entrega.estado}
                    descripcion={Entrega[0]?.fase.descripcion}
                    src={require("../../../assets/gatito.png")}
                    ref={(target) => (popupRef5 = target)}
                    onTouchOutside={onClosePopup5}
                    data={popupList}
                  />
                );
              })}
            </View>

            {/*Firma de contrato*/}
            <View style={style.iconCaracte5d}>
              <StatusBar barStyle="dark-content"></StatusBar>
              <SafeAreaView style={style.container2}>
                <TouchableWithoutFeedback onPress={onShowPopup4}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ justifyContent: "center" }}>
                      <Image
                        style={style.imgIcon7}
                        source={require("../../../assets/acuerdo.png")}
                      />
                    </View>
                    <Icon
                      size={width * 0.05}
                      name="arrow-left-bold"
                      color={colorContrato}
                    />
                    <Text
                      style={{
                        color: colorContrato,
                        fontSize: width * 0.035,
                        marginBottom: "1%",
                      }}
                    >
                      {" "}
                      Firma de contrato
                    </Text>
                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "flex-end",
                        paddingLeft: width * 0.1,
                      }}
                    >
                      {FirmaContrato.map((Contrato) => {
                        if (Contrato.estado == "A") {
                          return (
                            <Image
                              style={style.imgIcon4}
                              key={Contrato.id}
                              source={require("../../../assets/check.png")}
                            />
                          );
                        }
                      })}
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </SafeAreaView>
              {FirmaContrato.map((Contrato) => {
                return (
                  <BottomPopup
                    key={Contrato.id}
                    title="Firma de contrato"
                    estado={Contrato.estado}
                    descripcion={FirmaContrato[0]?.fase.descripcion}
                    src={require("../../../assets/acuerdo.png")}
                    ref={(target) => (popupRef4 = target)}
                    onTouchOutside={onClosePopup4}
                    data={popupList}
                  />
                );
              })}
            </View>

            {/*Visita de domicilio */}
            <View style={style.iconCaracte5i2}>
              <StatusBar barStyle="dark-content"></StatusBar>
              <SafeAreaView style={style.container2}>
                <TouchableWithoutFeedback onPress={onShowPopup3}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: colorVisita,
                        fontSize: width * 0.035,
                        marginBottom: "1%",
                      }}
                    >
                      {" "}
                      Visita a domicilio
                    </Text>
                    <Icon
                      size={width * 0.05}
                      name="arrow-right-bold"
                      color={colorVisita}
                    />
                    <View style={{ justifyContent: "center" }}>
                      <Image
                        style={style.imgIcon7}
                        source={require("../../../assets/casa.png")}
                      />
                    </View>
                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "flex-end",
                        paddingLeft: width * 0.23,
                      }}
                    >
                      {Visita.map((Visita) => {
                        if (Visita.estado == "A") {
                          return (
                            <Image
                              style={style.imgIcon4}
                              key={Visita.id}
                              source={require("../../../assets/check.png")}
                            />
                          );
                        }
                      })}
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </SafeAreaView>
              {Visita.map((Visita) => {
                return (
                  <BottomPopup
                    key={Visita.id}
                    title="Visita a domicilio"
                    estado={Visita.estado}
                    descripcion={Visita[0]?.fase.descripcion}
                    ref={(target) => (popupRef3 = target)}
                    src={require("../../../assets/casa.png")}
                    onTouchOutside={onClosePopup3}
                    data={popupList}
                  />
                );
              })}
            </View>

            {/**Entrevista de whastapp */}
            <View style={style.iconCaracte5d}>
              <StatusBar barStyle="dark-content"></StatusBar>
              <SafeAreaView style={style.container2}>
                <TouchableWithoutFeedback onPress={onShowPopup2}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ justifyContent: "center" }}>
                      <Image
                        style={style.imgIcon7}
                        source={require("../../../assets/chat.png")}
                      />
                    </View>
                    <Icon
                      size={width * 0.05}
                      name="arrow-left-bold"
                      color={colorEntrevista}
                    />
                    <Text
                      style={{
                        color: colorEntrevista,
                        fontSize: width * 0.035,
                        marginBottom: "1%",
                      }}
                    >
                      {" "}
                      Entrevista WhatsApp
                    </Text>

                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "flex-end",
                        paddingLeft: width * 0.1,
                      }}
                    >
                      {Entrevista.map((entrevista) => {
                        if (entrevista.estado == "A") {
                          return (
                            <Image
                              style={style.imgIcon4}
                              key={entrevista.id}
                              source={require("../../../assets/check.png")}
                            />
                          );
                        }
                      })}
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </SafeAreaView>

              {Entrevista.map((entrevista) => {
                return (
                  <BottomPopup
                    key={entrevista.id}
                    title="Entrevista WhatsApp"
                    estado={entrevista.estado}
                    descripcion={Entrevista[0]?.fase.descripcion}
                    src={require("../../../assets/chat.png")}
                    ref={(target) => (popupRef2 = target)}
                    //ref={popupRef2}
                    onTouchOutside={onClosePopup2}
                    data={popupList}
                  />
                );
              })}
            </View>
            {/*Formulario*/}
            <View style={style.iconCaracte5i}>
              <SafeAreaView style={style.container2}>
                <TouchableWithoutFeedback onPress={onShowPopup}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: colorFormulario,
                        fontSize: width * 0.035,
                        marginBottom: "1%",
                      }}
                    >
                      {" "}
                      Formulario
                    </Text>
                    <Icon
                      size={width * 0.05}
                      name="arrow-right-bold"
                      color={colorFormulario}
                    />
                    <View style={{ justifyContent: "center" }}>
                      <Image
                        style={style.imgIcon7}
                        source={require("../../../assets/formulario-de-consentimiento-del-donante.png")}
                      />
                    </View>
                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "flex-end",
                        paddingLeft: width * 0.23,
                      }}
                    >
                      {Formulario.map((formulario) => {
                        if (formulario.estado == "A") {
                          return (
                            <Image
                              style={style.imgIcon4}
                              key={formulario.id}
                              source={require("../../../assets/check.png")}
                            />
                          );
                        }
                      })}
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </SafeAreaView>
              {Formulario.map((formulario) => {
                return (
                  <BottomPopup
                    key={formulario.id}
                    title="Formulario"
                    estado={formulario.estado}
                    descripcion={Formulario[0]?.fase.descripcion}
                    src={require("../../../assets/formulario-de-consentimiento-del-donante.png")}
                    ref={(target) => (popupRef = target)}
                    //ref={popupRef}
                    onTouchOutside={onClosePopup}
                    //data={popupList}
                  />
                );
              })}
            </View>
          </View>
        </ImageBackground>
        <View style={{ height: height * 0.07 }}></View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  sesion: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    margin: 5,
  },
  titulo: {
    color: "black",
    fontWeight: "bold",
    fontSize: width * 0.07,
    marginTop: "6%",
  },
  titulo2: {
    color: "black",
    fontWeight: "bold",
    fontSize: width * 0.04,
    marginTop: "6%",
  },
  estadoMascota: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 13,
    margin: 5,
  },
  descripcionMascota: {
    margin: 5,
  },
  fondo: {
    backgroundColor: "white",
  },
  fondo2: {
    backgroundColor: "#fff",
    width: "100%",
    height: "20%",
    overflow: "hidden",
    justifyContent: "center",
    position: "relative",
    top: -170,
  },
  fondo3: {
    width: width,
    height: width * 0.2,
    elevation: 10,
    backgroundColor: "#5FAFB9",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  fondo4: {
    position: "relative",
    width: width * 0.85,
    height: width * 0.35,
    elevation: 5,
    marginTop: "10%",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  fondo5: {
    marginLeft: "0.5%",
  },
  fondo6: {
    position: "relative",
    width: width * 0.85,
    height: width * 0.35,
    elevation: 5,
    marginTop: "5%",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  contenedorCaract: {
    flexDirection: "row",
    margin: "3%",
  },

  image: {
    width: 400,
    height: 400,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    overflow: "hidden",
    top: 0,
    marginBottom: "10%",
  },
  image2: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: "2%",
    marginBottom: "2%",
  },
  input: {
    height: 45,
    margin: 10,
    marginLeft: "10%",
    marginRight: "10%",
    borderWidth: 1,
    fontSize: width * 0.05,
    borderRadius: 12,
    color: "grey",
    borderColor: "grey",
  },
  boton: {
    marginLeft: "20%",
    marginRight: "20%",
    padding: 20,
    borderRadius: 10,
    marginTop: "2%",
  },
  img: {
    width: "5%",
    height: "5%",
    overflow: "hidden",
  },
  contimg: {
    width: 50,
    height: 50,
  },
  contimg2: {
    width: 50,
    height: 50,
    top: 100,
    left: 100,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10%",
    marginTop: "10%",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "3%",
    marginTop: "3%",
  },
  inputs: {
    marginBottom: "5%",
  },
  backgroundContainer: {
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
  },
  containerCarac: {
    margin: "3%",
    backgroundColor: "#F6F3F4",
    borderRadius: 10,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  imgIcon: {
    padding: 10,
    marginTop: 8,
    height: 15,
    width: 15,
    resizeMode: "stretch",
  },
  editContenedor: {
    position: "absolute",
    top: 2,
    left: 260,
  },
  caracte: {
    width: width * 0.35,
    height: width * 0.1,
    borderRadius: width * 0.25,
    flexDirection: "row",
  },
  iconCaracte: {
    //width: width * 0.10,
    //height: width * 0.15,
    width: width * 0.15,
    borderRadius: width * 0.5,
    marginTop: "8%",
    //borderRadius: width * 0.25,
    marginLeft: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCaracte4: {
    backgroundColor: "#5FAFB9",
    width: width * 0.1,
    borderRadius: width * 0.25,
    alignItems: "center",
    justifyContent: "center",
    top: "20%",
  },
  iconCaracte2: {
    height: "90%",
    //alignItems: 'left',
    marginLeft: "4%",
  },
  iconCaracte3: {
    width: "100%",
    //justifyContent: 'flex-end',
    //alignItems: 'flex-end',
    paddingLeft: "70%",
  },
  iconCaracte5d: {
    width: "90%",
    margin: "9%",
    paddingLeft: "9%",
  },
  iconCaracte5i: {
    width: "90%",
    margin: "9%",
    paddingLeft: "36%",
  },
  iconCaracte5i2: {
    width: "90%",
    margin: "9%",
    paddingLeft: "25%",
  },
  iconCaracte5i22: {
    width: "90%",
    margin: "9%",
    paddingLeft: "20%",
  },
  iconCaracte6: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    top: "45%",
  },
  imgIcon2: {
    height: width * 0.15,
    width: width * 0.15,
    borderRadius: width * 0.5,
  },
  imgIcon3: {
    padding: 10,
    height: 40,
    width: 40,
    resizeMode: "stretch",
  },
  imgIcon4: {
    height: width * 0.06,
    width: width * 0.06,
    resizeMode: "stretch",
    opacity: 0.9,
  },
  imgIconActual: {
    height: width * 0.06,
    width: width * 0.06,
    resizeMode: "stretch",
  },
  iconCaracte7: {
    backgroundColor: "green",
    width: width * 0.05,
    borderRadius: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    top: "20%",
  },
  imgIcon5: {
    height: width * 0.05,
    width: width * 0.05,
    alignSelf: "flex-end",
  },
  imgIcon6: {
    height: width * 0.11,
    width: width * 0.11,
  },
  imgIcon7: {
    height: width * 0.15,
    width: width * 0.15,
    resizeMode: "contain",
    opacity: 0.6,
  },
  imgIcon7Actual: {
    height: width * 0.15,
    width: width * 0.15,
    resizeMode: "contain",
  },
  scrollStyle: {
    width: width,
    height: height * 0.9,
  },
  imgFondo: {
    marginTop: "1%",
    width: width,
    height: height,
  },
  container2: {
    width: "90%",
    //height: '50%'
  },
  txtSize: {
    fontSize: 20,
  },
});


/*
                        <View style={style.iconCaracte}>
                            <SafeAreaView style={style.container2}>
                                <TouchableWithoutFeedback onPress={onShowPopup8}>
                                    <Image style={style.imgIcon2}
                                        source={{ uri: `http://192.168.200.4:8000/${pet.image}` }}
                                    />
                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomPet
                                title='Chester'
                                estado='Adoptado'
                                ref={(target) => popupRef8 = target}
                                onTouchOutside={onClosePopup8}
                                data={popupList}
                            />

                        </View>
                        */


/*



    let tipoFormulario = fases.filter(e => e.tipo == 'F'); //[{}] parto cada objeto segun su tipo
    let tipoEntrevista = fases.filter(e => e.tipo == 'W');
    let tipoVisita = fases.filter(e => e.tipo == 'V');
    let tipoContrato = fases.filter(e => e.tipo == 'C');
    let tipoEntrega = fases.filter(e => e.tipo == 'E');//['entrevista' ,'estado']
    let tipoSeguimiento = fases.filter(e => e.tipo == 'S');





    tipoFormulario.forEach(e => {
        if (e.estado == 'A') {
            path = require('../../../assets/caminofase1aceptado.png');
            colorFormulario = 'gold';
        } else if (e.estado == 'S') {
            path = require('../../../assets/caminofase1noaceptado.png');
            colorFormulario = 'red';
        }
    })


    tipoEntrevista.forEach(e => {
        if (e.estado == 'A') {
            path = require('../../../assets/caminofase2aceptado.png');
            colorEntrevista = 'gold';
        } else if (e.estado == 'S') {
            path = require('../../../assets/caminofase2noaceptado.png');
            colorEntrevista = 'red';
        }
    })
    tipoVisita.forEach(e => {
        if (e.estado == 'A') {
            path = require('../../../assets/caminofase3aceptado.png');
            colorVisita = 'gold';
        } else if (e.estado == 'S') {
            path = require('../../../assets/caminofase3noaceptado.png');
            colorVisita = 'red';
        }
    })
    tipoContrato.forEach(e => {
        if (e.estado == 'A') {
            path = require('../../../assets/caminofase4aceptado.png');
            colorContrato = 'gold';
        } else if (e.estado == 'S') {
            path = require('../../../assets/caminofase4noaceptado.png');
            colorContrato = 'red';
        }
    })
    tipoEntrega.forEach(e => {
        if (e.estado == 'A') {
            path = require('../../../assets/caminofase5aceptado.png');
            colorEntrega = 'gold';
        } else if (e.estado == 'S') {
            path = require('../../../assets/caminofase5noaceptado.png');
            colorEntrega = 'red';
        }
    })
    tipoSeguimiento.forEach(e => {
        if (e.estado == 'A') {
            path = require('../../../assets/caminofase6aceptado.png');
            colorSeguimiento = 'gold';
        } else if (e.estado == 'S') {
            path = require('../../../assets/caminofase6noaceptado.png');
            colorSeguimiento = 'red';
        }
    })
*/
/* {
                                tipoFormulario.map((formulario) => {
                                    return (
                                        <BottomPopup
                                            key={formulario.idtimline}
                                            title='Formulario'
                                            estado={formulario.estado}
                                            src={require('../../../assets/formulario-de-consentimiento-del-donante.png')}
                                            ref={(target) => popupRef = target}
                                            onTouchOutside={onClosePopup}
                                            data={popupList}
                                        />
                                    )
                                })
                            } */

/* {
                                                tipoEntrevista.map((entrevista) => {
                                                    if (entrevista.estado == 'A') {
                                                        return (
                                                            <Image style={style.imgIcon4}
                                                                key={entrevista.idtimline}
                                                                source={require('../../../assets/check.png')}
                                                            />
                                                        )
                                                    }
                                                })

                                            } */
