import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form: {
        width: '100%',
        paddingTop: 20,
        marginLeft: 10,
    },
    formLabel: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#278C7A',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator: {
        fontSize: 18,
        color: '#FFF',
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    exhibitionResultImc: {
        width: '100%',
        height: '50%',
    },
    listImcs: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 28,
        color: '#278C7A',
        height: 50,
        width: '100%',
        paddingRight: 20,
        fontWeight: 'bold',
    },
    textResultItemList: {
        fontSize: 16,
        color: '#000',
    }
})

export default styles