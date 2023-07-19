function hitungBMI() {
    let form = document.getElementById("bmi");
    let gender = form.elements['gender'].value;
    let berat = form.elements['berat'].value;
    let usia = form.elements['usia'].value;
    let tinggi = form.elements['tinggi'].value;
    //validasi inputan
    if (usia == 0 || berat == 0 || tinggi == 0 || gender == "") {
        document.getElementById("hasil").textContent="Mohon perbaiki inputan, nilai tidak boleh 0 dan semua harus diisi";
    }else {
    //hasil
        document.getElementById("hasil").textContent=berat/(tinggi/100)**2
    }
}

function calculateBMI() {
    let form = document.getElementById("bmi");
    let gender = form.elements["gender"].value;
    let weight = form.elements["weight"].value;
    let age = form.elements["age"].value;
    let height = form.elements["height"].value;
    let bmi = weight/(height/100)**2;
    let category = {
        1: "Anda kekurangan berat badan",
        2: "Berat badan anda normal",
        3: "Anda kelebihan berat badan",
        4: "Anda kegemukan(Obesitas)"
    }
    let bmiCategory;
    if (weight <= 0 || age <= 0 || height <= 0 || gender == "") {
        document.getElementById("error").textContent="Inputan salah mohon diperbaiki kembali";
        document.getElementById("error").style.backgroundColor = "#FF9B9B";
    } else {
        var genderID;
        if (bmi < 18.5) {
            bmiCategory = category[1];
        } else if (bmi < 25) {
            bmiCategory = category[2];
        } else if (bmi < 30) {
            bmiCategory = category[3];
        } else {
            bmiCategory = category[4];
        }
        if(gender == "male") {
            genderID= "Laki-Laki"
        } else {
            genderID= "Perempuan"
        }
        document.getElementById("calculator").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("error").textContent="";
        document.getElementById("bmiValue").textContent = bmi.toFixed(2);
        document.getElementById("genderValue").textContent = genderID
        document.getElementById("weightValue").textContent = weight;
        document.getElementById("ageValue").textContent = age;
        document.getElementById("heightValue").textContent = height;
        document.getElementById("bmiCategory").textContent = bmiCategory;
    }
}

function startCalculator() {
    document.getElementById("greeter").style.display = "none";
    document.getElementById("calculator").style.display = "block";
    document.getElementById("result").style.display = "none";
}