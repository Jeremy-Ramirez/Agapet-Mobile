import React from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  PixelRatio,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { PetContext } from "../../context/PetContext";
import { BottomHistorial } from "../modals/BottomHistorial";
import { BottomHistorialAdd } from "../modals/BottomHistorialAdd";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
var FONT_BACK_LABEL = 18;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}

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

export const Clinic = () => {
  const { pet, clinic, isLoading } = PetContext();
  const navigation = useNavigation();
  let fecha_hoy = new Date();

  const compararFechas = (fecha) => {
    let fecha_actual = new Date();
    let mi_fecha = new Date(fecha); //obtengo la fecha de la vacunacion
    if (fecha_actual > mi_fecha) return true;
    else if (fecha_actual < mi_fecha) return false;
  };

  const comprobarEstado = (estado) => {
    if (estado == "S") return true; //disponible
    else return false;
  };

  //compararFechas("2023-01-1");

  function vacunasHistorial(
    titulo,
    fecha,
    clinica,
    llave,
    descripcion,
    imagen
  ) {
    let popupRef = React.createRef();
    const onShowPopup = () => {
      popupRef.show();
    };
    const onClosePopup = () => {
      popupRef.close();
    };

    return (
      <View style={style.contenedorCaract} key={llave}>
        <View style={style.caracte}>
          <View style={style.iconCaracte4}>
            <Image
              style={style.imgIcon2}
              source={require("../../../assets/vacuna.png")}
            />
          </View>
          <View style={style.iconCaracte5}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: width * 0.035,
                  margin: "1%",
                }}
              >
                {" "}
                {titulo}
              </Text>
              <View style={{ justifyContent: "center" }}>
                {compararFechas(fecha) ? (
                  <Image
                    style={style.imgIcon4}
                    source={require("../../../assets/check.png")}
                  />
                ) : (
                  <Image
                    style={style.imgIcon4}
                    source={require("../../../assets/check.png")}
                  />
                )}
              </View>
            </View>
            <Text style={{ fontSize: width * 0.03, margin: "1%" }}>
              {" "}
              Fecha: {fecha}
            </Text>
            <Text style={{ fontSize: width * 0.03, margin: "1%" }}>
              {" "}
              Lugar: {clinica}
            </Text>
          </View>
          <View style={style.iconCaracte6}>
            <StatusBar barStyle="dark-content"></StatusBar>
            <SafeAreaView>
              <TouchableWithoutFeedback onPress={onShowPopup}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "blue",
                    fontSize: width * 0.03,
                  }}
                >
                  {" "}
                  Ver más
                </Text>
              </TouchableWithoutFeedback>
            </SafeAreaView>
            {compararFechas(fecha) ? (
              <BottomHistorial
                title={titulo}
                estado="Adoptado"
                verificado={require("../../../assets/nocheck.png")}
                src={require("../../../assets/vacuna.png")}
                desp={descripcion}
                lugar={clinica}
                fecha={fecha}
                imagen={imagen}
                ref={(target) => (popupRef = target)}
                onTouchOutside={onClosePopup}
              />
            ) : (
              <BottomHistorial
                title={titulo}
                estado="Adoptado"
                verificado={require("../../../assets/check.png")}
                src={require("../../../assets/vacuna.png")}
                fecha={fecha}
                desp={descripcion}
                lugar={clinica}
                imagen={imagen}
                ref={(target) => (popupRef = target)}
                onTouchOutside={onClosePopup}
              />
            )}
          </View>
        </View>
      </View>
    );
  }

  function vacunasCaducadas(
    vacuna,
    fecha,
    vacuna_id,
    descripcion,
    lugar,
    pet,
    animal,
    user,
    vacunadatos
  ) {
    let popupRef = React.createRef();
    const onShowPopup = () => {
      popupRef.show();
    };
    const onClosePopup = () => {
      popupRef.close();
    };

    return (
      <View style={style.fondo3} key={vacuna_id}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={onShowPopup}>
            <View style={style.contenedorCaract}>
              <View style={style.caracte}>
                <View style={style.iconCaracte}>
                  <Image
                    style={style.imgIcon2}
                    source={require("../../../assets/alerta.png")}
                  />
                </View>
                <View style={style.iconCaracte2}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: width * 0.035,
                      margin: "1%",
                    }}
                  >
                    {" "}
                    No olvidar
                  </Text>
                  <Text style={{ fontSize: width * 0.03, margin: "1%" }}>
                    Vacuna: {vacuna}
                  </Text>
                </View>
                <View style={style.iconCaracte3}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "orange",
                      fontSize: width * 0.03,
                    }}
                  >
                    {" "}
                    {fecha}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
        <BottomHistorialAdd
          title={vacuna}
          idvacuna={vacuna_id}
          dep={descripcion}
          fecha={fecha}
          lugar={lugar}
          pet={pet}
          animal={animal}
          user={user}
          arreglo={vacunadatos}
          estado="Adoptado"
          src={require("../../../assets/vacuna.png")}
          ref={(target) => (popupRef = target)}
          onTouchOutside={onClosePopup}
        />
      </View>
    );
  }

  return (
    <View style={style.fondo}>
      {!!pet ? (
        <View style={style.backgroundContainer}>
          <View style={style.fondo5}>
            <Text style={style.titulo}>Historial Clinico</Text>
          </View>
          {/* {
                clinic.map((vacuna) => {
                    if (new Date(vacuna.fecha_vacunacion) <= fecha_hoy) {
                        return (
                            vacunasCaducadas(vacuna.nombre_vacuna,vacuna.fecha,vacuna.vacuna_id,vacuna.descripcion_vacuna,vacuna.lugar_vacuna,vacuna.idpet,vacuna.idanimal,vacuna.iduser,vacuna)
                        )
                    }
                })
            } */}
          <View style={style.fondo4}>
            <View style={style.contenedorCaract}>
              <View style={style.caracte}>
                <View style={style.iconCaracte4}>
                  <Image
                    style={style.imgIcon2}
                    source={require("../../../assets/tijeras.png")}
                  />
                </View>
                <View style={style.iconCaracte5}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: width * 0.035,
                        margin: "1%",
                      }}
                    >
                      {" "}
                      Esterilizado
                    </Text>
                    <View style={{ justifyContent: "center" }}>
                      {comprobarEstado(pet.esterilizado) ? (
                        <Image
                          style={style.imgIcon4}
                          source={require("../../../assets/check.png")}
                        />
                      ) : (
                        <Image
                          style={style.imgIcon4}
                          source={require("../../../assets/nocheck.png")}
                        />
                      )}
                    </View>
                  </View>
                  <Text style={{ fontSize: width * 0.03, margin: "1%" }}>
                    {" "}
                    Fecha: {pet.fecha_esterilizado}
                  </Text>
                  <Text style={{ fontSize: width * 0.03, margin: "1%" }}>
                    {" "}
                    Lugar: {pet.lugar_esterilizado}
                  </Text>
                </View>
                <View style={style.iconCaracte6}>
                  <StatusBar barStyle="dark-content"></StatusBar>
                  <SafeAreaView>
                    <TouchableWithoutFeedback onPress={onShowPopup}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "blue",
                          fontSize: width * 0.03,
                        }}
                      >
                        {" "}
                        Ver más
                      </Text>
                    </TouchableWithoutFeedback>
                  </SafeAreaView>
                  {comprobarEstado(pet.esterilizado) ? (
                    <BottomHistorial
                      title="Esterilizado"
                      estado="Adoptado"
                      verificado={require("../../../assets/check.png")}
                      src={require("../../../assets/tijeras.png")}
                      desp={pet.descripcion_esterilizado}
                      lugar={pet.lugar_esterilizado}
                      fecha={pet.fecha_esterilizado}
                      ref={(target) => (popupRef = target)}
                      onTouchOutside={onClosePopup}
                    />
                  ) : (
                    <BottomHistorial
                      title="Esterilizado"
                      estado="Adoptado"
                      verificado={require("../../../assets/nocheck.png")}
                      src={require("../../../assets/tijeras.png")}
                      desp={pet.descripcion_esterilizado}
                      lugar={pet.lugar_esterilizado}
                      fecha={pet.fecha_esterilizado}
                      ref={(target) => (popupRef = target)}
                      onTouchOutside={onClosePopup}
                    />
                  )}
                </View>
              </View>
            </View>

            <View style={style.contenedorCaract}>
              <View style={style.caracte}>
                <View style={style.iconCaracte4}>
                  <Image
                    style={style.imgIcon2}
                    source={require("../../../assets/medicina.png")}
                  />
                </View>
                <View style={style.iconCaracte5}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: width * 0.035,
                        margin: "1%",
                      }}
                    >
                      {" "}
                      Desparacitado
                    </Text>
                    <View style={{ justifyContent: "center" }}>
                      {compararFechas(pet.fecha_desparacitado) ? (
                        <Image
                          style={style.imgIcon4}
                          source={require("../../../assets/nocheck.png")}
                        />
                      ) : (
                        <Image
                          style={style.imgIcon4}
                          source={require("../../../assets/check.png")}
                        />
                      )}
                    </View>
                  </View>
                  <Text style={{ fontSize: width * 0.03, margin: "1%" }}>
                    {" "}
                    Fecha: {pet.fecha_desparacitado}
                  </Text>
                  <Text style={{ fontSize: width * 0.03, margin: "1%" }}>
                    {" "}
                    Lugar: {pet.lugar_desparacitado}
                  </Text>
                </View>
                <View style={style.iconCaracte6}>
                  <StatusBar barStyle="dark-content"></StatusBar>
                  <SafeAreaView>
                    <TouchableWithoutFeedback onPress={onShowPopup2}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "blue",
                          fontSize: width * 0.03,
                        }}
                      >
                        {" "}
                        Ver más
                      </Text>
                    </TouchableWithoutFeedback>
                  </SafeAreaView>
                  {compararFechas(pet.fecha_desparacitado) ? (
                    <BottomHistorial
                      title="Desparacitado"
                      estado="Adoptado"
                      verificado={require("../../../assets/nocheck.png")}
                      src={require("../../../assets/medicina.png")}
                      desp={pet.descripcion_desparacitado}
                      lugar={pet.lugar_desparacitado}
                      fecha={pet.fecha_desparacitado}
                      ref={(target) => (popupRef2 = target)}
                      onTouchOutside={onClosePopup2}
                    />
                  ) : (
                    <BottomHistorial
                      title="Desparacitado"
                      estado="Adoptado"
                      verificado={require("../../../assets/check.png")}
                      src={require("../../../assets/medicina.png")}
                      desp={pet.descripcion_desparacitado}
                      lugar={pet.lugar_desparacitado}
                      fecha={pet.fecha_desparacitado}
                      ref={(target) => (popupRef2 = target)}
                      onTouchOutside={onClosePopup2}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
          <Text style={style.titulo2}> Vacunas</Text>
          <View style={style.fondo6}>
            {clinic.map((vacuna) => {
              return vacunasHistorial(
                vacuna?.vacuna.nombre_vacuna,
                vacuna?.fecha_vacunacion,
                vacuna?.lugar_vacunacion,
                vacuna?.id,
                vacuna?.descripcion_vacunacion,
                vacuna?.imagen64
              );
            })}
          </View>
        </View>
      ) : null}
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
    alignItems: "center",
    height: height,
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
    position: "relative",
    width: width * 0.85,
    height: width * 0.15,
    elevation: 5,
    marginTop: "3%",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  fondo4: {
    position: "relative",
    width: width * 0.85,
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
    marginTop: "3%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "3%",
    height: height * 0.07,
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
    width: width * 0.1,
    backgroundColor: "red",
    borderRadius: width * 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCaracte4: {
    backgroundColor: "#5FAFB9",
    width: width * 0.1,
    borderRadius: width * 0.25,
    alignItems: "center",
    justifyContent: "center",
    top: "5%",
  },
  iconCaracte2: {
    width: "90%",
    height: "50%",
    //alignItems: 'left',
    marginLeft: "4%",
  },
  iconCaracte3: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  iconCaracte5: {
    width: "90%",
    height: "50%",
    //alignItems: 'left',
    marginLeft: "2%",
  },
  iconCaracte6: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    top: "12%",
  },
  imgIcon2: {
    padding: 10,
    height: width * 0.07,
    width: width * 0.07,
    resizeMode: "stretch",
  },
  imgIcon3: {
    padding: 10,
    height: 40,
    width: 40,
    resizeMode: "stretch",
  },
  imgIcon4: {
    height: width * 0.03,
    width: width * 0.03,
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
});
