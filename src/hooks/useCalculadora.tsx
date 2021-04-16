import {useRef, useState} from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {


    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')

    }

    const armarNumero = (numeroTexto: string) => {
        // Verificar si existe punto
        if (numero.includes('.') && numeroTexto === '.') {
            return;

        }
        if (numero.startsWith('0') || numero.startsWith('-0')) {

            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
                // Evaluamos si es diferente de 0 y no tiene punto
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            }

        } else {
            setNumero(numero + numeroTexto)
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)

        }
    }

    const btnDel = () => {

        if (numero.length <= 1) {
            setNumero('0')
            return;

        }
        if (numero.length == 2 && numero.includes('-')) {

            setNumero('0')
            return;

        }
        setNumero(numero.slice(0, -1))

    }

    const cambiarNumeroPorAnterios = () => {

        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, 1));

        } else {
            setNumeroAnterior(numero);

        }
        setNumero('0');
    }


    const btnDividir = () => {
        cambiarNumeroPorAnterios();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
        cambiarNumeroPorAnterios();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnRestar = () => {
        cambiarNumeroPorAnterios();
        ultimaOperacion.current = Operadores.restar;
    }
    const btnSumar = () => {
        cambiarNumeroPorAnterios();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {

        const numero1 = Number(numero);
        const numero2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${numero1 + numero2}`)
                break;
            case Operadores.restar:
                setNumero(`${numero2 - numero1}`)
                break;
            case Operadores.dividir:
                setNumero(`${numero2 / numero1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${numero1 * numero2}`)
                break;
            default:
                break;
        }
        setNumeroAnterior('0')

    }
    let defaultBackGroundColor = '#9B9B9B';
    let defaultButtonColor = 'black';
    const SpecialBackGroundColor = '#f49707';
    let firstRowData = [
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: 'C', accion: limpiar},
        {
            backGroundColor: defaultBackGroundColor,
            buttonColor: defaultButtonColor,
            text: '+/-',
            accion: positivoNegativo
        },
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: 'del', accion: btnDel},
        {backGroundColor: SpecialBackGroundColor, buttonColor: 'white', text: '/', accion: btnDividir},
    ]
    defaultButtonColor = 'white';
    defaultBackGroundColor = '#2E2D2E';

    let secondRowData = [
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '7', accion: armarNumero},
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '8', accion: armarNumero},
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '9', accion: armarNumero},
        {backGroundColor: SpecialBackGroundColor, buttonColor: defaultButtonColor, text: 'x', accion: btnMultiplicar},
    ]
    let thirdRowData = [
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '4', accion: armarNumero},
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '5', accion: armarNumero},
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '6', accion: armarNumero},
        {backGroundColor: SpecialBackGroundColor, buttonColor: defaultButtonColor, text: '-', accion: btnRestar},
    ]
    let fourRowData = [
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '1', accion: armarNumero},
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '2', accion: armarNumero},
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '3', accion: armarNumero},
        {backGroundColor: SpecialBackGroundColor, buttonColor: defaultButtonColor, text: '+', accion: btnSumar},
    ]
    let fiveRowData = [
        {
            backGroundColor: defaultBackGroundColor,
            buttonColor: defaultButtonColor,
            text: '0',
            specialClass: true,
            accion: armarNumero
        },
        {backGroundColor: defaultBackGroundColor, buttonColor: defaultButtonColor, text: '.', accion: armarNumero},
        {backGroundColor: SpecialBackGroundColor, buttonColor: defaultButtonColor, text: '=', accion: calcular},
    ]

    return {
        numero,
        numeroAnterior,
        firstRowData,
        secondRowData,
        thirdRowData,
        fourRowData,
        fiveRowData
    }

}
