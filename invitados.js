// Invitaciones personalizadas.
// Cada código es la parte final del enlace: maleysolis.com/?i=codigo
// nombre: cómo se les saluda · plazas: cuántas personas cubre la invitación
// genero: "f" (querida), "m" (querido) o "p" (queridos, para parejas y familias)
// nombres (opcional): nombres ya rellenados en el formulario, en orden.
// etiquetas (opcional): texto encima de cada hueco, p. ej. "Novia de Borja".
// ninos (opcional): posiciones (desde 0) de los niños; se les pide la edad.
// titulo: cómo se llama a la casa en el formulario ("Luis y Reyes, ¿quiénes venís?").
// familia: true en la familia de la novia (sin la información general de hoteles) · zaragoza: true muestra cómo llegar desde Zaragoza.
// joven: true muestra la recomendación de dormir en El Puerto (amigas y jóvenes).
// preboda: true si están invitados a la preboda del viernes (solo ellos ven esa sección).
// padres: true en el enlace de los amigos de los padres (preboda de adultos en Jerez y hoteles recomendando Jerez).
// apellidos: true en enlaces generales sin nombres: dos huecos de nombre y apellidos (tú y acompañante).
// saludo (opcional): texto del saludo si no debe ser el nombre de la invitación.
// Este archivo se genera desde la hoja de invitados de "Boda 2027.xlsx".
window.INVITADOS = {
  "prueba": { nombre: "Familia de prueba", plazas: 2, genero: "p", nombres: ["Persona de prueba", ""], preboda: true, joven: true },
  "prueba1": { nombre: "Invitada de prueba", plazas: 1, genero: "f" },
  "preboda": { nombre: "Familia de ejemplo", plazas: 2, genero: "p", preboda: true, joven: true },
  // Familia materna y paterna de la novia (03/10/2026). Hotel en Jerez pagado por los novios.
  // Un enlace por casa; el saludo es el de la familia y el formulario pregunta "titulo, ¿quiénes venís?".
  "florit-machado-aw8a-luis-maricarmen": { nombre: "Familia Florit-Machado", plazas: 2, genero: "p", nombres: ["Luis", "Mari Carmen"], titulo: "Luis y Mari Carmen", familia: true },
  "florit-machado-aw8a-maria": { nombre: "Familia Florit-Machado", plazas: 1, genero: "f", nombres: ["María"], titulo: "María", familia: true },
  "florit-machado-aw8a-luis-silvia": { nombre: "Familia Florit-Machado", plazas: 2, genero: "p", nombres: ["Luis", "Silvia"], titulo: "Luis y Silvia", familia: true },
  "telerin-m8e5": { nombre: "Familia Telerín", plazas: 4, genero: "p", nombres: ["Ana Pilar", "Raquel", "Julia", "Elvira"], titulo: "Ana Pilar, Raquel, Julia y Elvira", familia: true },
  "florit-canibano-sktd": { nombre: "Familia Florit-Cañibano", plazas: 2, genero: "p", nombres: ["Manolo", "Ana"], titulo: "Manolo y Ana", familia: true },
  "brun-basarte-wptk-pepe-elvira": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["Pepe", "Elvira"], titulo: "Pepe y Elvira", familia: true, zaragoza: true },
  "brun-basarte-wptk-ines-ramon": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["Inés", "Ramón"], titulo: "Inés y Ramón", familia: true, zaragoza: true },
  "brun-basarte-wptk-clara-nico": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["Clara", "Nico"], titulo: "Clara y Nico", familia: true, zaragoza: true },
  "basarte-gaspar-bays-carlos-ana": { nombre: "Familia Basarte-Gaspar", plazas: 2, genero: "p", nombres: ["Carlos", "Ana"], titulo: "Carlos y Ana", familia: true, zaragoza: true },
  "basarte-gaspar-bays-laura-jose": { nombre: "Familia Basarte-Gaspar", plazas: 3, genero: "p", nombres: ["Laura", "José", "Iseya"], titulo: "Laura y José", etiquetas: ["", "", "Hija de Laura y José"], ninos: [2], familia: true, zaragoza: true },
  "basarte-gaspar-bays-pablo-rebeca": { nombre: "Familia Basarte-Gaspar", plazas: 2, genero: "p", nombres: ["Pablo", "Rebeca"], titulo: "Pablo y Rebeca", familia: true, zaragoza: true },
  "rosamari-p4dx": { nombre: "Tía Rosa Mari", plazas: 1, genero: "f", nombres: ["Rosa Mari"], titulo: "Rosa Mari", familia: true, zaragoza: true },
  "basarte-fernandez-73e5-javier-magdalena": { nombre: "Familia Basarte Fernández", plazas: 2, genero: "p", nombres: ["Javier", "Magdalena"], titulo: "Javier y Magdalena", familia: true, zaragoza: true },
  "basarte-fernandez-73e5-javi-irune": { nombre: "Familia Basarte Fernández", plazas: 3, genero: "p", nombres: ["Javi", "Irune", "Jimena"], titulo: "Javi e Irune", etiquetas: ["", "", "Hija de Javi e Irune"], ninos: [2], familia: true, zaragoza: true },
  "basarte-fernandez-73e5-nacho-blanca": { nombre: "Familia Basarte Fernández", plazas: 2, genero: "p", nombres: ["Nacho", "Blanca"], titulo: "Nacho y Blanca", familia: true, zaragoza: true },
  "basarte-jesus-wtby": { nombre: "Familia Basarte", plazas: 3, genero: "p", nombres: ["Jesús", "Darío", "Claudia"], titulo: "Jesús, Darío y Claudia", familia: true, zaragoza: true },
  "alarcon-hu5s": { nombre: "Familia Alarcón", plazas: 2, genero: "p", nombres: ["Mariela", "Aarón"], titulo: "Mariela y Aarón", familia: true },
  "miriam-r7kd": { nombre: "Miriam", plazas: 1, genero: "f", nombres: ["Miriam"], titulo: "Miriam", familia: true },
  "gortazar-alvarez-ehkm-luis-reyes": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["Luis", "Reyes"], titulo: "Luis y Reyes", familia: true },
  "gortazar-alvarez-ehkm-borja": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["Borja", ""], titulo: "Borja", etiquetas: ["", "Novia de Borja"], familia: true },
  "gortazar-alvarez-ehkm-santi": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["Santi", ""], titulo: "Santi", etiquetas: ["", "Novia de Santi"], familia: true },
  "gortazar-alvarez-ehkm-ines-alvaro": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 4, genero: "p", nombres: ["Inés", "Álvaro", "", ""], titulo: "Inés y Álvaro", etiquetas: ["", "", "Hijo/a de Inés y Álvaro", "Hijo/a de Inés y Álvaro"], ninos: [2, 3], familia: true },
  "gortazar-alvarez-ehkm-maria-beto": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 5, genero: "p", nombres: ["María", "Beto", "", "", ""], titulo: "María y Beto", etiquetas: ["", "", "Hijo/a de María y Beto", "Hijo/a de María y Beto", "Hijo/a de María y Beto"], ninos: [2, 3, 4], familia: true },
  "gortazar-fernandez-duran-xmbj-cristina-juan": { nombre: "Familia Gortázar Fernández Durán", plazas: 2, genero: "p", nombres: ["Cristina", "Juan"], titulo: "Cristina y Juan", familia: true },
  "gortazar-fernandez-duran-xmbj-cristina-gavin": { nombre: "Familia Gortázar Fernández Durán", plazas: 3, genero: "p", nombres: ["Cristina", "Gavin", "Luisa"], titulo: "Cristina y Gavin", etiquetas: ["", "", "Hija de Cristina y Gavin"], ninos: [2], familia: true },
  "gortazar-fernandez-duran-xmbj-carla-francois": { nombre: "Familia Gortázar Fernández Durán", plazas: 5, genero: "p", nombres: ["Carla", "François", "Tristán", "Gabriel", "Alexander"], titulo: "Carla y François", ninos: [2, 3, 4], familia: true },
  "gortazar-diaz-de-rivera-ft7z-fernando-carla": { nombre: "Familia Gortázar Díaz de Rivera", plazas: 2, genero: "p", nombres: ["Fernando", "Carla"], titulo: "Fernando y Carla", familia: true },
  "gortazar-diaz-de-rivera-ft7z-fernandito-maria": { nombre: "Familia Gortázar Díaz de Rivera", plazas: 2, genero: "p", nombres: ["Fernandito", "María"], titulo: "Fernandito y María", familia: true },
  "gortazar-de-casso-2bmr": { nombre: "Familia Gortázar De Casso", plazas: 2, genero: "p", nombres: ["Asun", "José"], titulo: "Asun y José", familia: true },
  "ami-nb6g": { nombre: "Tía Ami", plazas: 1, genero: "f", nombres: ["Ami"], titulo: "Ami", familia: true },
  "bego-joseantonio-cy5m": { nombre: "Tía Bego y José Antonio", plazas: 2, genero: "p", nombres: ["Begoña", "José Antonio"], titulo: "Begoña y José Antonio", familia: true },
  "sintes-vz35": { nombre: "Familia Sintes", plazas: 5, genero: "p", nombres: ["Carlos", "Silvia", "Román", "Adrián", "Nuria"], titulo: "Carlos, Silvia, Román, Adrián y Nuria", familia: true },
  // Amigas y amigos de la novia (03/10/2026): un enlace por amiga o pareja; ven la preboda.
  "clara-jaime-yscg": { nombre: "Clara y Jaime", plazas: 2, genero: "p", nombres: ["Clara", "Jaime"], titulo: "Clara y Jaime", preboda: true, joven: true },
  "elena-qvjn": { nombre: "Elena", plazas: 1, genero: "f", nombres: ["Elena"], titulo: "Elena", preboda: true, joven: true },
  "macarena-kp4k": { nombre: "Macarena", plazas: 1, genero: "f", nombres: ["Macarena"], titulo: "Macarena", preboda: true, joven: true },
  "maria-javier-5r7q": { nombre: "María y Javier", plazas: 2, genero: "p", nombres: ["María", "Javier"], titulo: "María y Javier", preboda: true, joven: true },
  "marisa-gonzalo-9ghf": { nombre: "Marisa y Gonzalo", plazas: 2, genero: "p", nombres: ["Marisa", "Gonzalo"], titulo: "Marisa y Gonzalo", preboda: true, joven: true },
  "rocio-afonso-n47v": { nombre: "Rocío y Afonso", plazas: 2, genero: "p", nombres: ["Rocío", "Afonso"], titulo: "Rocío y Afonso", preboda: true, joven: true },
  "teresa-javier-mtmu": { nombre: "Teresa y Javier", plazas: 2, genero: "p", nombres: ["Teresa", "Javier"], titulo: "Teresa y Javier", preboda: true, joven: true },
  "isabel-jonny-vdxv": { nombre: "Isabel y Jonny", plazas: 2, genero: "p", nombres: ["Isabel", "Jonny"], titulo: "Isabel y Jonny", preboda: true, joven: true },
  "ale-uvwj": { nombre: "Ale", plazas: 1, genero: "f", nombres: ["Ale"], titulo: "Ale", preboda: true, joven: true },
  "belen-tch3": { nombre: "Belén", plazas: 1, genero: "f", nombres: ["Belén"], titulo: "Belén", preboda: true, joven: true },
  "marta-felipe-af7e": { nombre: "Marta y Felipe", plazas: 2, genero: "p", nombres: ["Marta", "Felipe"], titulo: "Marta y Felipe", preboda: true, joven: true },
  "almu-guille-qdqa": { nombre: "Almu y Guille", plazas: 2, genero: "p", nombres: ["Almu", "Guille"], titulo: "Almu y Guille", preboda: true, joven: true },
  "ainhoa-gwxg": { nombre: "Ainhoa", plazas: 1, genero: "f", nombres: ["Ainhoa"], titulo: "Ainhoa", preboda: true, joven: true },
  "andy-cobi-76kp": { nombre: "Andy y Cobi", plazas: 2, genero: "p", nombres: ["Andy", "Cobi"], titulo: "Andy y Cobi", preboda: true, joven: true },
  "mariana-tiago-djya": { nombre: "Mariana y Tiago", plazas: 2, genero: "p", nombres: ["Mariana", "Tiago"], titulo: "Mariana y Tiago", preboda: true, joven: true },
  "marta-alberto-9kph": { nombre: "Marta y Alberto", plazas: 2, genero: "p", nombres: ["Marta", "Alberto"], titulo: "Marta y Alberto", preboda: true, joven: true },
  "maria-sucri-azzq": { nombre: "María y Sucri", plazas: 2, genero: "p", nombres: ["María", "Sucri"], titulo: "María y Sucri", preboda: true, joven: true },
  "candela-carlos-928q": { nombre: "Candela y Carlos", plazas: 2, genero: "p", nombres: ["Candela", "Carlos"], titulo: "Candela y Carlos", preboda: true, joven: true },
  "manuela-sacris-2htr": { nombre: "Manuela y Sacris", plazas: 2, genero: "p", nombres: ["Manuela", "Sacris"], titulo: "Manuela y Sacris", preboda: true, joven: true },
  "miry-edu-szu5": { nombre: "Miry y Edu", plazas: 2, genero: "p", nombres: ["Miry", "Edu"], titulo: "Miry y Edu", preboda: true, joven: true },
  "cris-chema-6pan": { nombre: "Cris y Chema", plazas: 2, genero: "p", nombres: ["Cris", "Chema"], titulo: "Cris y Chema", preboda: true, joven: true },
  "tere-charlie-9vs8": { nombre: "Tere y Charlie", plazas: 2, genero: "p", nombres: ["Tere", "Charlie"], titulo: "Tere y Charlie", preboda: true, joven: true },
  "lucia-charlie-yrhd": { nombre: "Lucía y Charlie", plazas: 2, genero: "p", nombres: ["Lucía", "Charlie"], titulo: "Lucía y Charlie", preboda: true, joven: true },
  "lucia-jacobo-n5ug": { nombre: "Lucía y Jacobo", plazas: 2, genero: "p", nombres: ["Lucía", "Jacobo"], titulo: "Lucía y Jacobo", preboda: true, joven: true },
  // Amigos de los padres de la novia (03/10/2026): un único enlace general para todos.
  // Dos huecos (tú y acompañante) con nombre y apellidos; preboda de adultos en Jerez y hoteles recomendando Jerez.
  "amigos-gonzalo-magdy-r8tq": { nombre: "Amigos de Gonzalo y Magdy", saludo: "Queridos amigos", plazas: 2, genero: "p", apellidos: true, padres: true, balon: true },
  // Invitado y amigas de Ana (hermana de la novia), 04/10/2026: enlaces individuales, sin acompañante, con preboda. El nombre lo escriben ellos (hueco vacío).
  "reina-m6ny": { nombre: "Reina", plazas: 1, genero: "m", nombres: [""], titulo: "Álvaro", preboda: true, joven: true },
  "cristina-gimeno-u6vd": { nombre: "Rizos", plazas: 1, genero: "f", nombres: [""], titulo: "Cristina", preboda: true, joven: true },
  "maria-lopez-de-haro-yrnp": { nombre: "María", plazas: 1, genero: "f", nombres: [""], titulo: "María", preboda: true, joven: true },
  // Cris Elices (amiga de la novia, "Otros amigos"), 05/10/2026: con acompañante, preboda de El Puerto; los nombres los escriben ellos.
  "cris-elices-avtk": { nombre: "Cris", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Cris", etiquetas: ["", "Acompañante"], preboda: true, joven: true },
  // Familia de Solís (03/10/2026): un enlace por casa.
  "carlos-carmen-6cm3": { nombre: "Carlos y Carmen", plazas: 2, genero: "p", nombres: ["Carlos", "Carmen"], titulo: "Carlos y Carmen" },
  "fer-lola-7n4f": { nombre: "Fer y Lola", plazas: 2, genero: "p", nombres: ["Fer", "Lola"], titulo: "Fer y Lola" },
  "fer-lucia-9t59": { nombre: "Fer y Lucía", plazas: 2, genero: "p", nombres: ["Fer", "Lucía"], titulo: "Fer y Lucía" },
  "maria-freddy-fnt3": { nombre: "María y Freddy", plazas: 2, genero: "p", nombres: ["María", "Freddy"], titulo: "María y Freddy" },
  "carlos-aq8j": { nombre: "Carlos", plazas: 1, genero: "f", nombres: ["Carlos"], titulo: "Carlos" },
  "moni-gksh": { nombre: "Moni", plazas: 1, genero: "f", nombres: ["Moni"], titulo: "Moni" },
  "bea-sve5": { nombre: "Bea", plazas: 1, genero: "f", nombres: ["Bea"], titulo: "Bea" },
  "guille-rocio-cfd6": { nombre: "Guille y Rocío", plazas: 2, genero: "p", nombres: ["Guille", "Rocío"], titulo: "Guille y Rocío" },
  "beita-jaime-myfr": { nombre: "Beita y Jaime", plazas: 5, genero: "p", nombres: ["Beita", "Jaime", "Jaimete", "Javi", "Armadito"], titulo: "Beita y Jaime", ninos: [2, 3, 4] },
  "manolo-monica-ysca": { nombre: "Manolo y Mónica", plazas: 2, genero: "p", nombres: ["Manolo", "Mónica"], titulo: "Manolo y Mónica" },
  "lucia-g2mz": { nombre: "Lucía", plazas: 2, genero: "p", nombres: ["Lucía", ""], titulo: "Lucía", etiquetas: ["", "Acompañante"] },
  "alba-trpw": { nombre: "Alba", plazas: 1, genero: "f", nombres: ["Alba"], titulo: "Alba" },
  "cris-h9e8": { nombre: "Cris", plazas: 3, genero: "p", nombres: ["Cris", "", ""], titulo: "Cris", etiquetas: ["", "Amiga de Cris", "Amiga de Cris"] }
};
// Enlace antiguo de Isabel y Jonny (por si ya se mandó): apunta a la misma invitación.
window.INVITADOS["isabel-johnny-vdxv"] = window.INVITADOS["isabel-jonny-vdxv"];
// Enlace antiguo de Ale (por si ya se mandó).
window.INVITADOS["alejandra-uvwj"] = window.INVITADOS["ale-uvwj"];
// Enlace antiguo de Andy y Cobi (por si ya se mandó).
window.INVITADOS["andy-cobaleda-76kp"] = window.INVITADOS["andy-cobi-76kp"];
// Enlace antiguo de Miry y Edu (por si ya se mandó).
window.INVITADOS["miriam-edu-szu5"] = window.INVITADOS["miry-edu-szu5"];
// Enlace de prueba de los amigos de los padres (por si ya se mandó): misma invitación que el enlace general.
window.INVITADOS["prueba-padres"] = window.INVITADOS["amigos-gonzalo-magdy-r8tq"];
// Enlace antiguo de Rizos con el apellido mal escrito (por si ya se mandó): misma invitación.
window.INVITADOS["cristina-jimeno-u6vd"] = window.INVITADOS["cristina-gimeno-u6vd"];
