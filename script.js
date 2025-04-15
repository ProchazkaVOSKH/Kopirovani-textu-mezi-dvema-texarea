// odkazy na HTML elementy textových oblastí
const taVstup = document.querySelector("#inputText");
const taVystup = document.querySelector("#outputText");

// událostní metoda aktivovaná při stisknutí klávesy
// onkeydown - při stisku klávesy
// onkeyup - při uvolnění klávesy
taVstup.onkeyup = function() {
    taVystup.value = textEncode(taVstup.value);
}
