const { body } = document

try {
    body.style.backgroundColor = lumiance("#6633cc")
} catch(e) {
    console.log("HOUVE UM ERRO: ", e.message)
}

function lumiance(hex, luminosity = 0) {
    // hexadecimal é um valor que vai de 0 até f
    // contém 16 digitos
    // 0 = black
    // f = white

    // lógica para converter o hex em uma cor mais clara ou escura
    // é aceito hex com 3 ou 6 dígitos

    hex = hex.replace(/[^0-9a-f]/gi, '')
    const isValidHex = hex.length === 6 || hex.length === 3
    if (!isValidHex) throw new Error("invalid HEX")
    return hex
}