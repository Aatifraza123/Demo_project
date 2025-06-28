function goBack() {
       alert("Abhi na jao chor ke 🌸");
      window.location.href = "index.html";
    }

    const flowerEmojis = ["🌸", "🌹", "🌼", "💐", "🌷", "🥀", "🌻"];
    function createFlower() {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = 3 + Math.random() * 5 + "s";
      flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      document.body.appendChild(flower);
      setTimeout(() => flower.remove(), 8000);
    }
    setInterval(createFlower, 300);

    function launchConfetti(fromLeft = true) {
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = fromLeft ? "40px" : "calc(100% - 40px)";
        confetti.style.bottom = "40px";
        confetti.style.setProperty("--x", (Math.random() - 0.5) * 300 + "px");
        confetti.style.setProperty("--y", -Math.random() * 300 + "px");
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 1000);
      }
    }

    function getRandomColor() {
      const colors = ["#ff1493", "#ff6347", "#ffd700", "#00fa9a", "#00bfff", "#da70d6", "#ff69b4"];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(() => {
      launchConfetti(true);
      launchConfetti(false);
    }, 2000);

    const messages = [
      "You are my everything 💕",
      "My heart beats for you 💓",
      "You're the smile to my soul 😊",
      "Forever yours... 💍",
      "You're my peace in chaos 🌈"
    ];

    let msgIndex = 0;
    let charIndex = 0;
    const autoBox = document.getElementById("autoMessage");

    function typeMessage() {
      if (msgIndex >= messages.length) msgIndex = 0;

      const currentText = messages[msgIndex];
      if (charIndex <= currentText.length) {
        autoBox.innerText = currentText.substring(0, charIndex);
        charIndex++;
        setTimeout(typeMessage, 80);
      } else {
        charIndex = 0;
        msgIndex++;
        setTimeout(typeMessage, 1500);
      }
    }

    typeMessage();