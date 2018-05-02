export const update = (data) => {
    let msg = "";
    const namePattern = /^[a-zA-Z\s]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@]{8,}$/;

    if(data.firstname ==='' || data.lastname ==='' || data.password ===''){
        msg = "All fields are mandatory. Please fill all details";
        return msg;
    }
    if (!(namePattern.test(data.firstname))) {
        msg = "Enter correct First Name";
        return msg;
    }
    if(!(namePattern.test(data.lastname))){
        msg = "Enter correct Last Name";
        return msg;
    }
    if (data.password.length<8 || data.password.length>15) {
        msg = "Password must be 8 to 15 character long";
        return msg;
    }
    if (!(passwordPattern.test(data.password))) {
        msg = "Password should contain one small letter, \n one capital letter, one digit \nand one special character @ ";
        return msg;
    }
    return msg;
};
