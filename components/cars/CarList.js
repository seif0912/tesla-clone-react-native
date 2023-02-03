import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import carsData from './carsData'
import CarItem from '../carItem/CarItem'
import styles from './style'

const CarList = () => {
    console.log('CarList')
    return (
        <View style={styles.container}>
            <FlatList
                data={carsData}
                renderItem={({item})=>(<CarItem car={item}/>)}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CarList