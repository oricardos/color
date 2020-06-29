const { body } = document

try {
    body.style.backgroundColor = lumiance("#6633cc", 0.1)
} catch(e) {
    console.log("HOUVE UM ERRO: ", e.message)
}

// lógica para converter o hex em uma cor mais clara ou escura
function lumiance(hex, luminosity = 0) {
    // hexadecimal é um valor que vai de 0 até f
    // contém 16 digitos
    // 0 = black
    // f = white

    // é aceito hex com 3 ou 6 dígitos

    hex = hex.replace(/[^0-9a-f]/gi, '')
    const isValidHex = hex.length === 6 || hex.length === 3
    if (!isValidHex) throw new Error("invalid HEX")

    // se for 3 digitos, transformar para 6 digitos
    if(hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] 
    }

    // aplicar uma formula matematica para aumentar ou
    // diminuir a luminosidade de um hex

    // tranformar o hex em rgb

    const black = 0
    const white = 255

    const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi)

    let newHex = "#"

    for ( let twoDigit of twoDigitGroup) {
        const numberFromHex = parseInt(twoDigit, 16)
        const calculateLuminosity = numberFromHex +( luminosity * 255)

        const blackOrLuminosity = Math.max(black, calculateLuminosity)
        const partialColor = Math.min(white, blackOrLuminosity)

        const newColor = Math.round(partialColor)
        const numberToHex = newColor.toString(16)
        const finalHex = `0${numberToHex}`.slice(-2)

        newHex = newHex + finalHex
    }
    return newHex
}