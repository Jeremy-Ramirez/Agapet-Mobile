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
    ScrollView

} from 'react-native'

//const deviceHeight = Dimensions.get('window').height
const width = Dimensions.get('window').width

export class BottomPet extends React.Component {
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



    renderContent(seleccionado) {
        const { data } = this.props
        const { estado } = this.props
        const { title } = this.props
        if (seleccionado == 1) {
            return (
                <View
                    style={{
                        borderRadius: 20,
                        alignItems: 'center',
                        marginLeft: '3%',
                        marginRight: '3%',
                        margin: '5%'
                    }}>
                    <View style={{ backgroundColor: '#DF9F51', borderRadius: 20, height: width * 0.18, width: width * 0.18, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={style.imgIcon7}
                            source={require('../../../assets/fotomascota.jpg')}
                        />
                    </View>
                    <Text style={{ color: 'white', fontWeight: "bold", alignSelf: 'center', fontSize: width * 0.04, textAlign: 'center' }}> {title}</Text>
                    <Text style={{ paddingBottom: '4%', color: '#DF9F51', fontWeight: "bold", fontSize: width * 0.03, textAlign: 'center' }}>{estado}</Text>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: width * 0.025, textAlign: 'center' }}>Más información</Text>
                </View>


            )
        } else {
            return (
                <View
                    style={{
                        borderRadius: 20,
                        alignItems: 'center',
                        marginLeft: '3%',
                        marginRight: '3%',
                        margin: '5%',
                        opacity: 0.5
                    }}>
                    <View style={{ backgroundColor: '#DF9F51', borderRadius: 20, height: width * 0.18, width: width * 0.18, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={style.imgIcon7}
                            source={require('../../../assets/fotomascota.jpg')}
                        />
                    </View>
                    <Text style={{ color: 'white', fontWeight: "bold", alignSelf: 'center', fontSize: width * 0.04, textAlign: 'center' }}> {title}</Text>
                    <Text style={{ paddingBottom: '4%', color: '#DF9F51', fontWeight: "bold", fontSize: width * 0.03, textAlign: 'center' }}>{estado}</Text>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: width * 0.025, textAlign: 'center' }}>Más información</Text>
                </View>


            )
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
        let { onTouchOutside, title, estado } = this.props
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', height: '50%' }}>


                    {/*this.renderTitle()*/}

                    <View style={{
                        width: '100%',
                        backgroundColor: '#5FAFB9',
                        borderBottomRightRadius: 25,
                        borderBottomLeftRadius: 25,
                        paddingHorizontal: 10,
                        alignContent: 'flex-start'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: width * 0.05,
                            marginLeft: '5%',
                            marginRight: '5%',
                            marginTop: '5%',
                            marginBottom: '1%'
                        }}>Mis mascotas</Text>

                        <View style={{
                            flexDirection: "row"
                        }}>
                                {this.renderContent(1)}
                                {this.renderContent(2)}
                                {this.renderContent(2)}
                                {this.renderContent(2)}
                        </View>




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

        marginTop: '2%',
        borderRadius: 20
    }
});