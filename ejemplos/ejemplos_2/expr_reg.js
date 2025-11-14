// Validar fechas

function isValidDate(sText) {
    // Sin grupo de captura
    var reDate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
    return reDate.test(sText);
}


function isValidDate2(sText) {
    // Con grupos de captura:    
    var reDate = /(?<dd>0[1-9]|[12][0-9]|3[01])\/(?<mm>0[1-9]|1[0-2])\/(?<yy>19|20\d{2})/;
    r = sText.match(reDate);
    if (r != null) {
        console.log("dd:" + r.groups.dd + " mm:" + r.groups.mm + " yy:" + r.groups.yy);
    }
}

fechas = ['01/02/1999', '23/23/2000'];

for (f of fechas) {
    console.log(f + " " + isValidDate(f));
    isValidDate2(f);
}