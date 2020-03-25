var userName=(document.getElementById("userName"));
var email=(document.getElementById("email"));
var gender=(document.getElementById("gender"));
var date=(document.getElementById("date"));
var blood=(document.getElementById("blood"));
var degree=(document.getElementById("degree"));
var ppic=(document.getElementById("ppic"));

function username_check(){

//user name empty checking
if( userName.value=="")
{
document.getElementById("userName_msg").innerHTML="please fill out this field";

return false;
}else{
document.getElementById("userName_msg").innerHTML="";
}

//charater only

if(!isNaN(userName.value))
{
document.getElementById("userName_msg").innerHTML="Character only";

return false;
}else{
document.getElementById("userName_msg").innerHTML="";
}

//user name at least two character
if( userName.value.length<2)
{
document.getElementById("userName_msg").innerHTML="username minimum 2 character or more";
 
}else{
document.getElementById("userName_msg").innerHTML="";
}
}

//Email check


function email_check(){
	
//Empty checking
if(email.value=="")
{
document.getElementById("email_msg").innerHTML="please fill out this field";
email.focus();
return false;

}else{
document.getElementById("email_msg").innerHTML="";
}

//0 or @ invalid position
var at_the_rate =email.value.indexOf('@');
var dot=email.value.indexOf('.');
console.log('at='+at_the_rate);
console.log('dot=+dot);
if(at_the_rate == -1 || dot == -1)
{
document.getElementById("email_msg").innerHTML="invalid email";// @ & . not present
email.focus();
return false;
}else{
document.getElementById("email_msg").innerHTML="";
}

//@ or dot invalid position

if(at_the_rate == 0 || dot == 0)
{
document.getElementById("email_msg").innerHTML="invalid email";// @ & . invalid position
email.focus();
return false;
}else{
document.getElementById("email_msg").innerHTML="";
}
// @ > or not

if(!(at_the_rate < dot ))
{
document.getElementById("email_msg").innerHTML="invalid email must be @ <'.'invalid position";
email.focus();
return false;
}else{
document.getElementById("email_msg").innerHTML="";
}
}

//gender

function gender_check(){
	if(gender.value!=""){
          if (gender[0].checked == true) {
                   document.getElementById("gender_msg").innerHTML="Your gender is male";
                } else if (genders[1].checked == true) {
                    document.getElementById("gender_msg").innerHTML="Your gender is female";
                } else {
                    // no checked
                    document.getElementById("gender_msg").innerHTML="please fill out this field";
                    return false;
                }
                return true;



}else{
document.getElementById("gender_msg").innerHTML="";
}
}
//date validation
function Date_check(){ 
    
    var ExpiryDate = document.getElementById(' ExpiryDate').value; 

    if (isDate(ExpiryDate)) { 
        alert('OK'); 
    } 
    else { 
        alert('Invalid date format!'); 
    } 
}

//degree
function degree_check(){
	if(degree.value!=""){
  document.getElementById("degree").checked = true;
}

else {
  document.getElementById("degree").checked = false;
}
}
//profile pic
function ppic_check(){
if(ppic.value=="")
{
document.getElementById("ppic_msg").innerHTML="please fill out this field";


}else{
document.getElementById("ppic_msg").innerHTML="";
}
}


//submit function
function myfunc(){
if( userName.value== '' || email.value== '' || gender.value== '' || date.value== '' || blood.value== '' || degree.value== '' || ppic.value== '')
{
	
if( userName.value=="")
{
document.getElementById("userName_msg").innerHTML="please fill out this field";


}
if(email.value=="")
{
document.getElementById("email_msg").innerHTML="please fill out this field";


}
if(gender.value=="")
{
document.getElementById("gender_msg").innerHTML="please click this field";

}
if(date.value=="")
{
document.getElementById("date_msg").innerHTML="please click this field";

}
if(blood.value=="")
{
document.getElementById("blood_msg").innerHTML="please click this field";

}
if(degree.value=="")
{
document.getElementById("degree_msg").innerHTML="please click this field";

}
if(ppic.value=="")
{
document.getElementById("ppic_msg").innerHTML="please click this field";

}
return false;

}
}