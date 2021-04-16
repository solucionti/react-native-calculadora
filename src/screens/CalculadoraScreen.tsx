import React from 'react';
import {Text, View} from "react-native";
import {styles} from "../theme/appTheme";
import {BotonCalculadora} from "../components/BotonCalculadora";
import {useCalculadora} from "../hooks/useCalculadora";


export const CalculadoraScreen = () => {

    // firstRowData.push();

    const {
        numero,
        numeroAnterior,
        firstRowData,
        secondRowData,
        thirdRowData,
        fourRowData,
        fiveRowData
    } = useCalculadora();
    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text
                        style={styles.resultadoPequeno}
                        numberOfLines={1}
                        adjustsFontSizeToFit={true}
                    >{numeroAnterior}</Text>
                )
            }

            <Text style={styles.resultado}
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}
            >{numero}</Text>
            <View style={styles.fila}>
                {firstRowData.map(r => <BotonCalculadora
                        key={r.text}
                        text={r.text}
                        color={r.backGroundColor}
                        buttonColor={r.buttonColor}
                        accion={r.accion}

                    ></BotonCalculadora>
                )}

            </View>
            <View style={styles.fila}>

                {secondRowData.map(r => <BotonCalculadora
                        key={r.text}
                        text={r.text}
                        color={r.backGroundColor}
                        buttonColor={r.buttonColor}
                        accion={r.accion}

                    ></BotonCalculadora>
                )}
            </View>
            <View style={styles.fila}>

                {thirdRowData.map(r => <BotonCalculadora
                        key={r.text}
                        text={r.text}
                        color={r.backGroundColor}
                        buttonColor={r.buttonColor}
                        accion={r.accion}

                    ></BotonCalculadora>
                )}
            </View>
            <View style={styles.fila}>

                {fourRowData.map(r => <BotonCalculadora
                        key={r.text}
                        text={r.text}
                        color={r.backGroundColor}
                        buttonColor={r.buttonColor}
                        accion={r.accion}

                    ></BotonCalculadora>
                )}
            </View>

            <View style={styles.fila}>
                {fiveRowData.map((r, i) => <BotonCalculadora
                        key={r.text}
                        text={r.text}
                        color={r.backGroundColor}
                        buttonColor={r.buttonColor}
                        classSpecial={r.specialClass}
                        accion={r.accion}

                    ></BotonCalculadora>
                )}
            </View>
        </View>
    )
}
