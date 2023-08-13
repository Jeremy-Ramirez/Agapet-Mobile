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
//import { BottomNotification } from './BottomNotification'

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

export class BottomImagen extends React.Component {
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
        const { imagen } = this.props
        const { verficado } = this.props

        {
            if(imagen){
                return (
                    <Image 
                    style={style.imgIcon2}
                    source={{uri: imagen}}
                    />
                )
            }else{
                return (
                    <Image 
                    style={style.imgIcon2}
                    source={src}
                    />
                )
            }
        }
        
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
        let { onTouchOutside, title, estado, verificado } = this.props
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
        margin: '3%'

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
        height: width,
        width: width,
        resizeMode: 'contain'
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
        backgroundColor: '#5FAFB9',
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.30,
        alignItems: 'center',
        justifyContent: 'center',
        top: '20%'
    },
    iconCaracte5: {
        width: '90%',
        height: '50%',
        //alignItems: 'left',
        marginLeft: '2%'

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

        elevation: 5,
        marginTop: '5%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignSelf: 'center'
    }
});
