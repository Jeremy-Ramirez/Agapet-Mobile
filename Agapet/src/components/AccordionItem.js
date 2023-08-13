import React, { useRef, useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    Animated
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { height, width } = Dimensions.get('window');

const AccordionItem = ({ title, bodyText }) => {
    const [showContent, setShowContent] = useState(false);
    const animationController = useRef(new Animated.Value(0)).current;

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContent ? 0 : 1,
            useNativeDriver: true
        };
        Animated.timing(animationController, config).start();
        setShowContent(!showContent);
    };

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg']
    });



    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleListItem()}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
                        <MaterialIcons name={'keyboard-arrow-right'} size={30} />
                    </Animated.View>
                </View>
            </TouchableOpacity>
            {showContent && (
                <View style={styles.body}>
                    <Text>{bodyText}</Text>
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        padding: '2%',
        borderRadius: 12,
        backgroundColor: '#FFFFFFA6',
        marginBottom: '2%',
        marginLeft: '2%',
        overflow: 'hidden'
    },
    title: {
        fontSize: 16,
        color: '#2d2d2d',
        fontWeight: 'bold'
    },
    body: {
        paddingHorizontal: '2%',
        paddingVertical: '3%'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default AccordionItem;
