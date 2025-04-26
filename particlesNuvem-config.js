tsParticles.load("particles-projects", {
    particles: {
      number: { value: 200 },  // Aumenta o número de partículas para dar mais densidade
      shape: {
        type: "circle",  // Forma das partículas
      },
      size: {
        value: 4,  // Tamanho das partículas
      },
      move: {
        enable: true,
        speed: 1.5,  // Velocidade mais suave para o efeito de nuvem
        direction: "none",
        outModes: {
          default: "out",
        },
      },
      opacity: {
        value: 0.3,  // Opacidade baixa para criar um efeito de névoa
        random: true,
      },
      color: {
        value: "#ffffff",  // Cor branca, como nuvem
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",  // Efeito de repulsão quando o mouse passa
        },
      },
    },
    retina_detect: true,
  });
  