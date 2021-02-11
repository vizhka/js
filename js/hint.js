function authenticateUser (userName, password){
    let xhr = new XMLHttpRequest ();
    xhr.open('GET','https://shmzvr.ru' + userName + 
    '$password=' + password, true);
    xhr.responseType = "json";
    xhr.send();
    let result = false;
    xhr.onload = function (){
        if (xhr.status !== '200'){
            result = xhr.response;
        } else {
            result = true;
        }
    };
    return result;
}
$('form #login').click(function(){
    let userName = $('#username');
    let password = $('password');
    let res = authenticateUser(userName, password);
    if (res == true) {
        document.location.href = '/home.html';
    }
    else {
        alert(res.error);
    }
});