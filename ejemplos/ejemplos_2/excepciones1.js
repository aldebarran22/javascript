function check(pass) {
    var msg = {}

    try {

        if (pass.length < 6) throw "SHORT";
        if (pass.length > 10) throw "LONG";

        msg.status = "Pass Validated";

    } catch (err) {
        if (err == 'SHORT') msg.status = "Password demasiado corto";
        if (err == 'LONG') msg.status = "Password demasiado largo";

    } finally {
        console.log("Password Evaluado: ", msg.status, ':', pass);

    }
}

check('12345');
check('12345789012');
check('12345678');