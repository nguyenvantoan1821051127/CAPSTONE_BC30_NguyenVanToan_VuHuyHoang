import { Register } from "../models/User.js";

// debugger;
document.getElementById('btnSubmit').onclick =async function() {
    let user = new Register();
    user.email = document.getElementById('email').value;
    user.password = document.getElementById('password').value;
    user.name = document.getElementById('name').value;
    user.phone = +document.getElementById('phone').value;
    user.gender = document.getElementById('gender').value;


    // if(user.gender === undefined ){
    //     return alert ("chưa điền thông tin giới tính kìa bạn");
    // }
    let isValid=validation()
    if(!isValid){
        return alert('vui long kiem tra gia tri')
    }
    // var mess = '';
    // var promsise = axios ({
    //     url: 'https://shop.cyberlearn.vn/api/Users/signup',
    //     method: 'POST',
    //     data: user,
    // });
    // promsise.then(function(result){
    //     console.log('result',result);
    //     mess='them thanh cong';
    // })
    // promsise.catch(function(err){
    //     console.log('err',err.response?.data);
    //     mess='them that bai';
    // })

    var mess = '';
    try {
        let result = await axios ({
            url: 'https://shop.cyberlearn.vn/api/Users/signup',
            method: 'POST',
            data: user,
    
        });
        mess = result.data
        console.log(mess.content)
        alert (mess.message);
    }
    catch (err){
        console.log(err.response?.data.content)
        alert('Email này đã được sử dụng để đăng kí');
    }
    resertform()
}
function validation(){
    // debugger;
    var isValid=document.getElementById('btnFrom').checkValidity()
    
    if(!isValid){
        let inputEmail=document.getElementById('email');
        let spanEmail=document.getElementById('spanEmail');
        if(inputEmail.validity.valueMissing){
            spanEmail.innerHTML='Email không được để trống';
        }else if(inputEmail.validity.patternMismatch){
            spanEmail.innerHTML='Email khong dung dinh dang'
        }else{
            spanEmail.innerHTML='';
        }

        let inputPassword=document.getElementById('password');
        let spanPassword=document.getElementById('spanPassword');
        if(inputPassword.validity.valueMissing){
            spanPassword.innerHTML='Password không được để trống';
        }else if(inputPassword.validity.patternMismatch){
            spanPassword.innerHTML='Password khong dung dinh dang'
        }else{
            spanPassword.innerHTML='';
        }
        let inputSetPassword=document.getElementById('setPassword');
        let spanSetPassword=document.getElementById('spanSetpassword');
        if(inputPassword.value !== inputSetPassword.value){
            spanSetPassword.innerHTML = 'Password chưa giống nhau ';

        } else {
            spanSetPassword.innerHTML = '';
        }
        let inputName=document.getElementById('name');
        let spanName=document.getElementById('spanName');
        if(inputName.validity.valueMissing){
            spanName.innerHTML='Name khong duoc de trong';
        }else if(inputName.validity.patternMismatch){
            spanName.innerHTML='Name khong dung dinh dang';
        }else{
            spanName.innerHTML='';
        }
        let inputPhone=document.getElementById('phone');
        let spanPhone=document.getElementById('spanPhone');
        if(inputPhone.validity.valueMissing){
            spanPhone.innerHTML='phone khong duoc de trong';
        }else{
            spanPhone.innerHTML='';
        }
    }
    return isValid;
}

function resertform(){
    //resert input
    document.getElementById("email").value="";
    document.getElementById("passsword").value="";
    document.getElementById("setpassword").value="";
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("gender").value=""
    
    //resert span loi
    document.getElementById("email").innerHTML="";
    document.getElementById("password").innerHTML="";
    document.getElementById("setpassword").innerHTML="";
    document.getElementById("name").innerHTML="";
    document.getElementById("phone").innerHTML="";
    document.getElementById("gender").innerHTML="";
  }