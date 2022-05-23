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
//show error message
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
//show success message
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
//check email is valid
function isValidEmail(input){
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'Email no valido');
    }
}
//check required field
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} es requerido`);
        }else{
            showSuccess(input);
        }
    });
}
//check input length
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} debe tener al menos ${min} caracteres`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} debe tener menos de ${max} caracteres`);
    }else{
        showSuccess(input);
    }
}
//check password match
function checkPasswordMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'Las contraseñas no coinciden');
    }
}
//check sexo
function checkSexo(input){
    if(input.value==='default'){
        showError(input,'Seleccione un sexo');
    }else{
        showSuccess(input);
    }
}
//get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
//event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([nombre,apellido,email,password,password2,telefono,direccion,ciudad,pais,fechaNacimiento,sexo,terminos]);
    checkLength(nombre,3,15);
    checkLength(apellido,3,15);
    checkLength(telefono,10,10);
    checkLength(direccion,5,50);
    checkLength(ciudad,3,15);
    checkLength(pais,3,15);
    checkLength(fechaNacimiento,10,10);
    checkPasswordMatch(password,password2);
    isValidEmail(email);
});