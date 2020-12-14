let username = sessionStorage.getItem('Username');
let id = sessionStorage.getItem('Id');
let email = sessionStorage.getItem('Email');
let progress = sessionStorage.getItem('Progress');
let death = sessionStorage.getItem('Death');



const fetcha=()=>{
    

            document.querySelector('#username').innerHTML=username;
            document.querySelector('#id').innerHTML=id;
            document.querySelector('#email').innerHTML=email;
            document.querySelector('#progress').innerHTML=progress;
            document.querySelector('#death').innerHTML=death;
 
}

export default fetcha;
