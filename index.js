// Add your code here
function submitData(firstName, email){
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body:JSON.stringify({
            "name": firstName,
            "email": email
            
        })
    }
    return fetch("http://localhost:3000/users", configObj)
    .then(res => res.json())
    .then(body => addNewContact(body.id))
    
    .catch(error => document.body.append('Unauthorized Access'))
}
function addNewContact(newID){
    document.getElementsByTagName("body")[0].innerHTML=newID;
    document.body.append(message)
}
submitData("name", "name@name.com")