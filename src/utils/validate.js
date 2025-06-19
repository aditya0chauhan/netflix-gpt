export const chackValidData = ( email , password ) => {
const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
if(!isEmailvalid) return "Your Email ID is not Valid";
if(!isPasswordvalid) return "Your Password is not Valid";
return null  ;
}