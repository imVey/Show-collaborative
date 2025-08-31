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

// Données des technologies & JavaScript amélioré pour des animations plus fluides

const techData = {
  nextjs: {
    title: "Next.js",
    description:
      "Framework React avec rendu hybride (SSR/SSG) pour des performances optimales. Il combine le meilleur du rendu côté serveur et de la génération statique pour créer des applications web rapides et SEO-friendly.",
  },
  socketio: {
    title: "Socket.io",
    description:
      "Bibliothèque de communication bidirectionnelle en temps réel entre client et serveur. Parfait pour créer des applications interactives comme des chats, des jeux multijoueurs ou des tableaux de bord collaboratifs.",
  },
  postgresql: {
    title: "PostgreSQL",
    description:
      "Base de données relationnelle robuste avec support JSON et fonctionnalités avancées. Reconnue pour sa fiabilité, ses performances et sa conformité aux standards SQL, elle est idéale pour les applications critiques.",
  },
};

function showCard(tech) {
  const info = techData[tech];
  if (info) {
    const infoCard = document.getElementById("infoCard");

    // Mettre à jour le contenu avant l'animation
    document.getElementById("cardTitle").textContent = info.title;
    document.getElementById("cardDescription").textContent = info.description;

    // Ajouter la classe pour déclencher l'animation
    infoCard.classList.add("show");

    // Scroll fluide vers la card après l'animation
    setTimeout(() => {
      infoCard.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 500); // Délai légèrement plus long pour laisser l'animation se terminer
  }
}

function hideCard() {
  const infoCard = document.getElementById("infoCard");
  infoCard.classList.remove("show");
}

// Event listeners
document.querySelectorAll(".tech-badge").forEach((badge) => {
  badge.addEventListener("click", function () {
    const tech = this.dataset.tech;
    showCard(tech);
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") hideCard();
});

document.addEventListener("click", function (e) {
  const infoCard = document.getElementById("infoCard");
  if (
    infoCard.classList.contains("show") &&
    !infoCard.contains(e.target) &&
    !e.target.classList.contains("tech-badge")
  ) {
    hideCard();
  }
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
