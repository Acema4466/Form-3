<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign up</title>
    <link rel="stylesheet" href="form.css">
    <script defer src="form.js"></script>
</head>
<body>
    <form method="post" action="" id="form">
        <h1>Registration</h1>
        <div class="input">
        <label for="fname" >First Name:</label>
        <input type="text" name="fname" placeholder="First Name" autofocus id="fname">
        <div class="error"></div>
        </div>
        
        <div class="input">
        <label for="lname">Last Name:</label>
        <input type="text" name="lname" placeholder="Last name" id="lname">
     <div class="error"></div>   
        </div>
        
        <div class="input">
        <label for="username">Username:</label>
        <input type="text" name="username" placeholder="Username" id="username">
      <div class="error"></div>  
        </div>
        
        <div class="input">
        <label for="tel">Telephone:</label>
        <input type="tel" name="tel" placeholder="Phone Number" id="tel">
       <div class="error"></div>
  </div>      
       
       <div class="input"> 
        <label for="dob">Date Of Birth:</label>
        <input type="date" name="dob" placeholder="Date of Birth" id="dob">
         <div class="error"></div>
        </div>
        
        <div class="input">
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="email" id="email">
       <div class="error"></div>  
        </div>
        
      <div class="input">  
        <label for="password">Password:</label>
        <input type="password" name="Password" placeholder="password" id="password">
       <div class="error"></div>  
       </div> 
        
       <div class="input"> 
        <label for="confirmpassword">Confirm Password:</label>
        <input type="password" name="confirmpassword" placeholder="confirm password" id="confirmpassword">
        <div class="error"></div> 
        </div>
        
        
        <button type="submit">Sign up</button>
     <br>  
      <br>  
   <a href="signin.html">I already have an account</a>     
        
    </form>
</body>
</html>
