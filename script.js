function toggleDiv() {
  var div = document.getElementById("myDiv");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validazione dei campi
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Per favore, completa tutti i campi.");
    return;
  }

  // Simulazione di un invio del modulo (puoi gestire l'invio al tuo server qui)
  // In questo esempio, visualizziamo solo un messaggio di successo.
  document.getElementById("successMessage").style.display = "block";

  // Puoi aggiungere qui la logica per inviare i dati a un server tramite AJAX o altre tecniche.
}


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('scrollToTopBtn').style.display = 'block';
    } else {
      document.getElementById('scrollToTopBtn').style.display = 'none';
    }
  };

  // Funzione per tornare su della pagina con uno smooth scroll
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }