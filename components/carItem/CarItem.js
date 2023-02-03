import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import styles from './style';
import Button from '../button/Button';

const CarItem = (props) => {
    const {name, tagline, taglineCTA, image} = props.car
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button type='primary' content='Custom Order' onPress={()=>{
                    console.warn('custom order was pressed')
                }}/>
                <Button type='secondary' content='existing enventory' onPress={()=>{
                    console.warn('existing order was pressed')
                }}/>
            </View>
        </View>
    )
}

export default CarItem