const first_name=document.getElementById('fname');
const last_name=document.getElementById('lname');
 telephone=document.getElementById('tel');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');

const form=document.getElementById('form');
const dob=document.getElementById('dob');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    });

const setError=(element, message) => {
    const inputControl=element.parentElement;
  const errorDisplay=inputControl.querySelector('.error');
    
        

 errorDisplay.innerText='message' ;  
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

    const setSuccess = element => {
        const inputControl=element.parentElement;
  const errorDisplay=inputControl.querySelector('.error');
    
        

 errorDisplay.innerText='' ;  
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
        
    };
    const isValidEmail= email => {
   const re= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(string(email).toLowerCase());   
        
    }
    
    

const validateInputs= () => {
    const first_nameValue=first_name.value.trim();
    last_nameValue=last_name.value.trim();
    
    usernameValue=username.value.trim();
    telephoneValue=telephone.value.trim();
    emailValue=email.value.trim();
    dobValue=dob.value.trim();
    passwordValue=password.value.trim();
    confirmpasswordValue=confirmpassword.value.trim();
    
    
  if(usernameValue==='') {
      setError(username, 'Username is required');
  }  
  else{
      setSuccess(username);
  }
  if(first_nameValue==='') {
      setError(first_name, 'First name is required');
  }  
  else{
      setSuccess(first_name);
  }  
if(last_nameValue==='') {
      setError(last_name, ' Last name is required');
  }  
  else{
      setSuccess(last_name);
  }
 if(emailValue==='') {
      setError(email, 'email is required');
  }  
  else{
      setSuccess(email);
  }   
 if(telephoneValue==='') {
      setError(telephone, 'Please, provide your telephone number');
  }  
  else{
      setSuccess(telephone);
  }   
 if(dobValue==='') {
      setError(dob, 'Please select your date of birth');
  }  
  else{
      setSuccess(dob);
  } 
  if(passwordValue==='') {
      setError(password, 'Password is required');
  }  
  else if(passwordValue.length<7) {
      setError(password, 'The password must be atleast 8 characters');
  }else{
      setSuccess(password);
  }
 if(confirmpasswordValue==='') {
      setError(password, 'Please, enter your password again');
  }  
  else if(confirmpasswordValue!==passwordValue) {
      setError(confirmpassword, 'The passwords do not match');
  }else{
      setSuccess(confirmpassword);
  }
   
    
}
