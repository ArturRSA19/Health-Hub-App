import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contextImc: {
        flex: 1,
        marginTop: 20,
        paddingTop: 60,
        alignItems: 'center',
        width: '100%',
    },
    numberImc:{
        fontSize: 45,
        color: '#278C7A',
        fontWeight: 'bold',
    },
    information: {
        fontSize: 15,
        color: '#000000',
        fontWeight: 'bold',
    },
    boxShareButton: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 35,
    },
    shared: {
        backgroundColor: '#2F4C73',
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText: {
        color: '#FFF',
        fontWeight: 'bold',
        paddingHorizontal: 30,
        fontSize: 15,
    }
})

export default styles