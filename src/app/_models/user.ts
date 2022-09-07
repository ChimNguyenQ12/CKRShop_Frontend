export interface User {
    id : string,
    fullname: string,
    avatar:string,
    role: string,
    address: string,
    createdat:Date,
    status:number,
    username:string,
    normalizedusername:string,
    email:string,
    normalizedemail:string,
    emailconfirmed:boolean,
    passwordhash:string,
    securitystamp:string,
    concurrencystamp:string, p
    phonenumber:string,
    phonenumberconfirmed:boolean,
    twofactorenabled:boolean,
    lockoutend:string,
    lockoutenabled:boolean,
    cccessfailedcount:number,
  }  