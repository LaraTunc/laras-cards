export const fullNameIsValid = (fullName)=>{
    if(fullName.length<2) {
        return false;
    } else {
        return true;
    };
};

export const emailIsValid = (email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        return true;
    } else {
        return false;
    };
};

export const passwordIsValid = (password)=> {
    // fix this and add characters and longer than 8 
    if(password.length>2){
        return true;
    } else {
        return false;
    };
};