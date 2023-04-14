// Add your code here
function submitData(name, email){
    const newUser = {
        name: name,
        email: email
    }
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(newUser => {
            document.body.append(newUser.id)
         })
        .catch(error => {
            document.body.append(error.message)
        })

}
