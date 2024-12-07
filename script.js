// particles.js configuración
particlesJS('particles-js', {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#FF6600"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#FF6600"
        }
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 1
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#FF6600",
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    },
    retina_detect: true
  });
  
  // Abrir el modal al hacer clic en "Ver Código QR"
  document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
  });
  
  // Cerrar el modal al hacer clic en el botón "X"
  document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });
  
  // Simular pago realizado
  document.getElementById("simularPagoBtn").addEventListener("click", function() {
    // Cambiar estado de los pasos
    document.getElementById("step1").classList.add("completed");
    document.getElementById("step2").classList.add("active");
  
    // Mostrar mensaje de éxito
    document.getElementById("successMessage").style.display = "block";
  
    // Cerrar modal después de un retraso
    setTimeout(function() {
      document.getElementById("modal").style.display = "none";
    }, 500);
  
    // Barra de progreso
    let progress = 0;
    let progressBar = document.getElementById("progressBar");
    document.getElementById("progressBarContainer").style.display = "block";
  
    let interval = setInterval(function() {
      progress += 10;
      progressBar.style.width = progress + "%";
  
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(function() {
          document.getElementById("uploadBtn").style.display = "block"; // Mostrar botón de subir comprobante
        }, 1000);
      }
    }, 300);
  });
  
  // Subir comprobante y redirigir a la ventana anterior
  document.getElementById("uploadBtn").addEventListener("click", function() {
    // Simular el proceso de subida y luego redirigir a la página anterior
    window.history.back(); // Redirige a la página anterior en el historial
  });
  