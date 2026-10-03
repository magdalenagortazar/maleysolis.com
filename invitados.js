// Invitaciones personalizadas.
// Cada código es la parte final del enlace: maleysolis.com/?i=codigo
// nombre: cómo se les saluda · plazas: cuántas personas cubre la invitación
// genero: "f" (querida), "m" (querido) o "p" (queridos, para parejas y familias)
// nombres (opcional): nombres ya rellenados en el formulario, en orden.
// etiquetas (opcional): texto encima de cada hueco, p. ej. "Novia de Borja".
// ninos (opcional): posiciones (desde 0) de los niños; se les pide la edad.
// titulo: cómo se llama a la casa en el formulario ("Luis y Reyes, ¿quiénes venís?").
// preboda: true si están invitados a la preboda del viernes (solo ellos ven esa sección).
// Este archivo se genera desde la hoja de invitados de "Boda 2027.xlsx".
window.INVITADOS = {
  "prueba": { nombre: "Familia de prueba", plazas: 2, genero: "p", nombres: ["Persona de prueba", ""], preboda: true },
  "prueba1": { nombre: "Invitada de prueba", plazas: 1, genero: "f" },
  "preboda": { nombre: "Familia de ejemplo", plazas: 2, genero: "p", preboda: true },
  // Familia materna y paterna de la novia (03/10/2026). Hotel en Jerez pagado por los novios.
  // Un enlace por casa; el saludo es el de la familia y el formulario pregunta "titulo, ¿quiénes venís?".
  "florit-machado-aw8a-luis-maricarmen": { nombre: "Familia Florit-Machado", plazas: 3, genero: "p", nombres: ["Luis", "Mari Carmen", "María"], titulo: "Luis y Mari Carmen" },
  "florit-machado-aw8a-luis-silvia": { nombre: "Familia Florit-Machado", plazas: 2, genero: "p", nombres: ["Luis", "Silvia"], titulo: "Luis y Silvia" },
  "telerin-m8e5": { nombre: "Familia Telerín", plazas: 4, genero: "p", nombres: ["Ana Pilar", "Raquel", "Julia", "Elvira"], titulo: "Ana Pilar, Raquel, Julia y Elvira" },
  "florit-canibano-sktd": { nombre: "Familia Florit-Cañibano", plazas: 2, genero: "p", nombres: ["Manolo", "Ana"], titulo: "Manolo y Ana" },
  "brun-basarte-wptk-pepe-elvira": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["Pepe", "Elvira"], titulo: "Pepe y Elvira" },
  "brun-basarte-wptk-ines-ramon": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["Inés", "Ramón"], titulo: "Inés y Ramón" },
  "brun-basarte-wptk-clara-nico": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["Clara", "Nico"], titulo: "Clara y Nico" },
  "basarte-gaspar-bays-carlos-ana": { nombre: "Familia Basarte-Gaspar", plazas: 2, genero: "p", nombres: ["Carlos", "Ana"], titulo: "Carlos y Ana" },
  "basarte-gaspar-bays-laura-jose": { nombre: "Familia Basarte-Gaspar", plazas: 3, genero: "p", nombres: ["Laura", "José", "Iseya"], titulo: "Laura y José", etiquetas: ["", "", "Hija de Laura y José"], ninos: [2] },
  "basarte-gaspar-bays-pablo-rebeca": { nombre: "Familia Basarte-Gaspar", plazas: 2, genero: "p", nombres: ["Pablo", "Rebeca"], titulo: "Pablo y Rebeca" },
  "rosamari-p4dx": { nombre: "Tía Rosa Mari", plazas: 1, genero: "f", nombres: ["Rosa Mari"], titulo: "Rosa Mari" },
  "basarte-fernandez-73e5-javier-magdalena": { nombre: "Familia Basarte Fernández", plazas: 2, genero: "p", nombres: ["Javier", "Magdalena"], titulo: "Javier y Magdalena" },
  "basarte-fernandez-73e5-javi-irune": { nombre: "Familia Basarte Fernández", plazas: 3, genero: "p", nombres: ["Javi", "Irune", "Jimena"], titulo: "Javi e Irune", etiquetas: ["", "", "Hija de Javi e Irune"], ninos: [2] },
  "basarte-fernandez-73e5-nacho-blanca": { nombre: "Familia Basarte Fernández", plazas: 2, genero: "p", nombres: ["Nacho", "Blanca"], titulo: "Nacho y Blanca" },
  "basarte-jesus-wtby": { nombre: "Familia Basarte", plazas: 3, genero: "p", nombres: ["Jesús", "Darío", "Claudia"], titulo: "Jesús, Darío y Claudia" },
  "alarcon-hu5s": { nombre: "Familia Alarcón Rosalba", plazas: 2, genero: "p", nombres: ["Mariela", "Aarón"], titulo: "Mariela y Aarón" },
  "miriam-r7kd": { nombre: "Miriam", plazas: 1, genero: "f", nombres: ["Miriam"], titulo: "Miriam" },
  "gortazar-alvarez-ehkm-luis-reyes": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["Luis", "Reyes"], titulo: "Luis y Reyes" },
  "gortazar-alvarez-ehkm-borja": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["Borja", ""], titulo: "Borja", etiquetas: ["", "Novia de Borja"] },
  "gortazar-alvarez-ehkm-santi": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["Santi", ""], titulo: "Santi", etiquetas: ["", "Novia de Santi"] },
  "gortazar-alvarez-ehkm-ines-alvaro": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 4, genero: "p", nombres: ["Inés", "Álvaro", "", ""], titulo: "Inés y Álvaro", etiquetas: ["", "", "Hijo/a de Inés y Álvaro", "Hijo/a de Inés y Álvaro"], ninos: [2, 3] },
  "gortazar-alvarez-ehkm-maria-beto": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 5, genero: "p", nombres: ["María", "Beto", "", "", ""], titulo: "María y Beto", etiquetas: ["", "", "Hijo/a de María y Beto", "Hijo/a de María y Beto", "Hijo/a de María y Beto"], ninos: [2, 3, 4] },
  "gortazar-fernandez-duran-xmbj-cristina-juanantonio": { nombre: "Familia Gortázar Fernández Durán", plazas: 2, genero: "p", nombres: ["Cristina", "Juan Antonio"], titulo: "Cristina y Juan Antonio" },
  "gortazar-fernandez-duran-xmbj-cristina-gavin": { nombre: "Familia Gortázar Fernández Durán", plazas: 3, genero: "p", nombres: ["Cristina", "Gavin", "Luisa"], titulo: "Cristina y Gavin", etiquetas: ["", "", "Hija de Cristina y Gavin"], ninos: [2] },
  "gortazar-fernandez-duran-xmbj-carla-francois": { nombre: "Familia Gortázar Fernández Durán", plazas: 5, genero: "p", nombres: ["Carla", "François", "Tristán", "Gabriel", "Alexander"], titulo: "Carla y François", ninos: [2, 3, 4] },
  "gortazar-diaz-de-rivera-ft7z-fernando-carla": { nombre: "Familia Gortázar Díaz de Rivera", plazas: 2, genero: "p", nombres: ["Fernando", "Carla"], titulo: "Fernando y Carla" },
  "gortazar-diaz-de-rivera-ft7z-fernandito-maria": { nombre: "Familia Gortázar Díaz de Rivera", plazas: 2, genero: "p", nombres: ["Fernandito", "María"], titulo: "Fernandito y María" },
  "gortazar-de-casso-2bmr": { nombre: "Familia Gortázar De Casso", plazas: 2, genero: "p", nombres: ["Asun", "José"], titulo: "Asun y José" },
  "ami-nb6g": { nombre: "Tía Ami", plazas: 1, genero: "f", nombres: ["Ami"], titulo: "Ami" },
  "bego-joseantonio-cy5m": { nombre: "Tía Bego y José Antonio", plazas: 2, genero: "p", nombres: ["Begoña", "José Antonio"], titulo: "Begoña y José Antonio" },
  "sintes-vz35": { nombre: "Familia Sintes", plazas: 5, genero: "p", nombres: ["Carlos", "Silvia", "Román", "Adrián", "Nuria"], titulo: "Carlos, Silvia, Román, Adrián y Nuria" }
};
