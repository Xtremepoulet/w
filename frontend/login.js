// Insert your code here


document.querySelector('#register').addEventListener('click', () => {

    const name = document.querySelector('#registerName').value;
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;


    data = {
        password: password, 
        name: name,
        email: email,
    }

    fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {console.log(data)
        window.location.assign('./index.html')
    })
})




// Au clic sur le bouton #connection, envoyez les informations renseignées dans les différents champs vers le backend avec la toute POST /signin.
// Si les informations sont correctes et qu’elles correspondent bien à un utilisateur en BDD, renvoyez true et redirigez votre page vers index.html (en utilisant window.location.assign()).


document.querySelector('#connection').addEventListener('click', () => {

    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;


    data = {
        password: password, 
        email: email,
    }

    fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {console.log(data)
        window.location.assign('./index.html')
    })
    
})