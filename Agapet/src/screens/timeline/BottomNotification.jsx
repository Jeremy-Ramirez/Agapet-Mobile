import React from "react";
import {
    Modal,
    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    FlatList,
    Image

} from 'react-native'

const deviceHeight = Dimensions.get('window').height
const width = Dimensions.get('window').width

export class BottomNotification extends React.Component {
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
        return (
            <View
                style={{
                    width: '90%',
                    backgroundColor: 'white',
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    alignSelf: 'center',
                    margin:'3%'

                }}>
                <View style={{ margin: '1%', height:width*0.2 }}>
                    <View style={{ flexDirection: "row", margin: '1%' }}>
                        <Image style={style.imgIcon7}
                            source={require('../../../assets/notificacion2.png')}
                        />
                        <View style={{ margin: '1%',width: '80%',height: deviceHeight *  0.13 }}>
                            <Text style={{ color: 'black', fontWeight: "bold", fontSize: width * 0.05, marginBottom: '1%' }}> {title}</Text>
                            <Text style={{ fontSize: width * 0.035, margin: '1%' }}>Usted acaba de pasar a la siguiente fase de adopción.</Text>
                        </View>

                    </View>
                    
                    
                </View>
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
        let { onTouchOutside, title, estado } = this.props
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', height: '50%' }}>


                    {/*this.renderTitle()*/}

                    <View style={{
                        width: '100%',
                        backgroundColor: '#5FAFB9',
                        borderBottomRightRadius: 25,
                        borderBottomLeftRadius: 25,
                        paddingHorizontal: 10,
                        
                        alignContent: 'flex-start'
                    }}>
                        {this.renderContent()}
                        {this.renderContent()}
                        {this.renderContent()}
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
        resizeMode: 'contain',
        marginTop:'2%'
    }
});