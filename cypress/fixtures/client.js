import * as client from "./client.json"

const eamilprefix = Math.random().toString(36).substring(2,7);
const email = eamilprefix+"test@papernest.com"
export  const clientData ={
    
    email: email,
    firstname: client.firstName,
    lastname: client.lastName,
    phone: client.phone,
    oldAdress: client.oldAdress,
    newAdress: client.oldAdress
  
}