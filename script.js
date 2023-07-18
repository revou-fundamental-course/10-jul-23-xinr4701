
function hitungBMI() {
    let form = document.getElementById("bmi");
    let gender = form.elements['gender'].value;
    let berat = parseInt(form.elements['berat'].value);
    let umur = form.elements['umur'].value;
    let tinggi = form.elements['tinggi'].value;
    //validasi inputan
    if (umur == 0 || berat == 0 || tinggi == 0 || gender == "") {
        document.getElementById("error").textContent="Mohon perbaiki inputan, nilai tidak boleh  0 dan semua harus diisi";
    }else {
    //hasil
        document.getElementById("error").textContent=berat/(tinggi/100)**2
    }
}