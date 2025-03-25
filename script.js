function SendMess(){
    let parameters = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_zfxi21f","template_obrw16t", parameters).then(function(res){
        alert('SUCCESS!' + res.status);
    } );
}