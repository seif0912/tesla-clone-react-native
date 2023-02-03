import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 50,
        zIndex: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        resizeMode: 'contain',
        height: 20
    },
    menu: {
        width: 25,
        resizeMode: 'contain',
        height: 25
    }
})

export default styles