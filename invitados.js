// Invitaciones personalizadas.
// Cada código es la parte final del enlace: maleysolis.com/?i=codigo
// nombre: cómo se les saluda · plazas: cuántas personas cubre la invitación
// genero: "f" (querida), "m" (querido) o "p" (queridos, para parejas y familias)
// nombres (opcional): nombres ya rellenados en el formulario, en orden.
// etiquetas (opcional): texto encima de cada hueco, p. ej. "Novia de Borja".
// ninos (opcional): posiciones (desde 0) de los niños; se les pide la edad.
// hogares (opcional): enlace de familia que solo muestra un botón por casa; cada casa confirma en su propio enlace.
// preboda: true si están invitados a la preboda del viernes (solo ellos ven esa sección).
// Este archivo se genera desde la hoja de invitados de "Boda 2027.xlsx".
window.INVITADOS = {
  "prueba": { nombre: "Familia de prueba", plazas: 2, genero: "p", nombres: ["Persona de prueba", ""], preboda: true },
  "prueba1": { nombre: "Invitada de prueba", plazas: 1, genero: "f" },
  "preboda": { nombre: "Familia de ejemplo", plazas: 2, genero: "p", preboda: true },
  // Familia materna y paterna de la novia (03/10/2026). Hotel en Jerez pagado por los novios.
  // Las familias con varias casas tienen un enlace de familia (hogares) y uno por casa (familia: código de la familia).
  "florit-machado-aw8a": { nombre: "Familia Florit-Machado", hogares: [{"codigo": "florit-machado-aw8a-luis-maricarmen", "titulo": "Luis y Mari Carmen, con María"}, {"codigo": "florit-machado-aw8a-luis-silvia", "titulo": "Luis y Silvia"}] },
  "florit-machado-aw8a-luis-maricarmen": { nombre: "Familia Florit-Machado", plazas: 3, genero: "p", nombres: ["Luis", "Mari Carmen", "María"], familia: "florit-machado-aw8a" },
  "florit-machado-aw8a-luis-silvia": { nombre: "Familia Florit-Machado", plazas: 2, genero: "p", nombres: ["Luis", "Silvia"], familia: "florit-machado-aw8a" },
  "telerin-m8e5": { nombre: "Familia Telerín", plazas: 4, genero: "p", nombres: ["Ana Pilar", "Raquel", "Julia", "Elvira"] },
  "florit-canibano-sktd": { nombre: "Familia Florit-Cañibano", plazas: 2, genero: "p", nombres: ["Manolo", "Ana"] },
  "brun-basarte-wptk": { nombre: "Familia Brun Basarte", hogares: [{"codigo": "brun-basarte-wptk-pepe-elvira", "titulo": "Pepe y Elvira"}, {"codigo": "brun-basarte-wptk-ines-ramon", "titulo": "Inés y Ramón"}, {"codigo": "brun-basarte-wptk-clara-nico", "titulo": "Clara y Nico"}] },
  "brun-basarte-wptk-pepe-elvira": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["Pepe", "Elvira"], familia: "brun-basarte-wptk" },
  "brun-basarte-wptk-ines-ramon": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["Inés", "Ramón"], familia: "brun-basarte-wptk" },
  "brun-basarte-wptk-clara-nico": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["Clara", "Nico"], familia: "brun-basarte-wptk" },
  "basarte-gaspar-bays": { nombre: "Familia Basarte-Gaspar", hogares: [{"codigo": "basarte-gaspar-bays-carlos-ana", "titulo": "Carlos y Ana"}, {"codigo": "basarte-gaspar-bays-laura-jose", "titulo": "Laura y José, con Iseya"}, {"codigo": "basarte-gaspar-bays-pablo-rebeca", "titulo": "Pablo y Rebeca"}] },
  "basarte-gaspar-bays-carlos-ana": { nombre: "Familia Basarte-Gaspar", plazas: 2, genero: "p", nombres: ["Carlos", "Ana"], familia: "basarte-gaspar-bays" },
  "basarte-gaspar-bays-laura-jose": { nombre: "Familia Basarte-Gaspar", plazas: 3, genero: "p", nombres: ["Laura", "José", "Iseya"], etiquetas: ["", "", "Hija de Laura y José"], ninos: [2], familia: "basarte-gaspar-bays" },
  "basarte-gaspar-bays-pablo-rebeca": { nombre: "Familia Basarte-Gaspar", plazas: 2, genero: "p", nombres: ["Pablo", "Rebeca"], familia: "basarte-gaspar-bays" },
  "rosamari-p4dx": { nombre: "Tía Rosa Mari", plazas: 1, genero: "f", nombres: ["Rosa Mari"] },
  "basarte-fernandez-73e5": { nombre: "Familia Basarte Fernández", hogares: [{"codigo": "basarte-fernandez-73e5-javier-magdalena", "titulo": "Javier y Magdalena"}, {"codigo": "basarte-fernandez-73e5-javi-irune", "titulo": "Javi e Irune, con Jimena"}, {"codigo": "basarte-fernandez-73e5-nacho-blanca", "titulo": "Nacho y Blanca"}] },
  "basarte-fernandez-73e5-javier-magdalena": { nombre: "Familia Basarte Fernández", plazas: 2, genero: "p", nombres: ["Javier", "Magdalena"], familia: "basarte-fernandez-73e5" },
  "basarte-fernandez-73e5-javi-irune": { nombre: "Familia Basarte Fernández", plazas: 3, genero: "p", nombres: ["Javi", "Irune", "Jimena"], etiquetas: ["", "", "Hija de Javi e Irune"], ninos: [2], familia: "basarte-fernandez-73e5" },
  "basarte-fernandez-73e5-nacho-blanca": { nombre: "Familia Basarte Fernández", plazas: 2, genero: "p", nombres: ["Nacho", "Blanca"], familia: "basarte-fernandez-73e5" },
  "basarte-jesus-wtby": { nombre: "Familia Basarte", plazas: 3, genero: "p", nombres: ["Jesús", "Darío", "Claudia"] },
  "alarcon-hu5s": { nombre: "Familia Alarcón Rosalba", plazas: 2, genero: "p", nombres: ["Mariela", "Aarón"] },
  "miriam-r7kd": { nombre: "Miriam", plazas: 1, genero: "f", nombres: ["Miriam"] },
  "gortazar-alvarez-ehkm": { nombre: "Familia Gortázar-Álvarez de las Asturias", hogares: [{"codigo": "gortazar-alvarez-ehkm-luis-reyes", "titulo": "Luis y Reyes"}, {"codigo": "gortazar-alvarez-ehkm-borja", "titulo": "Borja y su novia"}, {"codigo": "gortazar-alvarez-ehkm-santi", "titulo": "Santi y su novia"}, {"codigo": "gortazar-alvarez-ehkm-ines-alvaro", "titulo": "Inés y Álvaro, con los niños"}, {"codigo": "gortazar-alvarez-ehkm-maria-beto", "titulo": "María y Beto, con los niños"}] },
  "gortazar-alvarez-ehkm-luis-reyes": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["Luis", "Reyes"], familia: "gortazar-alvarez-ehkm" },
  "gortazar-alvarez-ehkm-borja": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["Borja", ""], etiquetas: ["", "Novia de Borja"], familia: "gortazar-alvarez-ehkm" },
  "gortazar-alvarez-ehkm-santi": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["Santi", ""], etiquetas: ["", "Novia de Santi"], familia: "gortazar-alvarez-ehkm" },
  "gortazar-alvarez-ehkm-ines-alvaro": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 4, genero: "p", nombres: ["Inés", "Álvaro", "", ""], etiquetas: ["", "", "Hijo/a de Inés y Álvaro", "Hijo/a de Inés y Álvaro"], ninos: [2, 3], familia: "gortazar-alvarez-ehkm" },
  "gortazar-alvarez-ehkm-maria-beto": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 5, genero: "p", nombres: ["María", "Beto", "", "", ""], etiquetas: ["", "", "Hijo/a de María y Beto", "Hijo/a de María y Beto", "Hijo/a de María y Beto"], ninos: [2, 3, 4], familia: "gortazar-alvarez-ehkm" },
  "gortazar-fernandez-duran-xmbj": { nombre: "Familia Gortázar Fernández Durán", hogares: [{"codigo": "gortazar-fernandez-duran-xmbj-cristina-juanantonio", "titulo": "Cristina y Juan Antonio"}, {"codigo": "gortazar-fernandez-duran-xmbj-cristina-gavin", "titulo": "Cristina y Gavin, con Luisa"}, {"codigo": "gortazar-fernandez-duran-xmbj-carla-francois", "titulo": "Carla y François, con los niños"}] },
  "gortazar-fernandez-duran-xmbj-cristina-juanantonio": { nombre: "Familia Gortázar Fernández Durán", plazas: 2, genero: "p", nombres: ["Cristina", "Juan Antonio"], familia: "gortazar-fernandez-duran-xmbj" },
  "gortazar-fernandez-duran-xmbj-cristina-gavin": { nombre: "Familia Gortázar Fernández Durán", plazas: 3, genero: "p", nombres: ["Cristina", "Gavin", "Luisa"], etiquetas: ["", "", "Hija de Cristina y Gavin"], ninos: [2], familia: "gortazar-fernandez-duran-xmbj" },
  "gortazar-fernandez-duran-xmbj-carla-francois": { nombre: "Familia Gortázar Fernández Durán", plazas: 5, genero: "p", nombres: ["Carla", "François", "Tristán", "Gabriel", "Alexander"], ninos: [2, 3, 4], familia: "gortazar-fernandez-duran-xmbj" },
  "gortazar-diaz-de-rivera-ft7z": { nombre: "Familia Gortázar Díaz de Rivera", hogares: [{"codigo": "gortazar-diaz-de-rivera-ft7z-fernando-carla", "titulo": "Fernando y Carla"}, {"codigo": "gortazar-diaz-de-rivera-ft7z-fernandito-maria", "titulo": "Fernandito y María"}] },
  "gortazar-diaz-de-rivera-ft7z-fernando-carla": { nombre: "Familia Gortázar Díaz de Rivera", plazas: 2, genero: "p", nombres: ["Fernando", "Carla"], familia: "gortazar-diaz-de-rivera-ft7z" },
  "gortazar-diaz-de-rivera-ft7z-fernandito-maria": { nombre: "Familia Gortázar Díaz de Rivera", plazas: 2, genero: "p", nombres: ["Fernandito", "María"], familia: "gortazar-diaz-de-rivera-ft7z" },
  "gortazar-de-casso-2bmr": { nombre: "Familia Gortázar De Casso", plazas: 2, genero: "p", nombres: ["Asun", "José"] },
  "ami-nb6g": { nombre: "Tía Ami", plazas: 1, genero: "f", nombres: ["Ami"] },
  "bego-joseantonio-cy5m": { nombre: "Tía Bego y José Antonio", plazas: 2, genero: "p", nombres: ["Begoña", "José Antonio"] },
  "sintes-vz35": { nombre: "Familia Sintes", plazas: 5, genero: "p", nombres: ["Carlos", "Silvia", "Román", "Adrián", "Nuria"] }
};
