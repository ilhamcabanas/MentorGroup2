function kosong()
    {   
    // tangkat proses request
    var frm = document.getElementById("frmlog");
    frm.user.value = "";
    frm.pass.value = "";
    }
function vallog()
{
    //tangkat proses request
    var frm = document.getElementById("frmlog");
    var nama = frm.user.value;
    var sandi = frm.pass.value;
   
    //validasi data user & Password
    if (nama == "admin" && sandi == "admin")
    {
        alert("Selamat Anda Sukses Login Sebagai admin");
    }
    else if (nama == "budi" && sandi == "budi")
    {
        alert("Selamat Anda Sukses Login Sebagai Operator");
    }
    else
    {
        alert("Maaf Anda Gagal Login");
    }   
   
}
