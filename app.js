 document.getElementById('name').addEventListener('blur',validateName);


 document.getElementById('email').addEventListener('blur',validateEmail);

 document.getElementById('pass').addEventListener('blur',validatePass);

 document.getElementById('cpass').addEventListener('blur',correct);




function validateName() {
  const name=document.getElementById('name');
   const re=/^[a-zA-Z \ ]{5,20}$/;

   const text= document.getElementById('text');

   if(!re.test(name.value)) {
    name.style.borderColor='Red';
     text.textContent='Username is not valid'
     text.style.marginBottom='20px'
     text.style.marginLeft='20px'
     setTimeout(()=>{
      text.remove();
    }, 2000)
    name.value='';
  } else{
     name.style.borderColor='lightGreen';
   }
}



function validateEmail() {
   const email=document.getElementById('email');
   const re=/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/;
    
      const p1= document.getElementById('p1');

      if(!re.test(email.value)) {
       email.style.borderColor='Red';
        p1.textContent='Email is not valid';
        p1.style.marginBottom='20px';
        p1.style.marginLeft='20px';
        setTimeout(()=>{
          p1.remove();
        }, 2000)
        email.value='';
     } else{
        email.style.borderColor='lightGreen';
      }
}


const pass= document.getElementById('pass');
function validatePass () {
   
   const re=/[a-zA-Z#?!?*?@?]{6,15}/;

   const secure=document.getElementById('secure');

   if(! re.test(pass.value)) {
      pass.style.borderColor='red';
      secure.textContent='Password must be atleast 6 characters';
      secure.style.marginBottom='20px'
      secure.style.marginLeft='20px'
      setTimeout(()=>{
         secure.remove();
       }, 2000)
       pass.value='';
   } else{
      pass.style.borderColor='lightGreen';
   }
}


function correct () {
 const cpass=document.getElementById('cpass');
 const word=document.getElementById('word');
 if (pass.value===cpass.value) {
    cpass.style.borderColor='lightGreen';
 } else {
    cpass.style.borderColor='red';
    word.textContent='Password do not match!!';
    word.style.marginBottom='20px';
    word.style.marginLeft='20px';
    setTimeout(()=>{
      word.remove();
    }, 2000)
    cpass.value='';
 }
}



