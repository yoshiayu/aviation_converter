document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");
    const resultDisplay = document.getElementById("resultDisplay");

    convertButton.addEventListener("click", function() {
        const fromToUnit = document.getElementById("fromUnit").value;
        const inputValue = parseFloat(document.getElementById("inputValue").value);

        let conversionFactor = 1;
        let toUnit = ""; // 変換先の単位を保存する変数

        switch (fromToUnit) {
            case "knotsToMs":
                conversionFactor = 0.514;
                toUnit = "m/s";
                break;
            case "knotsToKmh":
                conversionFactor = 1.852;
                toUnit = "km/h";
                break;
            case "NMToM":
                conversionFactor = 1852;
                toUnit = "m";
                break;
            case "mileToM":
                conversionFactor = 1609;
                toUnit = "m";
                break;
            case "lbToKg":
                conversionFactor = 0.454;
                toUnit = "kg";
                break;
            case "galToL":
                conversionFactor = 3.8;
                toUnit = "L";
                break;
            case "inHgToPa":
                conversionFactor = 3386.38;
                toUnit = "Pa";
                break;
            case "inHgTohPa":
                conversionFactor = 33.8638;
                toUnit = "hPa";
                break;
            case "psiToPa":
                conversionFactor = 6894.757;
                toUnit = "Pa";
                break;
            case "NmToftlb":
                conversionFactor = 0.737562;
                toUnit = "ft-lb";
                break;
            case "NmToinlb":
                conversionFactor = 8.85074;
                toUnit = "in-lb";
                break;
            case "ftlbToinlb":
                conversionFactor = 12;
                toUnit = "in-lb";
                break;
            case "inlbToftlb":
                conversionFactor = 0.08333;
                toUnit = "ft-lb";
                break;
            // 他の変換ロジックもここに追加
        }

        const result = inputValue * conversionFactor;
        resultDisplay.textContent = `結果: ${result.toFixed(2)} ${toUnit}`; // 変換先の単位を結果に追加
    });
});
