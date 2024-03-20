function dataPerson() {
  const form = document.getElementById("form");
  const name = form.nama.value;
  const job = form.pekerjaan.value;
  const hoby = form.hobi.value;

  const noInput = "Maaf, Isi Form Dahulu!";
  const input = `Nama : ${name}, Pekerjaan : ${job}, Hobi : ${hoby}`;
	
  const Hasil = name && job && hoby != "" ? input : noInput;
  document.getElementById("Hasil").innerText = Hasil;
}
