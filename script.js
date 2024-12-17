document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const link = document.getElementById('link').value;

    if (message.length <= 100 && link.length <= 100) {
        const fileContent = `${message}\n${link}`;
        const statusElement = document.getElementById('status');
        statusElement.textContent = 'Datele au fost adăugate. Încărcăm fișierul...';

        // Simulăm salvarea datelor într-un fișier text
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const file = new File([blob], 'messages.txt', { type: 'text/plain' });

        // Logica de push în GitHub - această parte trebuie să fie realizată pe backend, nu în frontend.
        // De obicei, pentru push în GitHub, se folosește un server backend care execută comenzi git.
        pushToGitHub(file);
    } else {
        alert('Mesajul și link-ul nu pot depăși 100 de caractere fiecare.');
    }
});

function pushToGitHub(file) {
    // Folosim un server backend pentru a implementa push-ul pe GitHub. 
    // Implementarea aceasta este doar un exemplu.
    alert("Fișierul ar trebui să fie încărcat pe GitHub printr-un server backend.");
}
