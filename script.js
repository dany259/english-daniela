/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* TEXTOS EN ESPAÑOL */

const ES = {
  "nav.home": "INICIO",
  "nav.about": "SOBRE MÍ",
  "nav.skills": "HABILIDADES",
  "nav.resume": "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact": "CONTACTO",

  "hero.role": "Desarrolladora Web · Soporte Técnico",

  "about.title": "Sobre Mí",
  "about.text": "Soy Laura Daniela Mendoza Castro, estudiante del programa Técnico Profesional en Programación Web de UniEspinal. Me apasiona descubrir cómo una idea puede convertirse en una experiencia digital útil para otras personas. Cada tema nuevo me motiva a practicar, afrontar retos y seguir creciendo en proyectos donde pueda aportar y aprender de quienes comparten mi interés por la tecnología.",
  "about.infoTitle": "Información",
  "about.labelLocation": "Ubicación",
  "about.valueLocation": "El Espinal, Tolima, Colombia",
  "about.labelEmail": "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (A1)",
  "about.labelStatus": "Disponibilidad",
  "about.valueStatus": "Abierta a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title": "Habilidades",
  "skills.technical": "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support": "Soporte al usuario",
  "skill.teamwork": "Trabajo en equipo",
  "skill.problem": "Resolución de problemas",
  "skill.english": "Inglés técnico",

  "resume.title": "Formación y experiencia",
  "resume.education": "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text": "Estoy aprendiendo a crear páginas web con HTML y CSS, añadir interactividad con JavaScript y trabajar con bases de datos como MySQL. También practico Git y GitHub para organizar cambios y colaborar en proyectos, mientras fortalezco mi lógica de programación y mi capacidad para resolver problemas.",

  "edu.2.title": "Fundamentos de desarrollo web",
  "edu.2.institution": "UniEspinal · Formación académica",
  "edu.2.text": "Durante mi formación practico la estructura de páginas con HTML, el diseño con CSS y los conceptos básicos de JavaScript. Estoy aprendiendo a organizar contenidos, modificar estilos y revisar errores para mejorar la presentación y el funcionamiento de mis páginas.",

  "exp.1.title": "Personalización de un portafolio web",
  "exp.1.institution": "Proyecto personal · Portafolio web",
  "exp.1.text": "Adapté una plantilla con HTML, CSS y JavaScript para presentar mi perfil académico. Organicé las secciones de información, habilidades y formación, personalicé los textos y ajusté los porcentajes de las barras. También trabajé en los contenidos en español e inglés.",

  "exp.2.title": "Actualización de contenidos con GitHub",
  "exp.2.institution": "Proyecto personal · Portafolio web",
  "exp.2.text": "Utilicé GitHub para editar los archivos HTML y JavaScript de mi portafolio y guardar las modificaciones. Revisé los cambios en los textos y aprendí a mantener actualizada la información del proyecto mediante mensajes de confirmación.",

  "portfolio.title": "Proyectos",

  "project.1.title": "Mi portafolio web",
  "project.1.text": "Perfil personal en español e inglés con información sobre mi formación, habilidades y experiencia. Desarrollado a partir de una plantilla con HTML, CSS y JavaScript.",
  "project.1.status": "Ver repositorio en GitHub →",

  "project.2.title": "Lista de tareas",
  "project.2.text": "Propuesta de práctica con HTML, CSS y JavaScript para agregar tareas, marcarlas como completadas y eliminarlas. Mi objetivo es practicar eventos y cambios en la página.",
  "project.2.status": "Próximo proyecto de práctica",

  "project.3.title": "Registro de estudiantes",
  "project.3.text": "Propuesta de práctica para diseñar una base de datos con MySQL y realizar consultas sobre registros de estudiantes. Mi objetivo es aprender a organizar y consultar información.",
  "project.3.status": "Próximo proyecto de práctica",

  "contact.title": "Contacto",
  "contact.intro": "Me interesa aprender, colaborar en proyectos y encontrar oportunidades de prácticas. Puedes escribirme por correo o conocer mi trabajo en GitHub.",
  "contact.emailLabel": "Correo",
  "contact.repositoryLabel": "Portafolio",
  "contact.repositoryValue": "Consulta el código de mi página",

  "footer.note": "Laura Daniela Mendoza Castro · Técnico Profesional en Programación Web · UniEspinal"
};


