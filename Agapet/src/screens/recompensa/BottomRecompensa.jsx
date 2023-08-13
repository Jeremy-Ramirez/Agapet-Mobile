import React from "react";
import {
    Modal,
    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    FlatList,
    Image,
    StatusBar,
    SafeAreaView

} from 'react-native'


const deviceHeight = Dimensions.get('window').height
const width = Dimensions.get('window').width

let popupRef7 = React.createRef()
const onShowPopup7 = () => {
    popupRef7.show()
}
const onClosePopup7 = () => {
    popupRef7.close()
}
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

export class BottomRecompensa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }


    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }} />
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        const { title } = this.props
        return (
            <View style={{ background: '#5FAFB9', alignItems: 'center' }}>
                <Text style={{
                    color: 'black',
                    fontSize: 25,
                    fontWeight: '500',
                    marginTop: 15,
                    marginBottom: 30
                }}>
                    {title}
                </Text>
            </View>
        )
    }


    renderContent = () => {
        const { data } = this.props
        const { estado } = this.props
        const { title } = this.props
        const { src } = this.props
        const { desp } = this.props
        const { imagen } = this.props
        const { verificado } = this.props
        return (
            <View style={style.fondo6}>
                <View style={style.contenedorCaract}>
                    <View style={style.caracte}>
                        <View style={style.iconCaracte4}>
                            <Image style={style.imgIcon2}

                                source={{uri: imagen}}
                            />
                        </View>
                        <View style={style.iconCaracte5}>
                            <View style={{ alignItems:'center', width:width*0.5}}>
                                <Text style={{ fontSize: width * 0.05, color: 'white',  fontWeight: "bold" }}> ¡Felicidades!</Text>
                                <Text style={{ fontSize: width * 0.047, color: '#ffc885',fontWeight: "bold", textAlign:"center"  }}> El descuento fue aplicado</Text>
                            </View>

                        </View>
                    </View>
                </View>

                    <Text style={{ fontSize: width * 0.04, color:'white', marginLeft:'4%', marginBottom:'1%', marginTop:'2%', fontWeight:'bold'}}> Producto reclamado </Text>
                    <Text style={{ fontSize: width * 0.03, marginLeft:'4%', width:width*0.8,marginBottom:'3%', marginTop:'1%' }}>
                    {desp}
                    </Text>

            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <View
                style={{
                    height: 50,
                    flex: 1, alignItems: 'flex-start',
                    justifyContent: 'center', marginLeft: 20
                }}
            >
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'normal', color: '#182E44'
                }}>
                    {item.name}
                </Text>
            </View>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    opacity: 0.1,
                    backgroundColor: '#182E44',
                    height: 1
                }}
            >

            </View>
        )
    }


    render() {
        let { show } = this.state
        let { onTouchOutside, title, estado, verificado, src } = this.props
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{ flex: 1, backgroundColor: '#000000AA', height: '50%' }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        alignSelf: 'center'
                    }}>
                        {/*this.renderTitle()*/}
                        {this.renderContent()}
                    </View>
                    {this.renderOutsideTouchable(onTouchOutside)}
                </View>

            </Modal>
        )
    }
}
const style = StyleSheet.create({
    imgIcon7: {
        height: width * 0.15,
        width: width * 0.15,
        resizeMode: 'contain'
    },
    fondo3: {
        width: width * 0.85,
        height: width * 0.15,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignSelf: 'center'
    },
    contenedorCaract: {
        flexDirection: 'row',
        marginTop: '8%',
        height:width*0.4,
        marginLeft:'4%'

    },
    caracte: {
        width: width * 0.35,
        height: width * 0.10,
        borderRadius: width * 0.25,
        flexDirection: "row"
    },
    iconCaracte: {
        width: width * 0.10,
        backgroundColor: 'red',
        borderRadius: width * 0.25,
        alignItems: 'center',
        justifyContent: 'center'

    },
    imgIcon2: {
        height: width * 0.4,
        width: width * 0.4,
        resizeMode: 'stretch',
        borderRadius: 30
    },
    iconCaracte2: {
        width: '90%',
        height: '50%',
        //alignItems: 'left',
        marginLeft: '4%'

    },
    iconCaracte3: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    iconCaracte4: {
        width: width * 0.37,
        height: width * 0.37,
        alignItems: 'center',
        justifyContent: 'center',
        top: '5%'
    },
    iconCaracte5: {
        //width: '90%',
        //height: '50%',
        //alignItems: 'left',
        //marginLeft: '1%',
        alignItems:'center',
        marginTop:'25%',
        height:'100%'

    },
    iconCaracte6: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top: '45%'
    },
    iconCaracte7: {
        backgroundColor: '#5FAFB9',
        width: width * 0.12,
        height: width * 0.1,
        borderRadius: width * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    imgIcon4: {
        height: width * 0.03,
        width: width * 0.03,
        resizeMode: 'stretch'
    },
    fondo6: {
        width:width*0.9,
        height:width*0.8,
        elevation: 5,
        marginTop: '5%',
        backgroundColor: '#5FAFB9',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignSelf: 'center'
    }
});