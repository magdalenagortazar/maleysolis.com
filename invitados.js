// Invitaciones personalizadas.
// Cada código es la parte final del enlace: maleysolis.com/?i=codigo
// nombre: cómo se les saluda · plazas: cuántas personas cubre la invitación
// genero: "f" (querida), "m" (querido) o "p" (queridos, para parejas y familias)
// nombres (opcional): nombres ya rellenados en el formulario, en orden.
// etiquetas (opcional): texto encima de cada hueco, p. ej. "Novia de Borja".
// ninos (opcional): posiciones (desde 0) de los niños; se les pide la edad.
// preboda: true si están invitados a la preboda del viernes (solo ellos ven esa sección).
// Este archivo se genera desde la hoja de invitados de "Boda 2027.xlsx".
window.INVITADOS = {
  "prueba": { nombre: "Familia de prueba", plazas: 2, genero: "p", nombres: ["Persona de prueba", ""], preboda: true },
  "prueba1": { nombre: "Invitada de prueba", plazas: 1, genero: "f" },
  "preboda": { nombre: "Familia de ejemplo", plazas: 2, genero: "p", preboda: true },
  // Familia materna y paterna de la novia (03/10/2026). Hotel en Jerez pagado por los novios.
  "florit-machado-aw8a": { nombre: "Familia Florit-Machado", plazas: 5, genero: "p", nombres: ["Luis Florit Gracia", "Mari Carmen Machado", "María Florit", "Luis Florit", "Silvia"] },
  "telerin-m8e5": { nombre: "Familia Telerín", plazas: 4, genero: "p", nombres: ["Ana Pilar Florit", "Raquel Florit", "Julia Florit", "Elvira Florit"] },
  "florit-canibano-sktd": { nombre: "Familia Florit-Cañibano", plazas: 2, genero: "p", nombres: ["Manolo Florit Gracia", "Ana"] },
  "brun-basarte-wptk": { nombre: "Familia Brun Basarte", plazas: 6, genero: "p", nombres: ["Elvira Basarte", "Pepe Brun", "Clara Brun Basarte", "Nico", "Inés Brun Basarte", "Ramón"] },
  "basarte-gaspar-bays": { nombre: "Familia Basarte-Gaspar", plazas: 7, genero: "p", nombres: ["Carlos Basarte", "Ana", "Laura Basarte", "José", "Pablo Basarte", "Rebeca", "Iseya"], etiquetas: ["", "", "", "", "", "", "Hija de Laura y José"], ninos: [6] },
  "rosamari-p4dx": { nombre: "Tía Rosa Mari", plazas: 1, genero: "f", nombres: ["Rosa Mari Basarte"] },
  "basarte-fernandez-73e5": { nombre: "Familia Basarte Fernández", plazas: 7, genero: "p", nombres: ["Javier Basarte", "Magdalena", "Javi Basarte", "Irune", "Nacho Basarte", "Blanca", "Jimena"], etiquetas: ["", "", "", "", "", "", "Hija de Javi e Irune"], ninos: [6] },
  "basarte-jesus-wtby": { nombre: "Familia Basarte", plazas: 3, genero: "p", nombres: ["Jesús Basarte", "Darío Basarte", "Claudia Basarte"] },
  "alarcon-hu5s": { nombre: "Familia Alarcón Rosalba", plazas: 3, genero: "p", nombres: ["Mariela", "Aarón", "Miriam"] },
  "gortazar-alvarez-ehkm": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 15, genero: "p", nombres: ["Luis Gortázar", "Reyes Álvarez de las Asturias", "Borja Gortázar", "", "Santi", "", "Inés Gortázar", "Álvaro", "", "", "María Gortázar", "Beto", "", "", ""], etiquetas: ["", "", "", "Novia de Borja", "", "Novia de Santi", "", "", "Hijo/a de Inés y Álvaro", "Hijo/a de Inés y Álvaro", "", "", "Hijo/a de María y Beto", "Hijo/a de María y Beto", "Hijo/a de María y Beto"], ninos: [8, 9, 12, 13, 14] },
  "gortazar-fernandez-duran-xmbj": { nombre: "Familia Gortázar Fernández Durán", plazas: 10, genero: "p", nombres: ["Cristina Gortázar", "Juan Antonio", "Cristina", "Gavin", "Luisa", "Carla", "François", "Tristán", "Gabriel", "Alexander"], etiquetas: ["", "", "", "", "Hija de Cristina y Gavin", "", "", "Hijo de Carla y François", "Hijo de Carla y François", "Hijo de Carla y François"], ninos: [4, 7, 8, 9] },
  "gortazar-diaz-de-rivera-ft7z": { nombre: "Familia Gortázar Díaz de Rivera", plazas: 4, genero: "p", nombres: ["Fernando Gortázar", "Carla", "Fernandito Gortázar", "María"] },
  "gortazar-de-casso-2bmr": { nombre: "Familia Gortázar De Casso", plazas: 2, genero: "p", nombres: ["Asun Gortázar", "José"] },
  "ami-nb6g": { nombre: "Tía Ami", plazas: 1, genero: "f", nombres: ["Ami Gortázar"] },
  "bego-joseantonio-cy5m": { nombre: "Tía Bego y José Antonio", plazas: 2, genero: "p", nombres: ["Begoña Gortázar", "José Antonio"] },
  "sintes-vz35": { nombre: "Familia Sintes", plazas: 5, genero: "p", nombres: ["Carlos Sintes", "Silvia", "Román Sintes", "Adrián Sintes", "Nuria Sintes"] }
};
