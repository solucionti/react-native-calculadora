import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: "right",
        marginBottom: 10
    }, resultadoPequeno: {
        color: 'rgba(255,255,2555,0.5)',
        fontSize: 30,
        textAlign: "right"
    },
    calculadoraContainer: {
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: "flex-end"

    },
    boton: {
        width: 80,
        height: 80,
        //backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        //color: "black",
        fontWeight: 'bold'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18
    }
})
