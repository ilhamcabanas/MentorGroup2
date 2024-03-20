function biodata(){
	let frm = document.getElementById('frm');
	let nama = form.nama.value:
	let pekerjaan = form.pekerjaan.value;
	let hoby = form.hoby.value;
	
	let tdkinput = "Maaf, Isi Form Terlebih Dahulu!";
	let input = `Nama : ${nama}, Pekerjaan : ${pekerjaan}, Hoby : ${hoby}`;

	let Hasil = nama && pekerjaan && hoby != "" ? input : tdkinput;

	document.getElementById("Hasil").innerText = Hasil;
	//tugasnya adalah lengkapi kode berikut dan tampilan ada pada HTML
	//1. isian nama
	//2. isian pekerjaan
	//3. isian hobby
}