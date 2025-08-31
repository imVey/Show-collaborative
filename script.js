// Simulation d'une conversation en temps réel
const messages = [
  {
    author: "David 🎯",
    text: "On pourrait ajouter des notifications push ?",
    time: "À l'instant",
  },
  {
    author: "Emma 📊",
    text: "J'ai mis à jour les métriques en temps réel",
    time: "À l'instant",
  },
  {
    author: "Frank ⚡",
    text: "Performance optimisée ! Temps de chargement divisé par 2",
    time: "À l'instant",
  },
  {
    author: "Grace 🔐",
    text: "Sécurité renforcée avec JWT et validation côté serveur",
    time: "À l'instant",
  },
];

let messageIndex = 0;

function sendMessage() {
  const input = document.getElementById("messageInput");
  const chatDemo = document.getElementById("chatDemo");

  if (input.value.trim()) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.innerHTML = `
                    <div class="message-author">Vous 🎉</div>
                    <div class="message-text">${input.value}</div>
                    <div class="message-time">À l'instant</div>
                `;

    chatDemo.appendChild(messageDiv);
    chatDemo.scrollTop = chatDemo.scrollHeight;
    input.value = "";

    // Simulation d'une réponse automatique
    setTimeout(() => {
      if (messageIndex < messages.length) {
        const autoMessage = document.createElement("div");
        autoMessage.className = "message";
        autoMessage.innerHTML = `
                            <div class="message-author">${messages[messageIndex].author}</div>
                            <div class="message-text">${messages[messageIndex].text}</div>
                            <div class="message-time">${messages[messageIndex].time}</div>
                        `;
        chatDemo.appendChild(autoMessage);
        chatDemo.scrollTop = chatDemo.scrollHeight;
        messageIndex++;
      }
    }, 1500);
  }
}

// Envoi avec Enter
document
  .getElementById("messageInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

// Animation des badges tech
document.querySelectorAll(".tech-badge").forEach((badge) => {
  badge.addEventListener("click", function () {
    const tech = this.dataset.tech;
    let info = "";

    switch (tech) {
      case "nextjs":
        info =
          "Framework React avec rendu hybride (SSR/SSG) pour des performances optimales";
        break;
      case "socketio":
        info =
          "Bibliothèque de communication bidirectionnelle en temps réel entre client et serveur";
        break;
      case "postgresql":
        info =
          "Base de données relationnelle robuste avec support JSON et fonctionnalités avancées";
        break;
    }

    alert(`${this.textContent}\n\n${info}`);
  });
});

// Effet parallaxe léger sur les éléments flottants
document.addEventListener("mousemove", function (e) {
  const circles = document.querySelectorAll(".floating-circle");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  circles.forEach((circle, index) => {
    const speed = (index + 1) * 0.5;
    const xPos = (x - 0.5) * speed * 20;
    const yPos = (y - 0.5) * speed * 20;

    circle.style.transform = `translate(${xPos}px, ${yPos}px)`;
  });
});
