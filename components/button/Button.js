import React from 'react'
import { Text, View, Pressable } from 'react-native';
import styles from './style';

const Button = (props) => {
    const backgroundColor = props.type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const fontColor = props.type === 'primary' ? '#fff' : '#171A20'
    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={props.onPress}
            >
                <Text style={[styles.text, {color: fontColor}]}>{props.content}</Text>
            </Pressable>
        </View>
    )
}

export default Button