/* TEXTOS EN INGLÉS */

const EN = {
  "nav.home": "HOME",
  "nav.about": "ABOUT",
  "nav.skills": "SKILLS",
  "nav.resume": "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact": "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title": "About Me",
  "about.text": "I am Laura Daniela Mendoza Castro, a Web Programming student at UniEspinal. I am passionate about learning how ideas can become useful websites for other people. Each new topic motivates me to practice, face challenges, and grow through projects where I can contribute and learn from others.",
  "about.infoTitle": "Information",
  "about.labelLocation": "Location",
  "about.valueLocation": "El Espinal, Tolima, Colombia",
  "about.labelEmail": "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (A1)",
  "about.labelStatus": "Availability",
  "about.valueStatus": "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title": "Skills",
  "skills.technical": "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support": "User support",
  "skill.teamwork": "Teamwork",
  "skill.problem": "Problem solving",
  "skill.english": "Technical English",

  "resume.title": "Education and experience",
  "resume.education": "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text": "I am learning to build web pages with HTML and CSS, add interactivity with JavaScript, and work with databases such as MySQL. I also practice Git and GitHub to organize changes and collaborate on projects while developing my programming and problem-solving skills.",

  "edu.2.title": "Web development fundamentals",
  "edu.2.institution": "UniEspinal · Academic training",
  "edu.2.text": "During my studies, I practice building page structures with HTML, styling with CSS, and basic JavaScript concepts. I am learning to organize content, change styles, and check errors to improve how my pages look and work.",

  "exp.1.title": "Customizing a web portfolio",
  "exp.1.institution": "Personal project · Web portfolio",
  "exp.1.text": "I adapted a template with HTML, CSS, and JavaScript to present my academic profile. I organized the information, skills, and education sections, customized the text, and adjusted the skill percentages. I also worked on content in Spanish and English.",

  "exp.2.title": "Updating content with GitHub",
  "exp.2.institution": "Personal project · Web portfolio",
  "exp.2.text": "I used GitHub to edit my portfolio's HTML and JavaScript files and save changes. I reviewed text updates and learned to keep project information current using commit messages.",

  "portfolio.title": "Projects",

  "project.1.title": "My web portfolio",
  "project.1.text": "A personal profile in Spanish and English presenting my education, skills, and experience. Built from a template with HTML, CSS, and JavaScript.",
  "project.1.status": "View repository on GitHub →",

  "project.2.title": "To-do list",
  "project.2.text": "A planned practice project with HTML, CSS, and JavaScript to add tasks, mark them as completed, and delete them. My goal is to practice events and page updates.",
  "project.2.status": "Upcoming practice project",

  "project.3.title": "Student records",
  "project.3.text": "A planned practice project to design a MySQL database and query student records. My goal is to learn how to organize and retrieve information.",
  "project.3.status": "Upcoming practice project",

  "contact.title": "Contact",
  "contact.intro": "I am interested in learning, collaborating on projects, and finding internship opportunities. You can contact me by email or explore my work on GitHub.",
  "contact.emailLabel": "Email",
  "contact.repositoryLabel": "Portfolio",
  "contact.repositoryValue": "Explore my website's code",

  "footer.note": "Laura Daniela Mendoza Castro · Professional Technician in Web Programming · UniEspinal"
};


/* CAMBIO DE IDIOMA */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");

    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");

  if (boton) {
    const otro = idioma === "es" ? "en" : "es";

    boton.innerHTML =
      '<span class="idioma-activo">' + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase() + '</span>';

    boton.setAttribute(
      "aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español"
    );
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* MENÚ RESPONSIVE */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* BARRAS DE HABILIDADES */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";

    const etiqueta = barra.querySelector("span");

    if (etiqueta) {
      etiqueta.textContent = porcentaje + "%";
    }
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* INICIO */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
