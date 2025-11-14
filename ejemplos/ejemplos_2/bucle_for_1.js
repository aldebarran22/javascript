var x;
var marcasCoches = new Array();
marcasCoches[0] = "Volkswagen";
marcasCoches[1] = "Mitsubishi";
marcasCoches[2] = "Honda";
for (x in marcasCoches) {
    console.log(x + " " + marcasCoches[x]);
}

for (x of marcasCoches) {
    console.log(x);
}