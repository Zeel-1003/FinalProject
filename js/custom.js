function changeTheme() {
    if(document.getElementById('theme').classList.contains('bg-primary') ){
        document.getElementById('theme').classList.remove('bg-primary');
        document.getElementById('theme').classList.add('bg-secondary');
    }
    else{
        document.getElementById('theme').classList.add('bg-primary');
        document.getElementById('theme').classList.remove('bg-secondary');
    }
}

function changetheme(){
    if(document.documentElement.getAttribute('data-bs-theme') == "light"){
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
    else{
        document.documentElement.setAttribute('data-bs-theme','light')
    }
}