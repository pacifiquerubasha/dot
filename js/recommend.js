

function handleRecommend(e) {
    e.preventDefault();
    
    let a = document.getElementById("pH").value;
    let b = document.getElementById("Nitrogen").value;
    let c = document.getElementById("Phosphorus").value;
    let d = document.getElementById("Potassium").value;
    let text1;
    let text2;
    let text3;
    let text4;
    if (a < 4.0) {
        text1 = "Soil pH is too low for growing crops. Add either baking soda, oyster lime, agricultural lime or dried, pulverized egg shells to increase soil pH.";
    }
    else if (a == 4.0 || a == 4.1 || a == 4.2 || a == 4.3 || a == 4.4) {
        text1 = "The most suitable crop to grow on your soil is Tea."
    }
    else if (a == 4.5 || a == 4.6 || a == 4.7) {
        text1 = "The most suitable crops to grow on your soil are Tea and Pineapple."
    }
    else if (a == 4.8 || a == 4.9) {
        text1 = "The most suitable crops to grow on your soil are Tea, Pineapple, and Potato."
    }
    else if (a == 5.0 || a == 5.1 || a == 5.2 || a == 5.3 || a == 5.4) {
        text1 = "The most suitable crops to grow on your soil are Tea, Pineapple, Potato, Coconut, Guava, and Avocado."
    }
    else if (a == 5.5 || a == 5.6) {
        text1 = "The most suitable crops to grow on your soil are Tea, Pineapple, Potato, Coconut, Guava, Avocado, Tomato, Banana, Mango, Pomegranate, Papaya, Cassava, Yam, and Sweet Potato."
    }
    else if (a == 5.7 || a == 5.8 || a == 5.9) {
        text1 = "The most suitable crops to grow on your soil are Potato, Coconut, Guava, Avocado, Tomato, Banana, Mango, Pomegranate, Papaya, Cassava, Yam, Sweet Potato, Tobacco, and Peanut."
    }
    else if (a == 6.0 || a == 6.1 || a == 6.2) {
        text1 = "The most suitable crops to grow on your soil are Potato, Coconut, Guava, Avocado, Tomato, Banana, Mango, Pomegranate, Papaya, Cassava, Yam, Sweet Potato, Tobacco, Peanut, Sugarcane, Cabbage, Green Bean, Pumpkin, Spinach, and Beans."
    }
    else if (a == 6.3 || a == 6.4 || a == 6.5) {
        text1 = "The most suitable crops to grow on your soil are Potato, Coconut, Guava, Avocado, Tomato, Banana, Mango, Pomegranate, Papaya, Cassava, Yam, Sweet Potato, Peanut, Sugarcane, Cabbage, Green Bean, Pumpkin, Spinach, and Beans."
    }
    else if (a == 6.6 || a == 6.7 || a == 6.8 || a == 6.9 || a == 7.0) {
        text1 = "The most suitable crops to grow on your soil are Coconut, Guava, Avocado, Tomato, Mango, Pomegranate, Papaya, Yam, Cabbage, Spinach, and Beans."
    }
    else if (a == 7.1 || a == 7.2 || a == 7.3 || a == 7.4 || a == 7.5) {
        text1 = "The most suitable crops to grow on your soil are Coconut, Guava, Tomato, Mango, Pomegranate, Papaya, Cabbage, and Spinach."
    }
    else if (a == 7.6 || a == 7.7 || a == 7.8 || a == 7.9 || a == 8.0) {
        text1 = "The most suitable crops to grow on your soil are Coconut and Pomegranate."
    }
    else if (a == 8.1 || a == 8.2 || a == 8.3 || a == 8.4 || a == 8.5) {
        text1 = "The most suitable crop to grow on your soil is Pomegranate."
    }
    else if (a > 8.5) {
        text1 = "Soil pH is too high for growing crops. Add either elemental sulfur or aluminum sulfate to decrease soil pH.";
    }

    if (b < 30) {
        text2 = "Soil nitrogen content is too low for growing crops. Add either sawdust, coffee grounds, all-purpose organic plant fertilizer with a high nitrogen content, lawn organic fertilizer with a high nitrogen content, or plant nitrogen-fixing cover crops like peas or beans."
    }
    else if (b > 40) {
        text2 = "Soil nitrogen content is too high for growing crops. Add more mulch, more water, and don’t use fertilizers that contain nitrogen."
    }
    else {
        text2 = "Soil nitrogen content is optimum for growing crops."
    }

    if (c < 30) {
        text3 = "Soil phosphorus content is too low for growing crops. Add either bone meal, rock phosphate, or fertilizer with a high phosphorus content."
    }
    else if (c > 50) {
        text3 = "Soil phosphorus content is too high for growing crops. Eliminate the use of organic composts and manure and don’t use fertilizers that contain phosphorus."
    }
    else {
        text3 = "Soil phosphorus content is optimum for growing crops."
    }

    if (d < 140) {
        text4 = "Soil potassium content is too low for growing crops. Add either kelp/seaweed, wood ash, or Sul-Po-Mag fertilizer."
    }
    else if (d > 170) {
        text4 = "Soil potassium content is too high for growing crops. Loosen the soil with a garden fork or shovel, then water deeply to dissolve and flush out the surplus in potassium-rich soil. Allow the soil to dry completely, then repeat two or three more times. Don’t use fertilizers that contain potassium."
    }
    else {
        text4 = "Soil potassium content is optimum for growing crops."
    }

    var ph = document.form1.pH.value;
    var nitrogen = document.form1.Nitrogen.value;
    var phosphorus = document.form1.Phosphorus.value;
    var potassium = document.form1.Potassium.value;
    var status = false;

    if (isNaN(ph) || ph < 0 || ph > 14 || ph == "") {
        document.getElementById("pHvalid").innerHTML = "Please enter a valid pH value";
        status = false;
    }
    else {
        document.getElementById("pHvalid").innerHTML = "";
        status = true;
    }

    if (isNaN(nitrogen) || nitrogen < 0 || nitrogen == "") {
        document.getElementById("Nitrogenvalid").innerHTML = "Please enter a valid Nitrogen value";
        status = false;
    }
    else {
        document.getElementById("Nitrogenvalid").innerHTML = "";
        status = true;
    }

    if (isNaN(phosphorus) || phosphorus < 0 || phosphorus == "") {
        document.getElementById("Phosphorusvalid").innerHTML = "Please enter a valid Phosphorus value";
        status = false;
    }
    else {
        document.getElementById("Phosphorusvalid").innerHTML = "";
        status = true;
    }

    if (isNaN(potassium) || potassium < 0 || potassium == "") {
        document.getElementById("Potassiumvalid").innerHTML = "Please enter a valid Potassium value";
        status = false;
    }
    else {
        document.getElementById("Potassiumvalid").innerHTML = "";
        status = true;
    }
    
    if (!(isNaN(ph)) && !(ph == "") && !(ph < 0) && !(ph > 14) && nitrogen > 0 && phosphorus > 0 && potassium > 0) {
        document.getElementById("crop").innerHTML = text1;
        document.getElementById("nitro").innerHTML = text2;
        document.getElementById("phospho").innerHTML = text3;
        document.getElementById("potass").innerHTML = text4;
    }
    else {
        document.getElementById("crop").innerHTML = "";
        document.getElementById("nitro").innerHTML = "";
        document.getElementById("phospho").innerHTML = "";
        document.getElementById("potass").innerHTML = "";
    }
}  

const recommendForm = document.querySelector(".recommendForm");
recommendForm.addEventListener("submit", handleRecommend)