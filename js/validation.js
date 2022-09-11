function validation(){
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    if(mail== '' && password == ''){
        alert('Both field are required');
        return false;
    }
    if(mail==''){
        alert('Email field is required');
        return false;
    }
    if(password==""){
        alert('Password field is required');
        return false;
    }
    if(mail==password){
        alert('Both fields cannot be same');
        return false;
    }
}
