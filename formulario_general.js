const form=document.getElementById('form');
const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
const telefono=document.getElementById('telefono');
const direccion=document.getElementById('direccion');
const ciudad=document.getElementById('ciudad');
const pais=document.getElementById('pais');
const fechaNacimiento=document.getElementById('fecha_nacimiento');
const sexo=document.getElementById('sexo');
const terminos=document.getElementById('terminos');
const btnRegistrar=document.getElementById('btn');
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}