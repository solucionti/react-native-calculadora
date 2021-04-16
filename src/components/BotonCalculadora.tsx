import React from 'react';
import {styles} from "../theme/appTheme";
import {Text, TouchableOpacity, View} from "react-native";

interface Props {
    text: string,
    color: string,
    buttonColor: string,
    classSpecial?: boolean,
    accion: (numeroTexto: string) => void,
}

export const BotonCalculadora = ({text, color, buttonColor, classSpecial, accion}: Props) => {
    return (
        <TouchableOpacity
            onPress={() => accion(text)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (classSpecial) ? 180 : 80

            }}>
                <Text style={{...styles.botonTexto, color: buttonColor}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
