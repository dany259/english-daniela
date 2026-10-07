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


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Soy Laura Daniela Mendoza Castro, estudiante del programa Técnico Profesional en Programación Web de UniEspinal. Me apasiona descubrir cómo una idea puede convertirse en una experiencia digital útil para otras personas. Cada tema nuevo me motiva a practicar, afrontar retos y seguir creciendo en proyectos donde pueda aportar y aprender de quienes comparten mi interés por la tecnología.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "El Espinal, Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (A1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Estoy aprendiendo a crear páginas web con HTML y CSS, añadir interactividad con JavaScript y trabajar con bases de datos como MySQL. También practico Git y GitHub para organizar cambios y colaborar en proyectos, mientras fortalezco mi lógica de programación y mi capacidad para resolver problemas.",

  "edu.2.title": "Aprendizaje de herramientas de desarrollo",
  "edu.2.text":  "Estoy fortaleciendo mis conocimientos sobre la estructura de una página web, los estilos visuales y el control de versiones. Mi objetivo es aplicar estas herramientas para desarrollar proyectos organizados y fáciles de utilizar.",

  "exp.1.title": "Construcción de mi portafolio web",
  "exp.1.text":  "Estoy adaptando una plantilla de portafolio con HTML, CSS y JavaScript para presentar mi perfil, formación y habilidades en español e inglés. Personalizo los contenidos y los porcentajes de habilidades.",

  "exp.2.title": "Gestión de cambios de mi portafolio",
  "exp.2.text":  "Utilizo GitHub para editar los archivos de mi portafolio y guardar los cambios. Esta práctica me ayuda a familiarizarme con el control de versiones y la organización de un proyecto web.",

  "portfolio.title": "Proyectos",
  "project.1.title": "[Nombre del proyecto]",
  "project.1.text":  "[Tecnologías usadas]",
  "project.2.title": "[Nombre del proyecto]",
  "project.2.text":  "[Tecnologías usadas]",
  "project.3.title": "[Nombre del proyecto]",
  "project.3.text":  "[Tecnologías usadas]",

  "contact.title":         "Contacto",
  "contact.intro":         "[Una frase invitando a escribirte. Por ejemplo: ¿Tienes un proyecto o una vacante? Escríbeme.]",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "[Tu perfil profesional]",

  "footer.note": "[Tu nombre] · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am Laura Daniela Mendoza Castro, a Web Programming student at UniEspinal. I am passionate about learning how ideas can become useful websites for other people. Each new topic motivates me to practice, face challenges, and grow through projects where I can contribute and learn from others.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "El Espinal, Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (A1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "I am learning to build web pages with HTML and CSS, add interactivity with JavaScript, and work with databases such as MySQL. I also practice Git and GitHub to organize changes and collaborate on projects while developing my programming and problem-solving skills.",

  "edu.2.title": "Learning development tools",
  "edu.2.text":  "I am improving my understanding of web page structure, visual styles, and version control. My goal is to use these tools to develop organized, easy-to-use projects.",

  "exp.1.title": "Building my web portfolio",
  "exp.1.text":  "I am adapting a portfolio template with HTML, CSS, and JavaScript to present my profile, education, and skills in Spanish and English. I customize the content and skill percentages.",

  "exp.2.title": "Managing changes to my portfolio",
  "exp.2.text":  "I use GitHub to edit my portfolio files and save changes. This practice helps me become familiar with version control and organizing a web project.",

  "portfolio.title": "Projects",
  "project.1.title": "[Project name]",
  "project.1.text":  "[Technologies used]",
  "project.2.title": "[Project name]",
  "project.2.text":  "[Technologies used]",
  "project.3.title": "[Project name]",
  "project.3.text":  "[Technologies used]",

  "contact.title":         "Contact",
  "contact.intro":         "[One sentence inviting people to write to you. Example: Have a project or a vacancy? Send me a message.]",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "[Your professional profile]",

  "footer.note": "[Your name] · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

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


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

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


/* ============================================================
   5. SKILL BARS
   ============================================================ */

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


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
