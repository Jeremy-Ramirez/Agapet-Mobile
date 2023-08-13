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

export class BottomPopup extends React.Component {
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
        const {descripcion}=this.props

        return (
            <View
                style={{
                    width: '90%',
                    backgroundColor: 'white',
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    alignSelf: 'center'

                }}>
                <View style={{ margin: '5%' }}>
                    <View style={{ flexDirection: "row", margin: '2%' }}>
                        <Image style={style.imgIcon7}
                            source={src}
                        />
                        <View style={{ margin: '1%' }}>
                            <Text style={{ color: 'black', fontWeight: "bold", fontSize: width * 0.05, marginBottom: '1%' }}> {title}</Text>
                            {
                                estado == 'A' ?
                                (<Text style={{ color: 'green', fontSize: width * 0.035, marginBottom: '1%' }}> Aprobado </Text>)
                                :
                                (<Text style={{ color: 'green', fontSize: width * 0.035, marginBottom: '1%' }}>En espera</Text>)
                            }
                        </View>

                    </View>
                    <Text style={{ fontSize: width * 0.035, margin: '4%' }}>{descripcion}</Text>
                    <FlatList
                        ahowaVerticalScrollIndicator={false}
                        data={data}
                        renderItem={this.rednerItem}
                        extraData={data}
                        keyExtractor={(item, index) => index.toString()}

                        //ItemSeparatorComponent={this.renderSeparator}
                        contentContainerStyle={{
                            paddingBottom: 0
                        }}
                    />
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
                <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', height: '50%' }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        width: '100%',
                        backgroundColor: '#5FAFB9',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        padding: '5%',
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}>
                        {/*this.renderTitle()*/}
                        {this.renderContent()}
                    </View>
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
    }
});

//En esta fase,un voluntario de la fundación se pondrá en contacto con usted para coordinar una reunión presencial.