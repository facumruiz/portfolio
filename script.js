let currentLanguage = 'en';

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Cambiar color de texto de los botones de idioma cuando se cambie el tema
    updateLanguageButtonColors();
}
function getTechIcons(technologies) {
    const techs = technologies.split(','); // Asumimos que las tecnologías están separadas por comas

    const icons = {
        "react": "<i class='fab fa-react'></i>",
        "mongo": "<i class='fas fa-database'></i>",
        "mongoose": "<i class='fas fa-cogs'></i>",
        "firebase": "<i class='fab fa-fire'></i>",
        "html": "<i class='fab fa-html5'></i>",
        "bootstrap": "<i class='fab fa-bootstrap'></i>",
        "javascript": "<i class='fab fa-js'></i>",
        "express": "<i class='fab fa-node'></i>",
        "material-ui": "<i class='fab fa-react'></i>",  // Material-UI puede asociarse con React
    };

    return techs.map(tech => icons[tech.trim().toLowerCase()] || "").join(' '); // Mapear las tecnologías y generar los iconos
}

function changeLanguage(language) {
    currentLanguage = language;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const langData = data[language];

            // Actualizar perfil
            document.getElementById('profile-name').textContent = langData.profile.name;
            document.getElementById('profile-title').textContent = langData.profile.title;
            document.getElementById('profile-description').textContent = langData.profile.description;
            document.getElementById('contact-button').textContent = langData.contact.header;

            // Actualizar proyectos
            const projectsContainer = document.getElementById('projects-container');
            projectsContainer.innerHTML = '';
            langData.projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('card');

                projectCard.innerHTML = `
    <video class="card-img-top" autoplay muted loop>
        <source src="${project.image}" type="video/webm">
        Your browser does not support the video tag.
    </video>
    <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
            <h5 class="card-title mb-4">${project.title}</h5>
            <div class="tech-icons mb-4 mr-3">
                ${getTechIcons(project.technologies)}
            </div>
        </div>
        <p class="card-text">${project.description}</p>
        ${project.demo_link
                        ? `<a href="${project.demo_link}" class="btn btn-primary mt-3" target="_blank">Demo</a>`
                        : `<button class="btn btn-primary mt-3" disabled>Demo</button>`
                    }
    </div>
                `;
                projectsContainer.appendChild(projectCard);
            });

            // Actualizar formulario de contacto
            document.getElementById('contact-header').textContent = langData.contact.header;
            document.getElementById('name').placeholder = langData.contact.name_placeholder;
            document.getElementById('email').placeholder = langData.contact.email_placeholder;
            document.getElementById('message').placeholder = langData.contact.message_placeholder;
            document.getElementById('send-message-button').textContent = langData.contact.send_message;

            // Actualizar footer
            document.querySelector('.footer span').textContent = langData.footer.text;
        });

    // Actualizar los colores de los botones de idioma
    updateLanguageButtonColors();
}


function updateLanguageButtonColors() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const languageButtons = document.querySelectorAll('#btn-en, #btn-es');

    languageButtons.forEach(button => {
        if (isDarkMode) {
            button.style.color = 'white'; // Color blanco en modo oscuro
        } else {
            button.style.color = 'black'; // Color negro en modo claro
        }
    });
}

// Iniciar con los colores correctos al cargar la página
updateLanguageButtonColors();

changeLanguage(currentLanguage);
// Mostrar/ocultar el botón al hacer scroll
window.addEventListener("scroll", () => {
    const scrollTopButton = document.querySelector(".scroll-to-top");
    if (window.scrollY > 200) {
        scrollTopButton.style.display = "flex"; // Mostrar el botón
    } else {
        scrollTopButton.style.display = "none"; // Ocultar el botón
    }
});

// Función para desplazarse al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
}


const form = document.getElementById("contact-form-submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Crear el objeto FormData a partir del formulario
  const formData = new FormData(form);

  // Verificar el contenido de FormData
  console.log([...formData]);  // Muestra el contenido del formulario

  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse.length > 0) {
    document.getElementById("errorCaptcha").innerHTML = "🛑Captcha not complete🛑";
  } else {
    sendMail(formData);
  }
});

const sendMail = (mail) => {
  fetch("https://nodemailerapi-dt78.onrender.com/send", {
    method: "POST",
    body: mail,
  })
  .then((response) => response.text())  // Si esperas texto
  .then((data) => {
   
    document.getElementById("errorCaptcha").innerHTML = "✅Email sent successfully. thks😉";
  })
  .catch((error) => {
    console.error('Error:', error);
    document.getElementById("errorCaptcha").innerHTML = "🛑 Error occurred 🛑";
  });
};

