function bmicalc() {
    let hg = document.getElementById("height").value;
    let wg = document.getElementById("weight").value;
    let res;
    let mhg;

    let resulta = document.getElementById("resulta");
    let resultb = document.getElementById("resultb");
    let warning = document.getElementById("warning");
    let advice = document.getElementById("advice");

    if (hg !== "" || wg !== "") {
        warning.innerHTML = "";
        advice.innerHTML = "";

    }

    if (hg === "" && wg === "") {
        alert("!Please fill both the fields");
        warning.innerHTML = "Please fill both the fileds";
        resulta.innerHTML = "0.0";
        resultb.innerHTML = "none";
        advice.innerHTML = "";


    }
    else if (hg === "") {
        alert("!Please enter your height");
        warning.innerHTML = "Please enter the height";
        resulta.innerHTML = "0.0";
        resultb.innerHTML = "none";
        advice.innerHTML = "";

    }
    else if (wg === "") {
        alert("!Please enter your weight");
        warning.innerHTML = "Please enter your weight";
        resulta.innerHTML = "0.0";
        resultb.innerHTML = "none";
        advice.innerHTML = "";

    }
    else if (wg === '0' || hg === '0') {
        warning.innerHTML = "Please enter correct height and weight";
    }
    else if (wg === '0') {
        warning.innerHTML = "Please enter correct weight";
    }
    else if (hg === '0') {
        warning.innerHTML = "Please enter correct height";
    }
    else if (wg >= 170) {
        warning.innerHTML = "Please enter correct weight";
    }
    else {
        mhg = hg / 3.281;
        res = wg / (mhg * mhg);
        resulta.innerHTML = res.toFixed(2);

    }
    if (hg !== "") {
        mhg = hg / 3.281;
        res = wg / (mhg * mhg);
    }


    if (res > 0 && res <= 18.5) {
        resultb.innerHTML = "Underweight";
        advice.innerHTML = "<b><u>Advice:</u></b> <br>-Focus on increasing your calorie intake to achieve a healthy weight.<br>-Choose nutrient-dense foods that provide essential vitamins and minerals.";
    }
    else if (res > 18.5 && res <= 24.9) {
        resultb.innerHTML = "Normal Weight";
        advice.innerHTML = "<b><u>Advice:</u></b> <br>-Maintain your current weight by eating a balanced diet.<br>-Continue to exercise regularly for overall health and fitness.";
    }
    else if (res >= 25 && res <= 29.9) {
        resultb.innerHTML = "Overweight";
        advice.innerHTML = "<b><u>Advice:</u></b> <br>-Aim for gradual weight loss through a balanced diet and increased physical activity.<br>-Reduce calorie intake while maintaining a nutritious diet.";

    }
    else if (res >= 30 && res <= 34.9) {
        resultb.innerHTML = "Obesity(class-I)";
        advice.innerHTML = "<b><u>Advice:</u></b> <br>-Seek professional guidance for weight management and lifestyle changes.<br>-Set realistic weight loss goals and focus on sustainable changes";

    } else if (res >= 35 && res <= 39.9) {
        resultb.innerHTML = "Obesity(class-II)";
        advice.innerHTML = "<b><u>Advice:</u></b> <br>-Consult with a healthcare professional for comprehensive weight management.<br>-Consider medical interventions, such as bariatric surgery, if recommended.";

    } else if (res >= 40) {
        resultb.innerHTML = "Obesity(class-III)";
        advice.innerHTML = "<b><u>Advice:</u></b> <br>-Consult with a healthcare professional for comprehensive weight management.<br>-Consider medical interventions, such as bariatric surgery, if recommended.";
    }
    else {

    }

}
function customResetFunction() {

    let resulta = document.getElementById("resulta");
    let resultb = document.getElementById("resultb");
    let advice = document.getElementById("advice");
    resulta.innerHTML = "0.0";
    resultb.innerHTML = "none";
    advice.innerHTML = "";


}
document.getElementById("resetButton").addEventListener("click", customResetFunction);


