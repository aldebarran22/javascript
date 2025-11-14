/* Expresiones regulares */

function validarDNI(dni){
    // de 1 a 8 dígitos + letra May.
    //let re = /^[0-9]{1,8}[A-Z]$/;
    let re = /^\d{1,8}[A-Z]$/;

    return re.test(dni)
}

function cuentaBanc(cc){
    // 0000-0000-00-00000000
    let patron = "^[0-9]{4}-[0-9]{4}-[0-9]{2}-[0-9]{8}$"
    
    obj = new RegExp(patron)
    return obj.test(cc)
}

function ccCampos(cc){
    let patron = "^([0-9]{4})-([0-9]{4})-([0-9]{2})-([0-9]{8})$"
    let campos = cc.match(patron)

    if (campos != null){
        obj = {entidad:campos[1],sucursal:campos[2],dc:campos[3],cc:campos[4]}
        console.log(obj)
        return obj

    } else
        return false
}

dnis = ['1G','12345f','1234567890A','','1234RR']
ccs = ['1234-8000-12-12345678','1234-8000-1-12345678','1234-800012-12345678','1234-8000-12-1234567811']

dnis.forEach((value)=>{
    console.log(value + " " + validarDNI(value))
})

ccs.forEach((value)=>{
    console.log(value + " " + cuentaBanc(value))
})

ccs.forEach((value)=>{ ccCampos(value)})

let er = /(\w+)\s(\w+)/
let str = 'John Smith'
let newstr = str.replace(er, '$2, $1')
console.log(newstr)