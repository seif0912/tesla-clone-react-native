import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import styles from './style';
import Button from '../button/Button';

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
        <ImageBackground
            source={require('../../assets/images/ModelS.jpeg')}
            style={styles.image}
        />
        <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
        <Button type='primary' content='Custom Order' onPress={()=>{
            console.warn('custom order was pressed')
        }}/>
        <Button type='secondary' content='existing enventory' onPress={()=>{
            console.warn('existing order was pressed')
        }}/>
    </View>
  )
}

export default CarItem