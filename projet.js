
const nomprenom = document.getElementById('nomprenom').value;
const email = document.getElementById('email').value;
const telephone = document.getElementById('telephone').value;
const adresse = document.getElementById('adresse').value;
const menu = document.getElementById('inputGroupSelect01').value;
const personnes = document.getElementById('inputGroupSelect02').value;
const quantite = document.getElementById('password1').value;
const note = document.getElementById('password2').value;
const commandeButton = document.getElementById("commander");
const result = document.querySelector('label');


const orderData = {
    nomprenom: nomprenom,
    email: email,
    telephone: telephone,
    adresse: adresse,
    menu: menu,
    personnes: personnes,
    quantite: quantite,
    note: note
  };


commandeButton.addEventListener("click", () => {
  
    // fetch('/y'a pas de serveur', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(orderData)
    //   })
    //   .then(response => {
    //     if (response.ok) {

          alert('Commande enregistrée avec succès !');
    //     } else {
        
    //       alert('Une erreur s\'est produite lors de l\'enregistrement de la commande.');
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     alert('Une erreur s\'est produite lors de l\'enregistrement de la commande.');
    //   });
  });
