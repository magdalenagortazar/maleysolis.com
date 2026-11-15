// Invitaciones personalizadas.
// Cada código es la parte final del enlace: maleysolis.com/?i=codigo
// nombre: cómo se les saluda · plazas: cuántas personas cubre la invitación
// genero: "f" (querida), "m" (querido) o "p" (queridos, para parejas y familias)
// nombres (opcional): un hueco por persona. Desde el 15/11/2026 van todos en blanco: cada uno escribe su nombre y apellidos (hace falta para la lista y las direcciones).
// etiquetas (opcional): texto encima de cada hueco, p. ej. "Novia de Borja".
// ninos (opcional): posiciones (desde 0) de los niños; se les pide la edad.
// titulo: cómo se llama a la casa en el formulario ("Luis y Reyes, ¿quiénes venís?").
// familia: true en la familia de la novia (sin la información general de hoteles) · zaragoza: true muestra cómo llegar desde Zaragoza.
// jerez: true recomienda dormir en Jerez sin preboda (15/11/2026).
// joven: true muestra la recomendación de dormir en El Puerto (amigas y jóvenes).
// preboda: true si están invitados a la preboda del viernes (solo ellos ven esa sección).
// padres: true en el enlace de los amigos de los padres (preboda de adultos en Jerez y hoteles recomendando Jerez).
// prebodaPadres: true en la familia invitada a la preboda de Gonzalo y Magdy en Jerez (14/10/2026); la familia joven con preboda: true va a la de El Puerto.
// Si lleva las dos, se enseñan las dos prebodas; prebodaQuien pone en el título de cada una quién va (puerto / jerez) y prebodaNota lo repite bajo la pregunta del formulario.
// apellidos: true en enlaces generales sin nombres: dos huecos de nombre y apellidos (tú y acompañante).
// saludo (opcional): texto del saludo si no debe ser el nombre de la invitación.
// Este archivo se genera desde la hoja de invitados de "Boda 2027.xlsx".
window.INVITADOS = {
  "prueba": { nombre: "Familia de prueba", plazas: 2, genero: "p", nombres: ["", ""], preboda: true, joven: true },
  "prueba1": { nombre: "Invitada de prueba", plazas: 1, genero: "f" },
  "preboda": { nombre: "Familia de ejemplo", plazas: 2, genero: "p", preboda: true, joven: true },
  // Familia materna y paterna de la novia (03/10/2026). Hotel en Jerez pagado por los novios.
  // Un enlace por casa; el saludo es el de la familia y el formulario pregunta "titulo, ¿quiénes venís?".
  "florit-machado-aw8a-luis-maricarmen": { nombre: "Familia Florit-Machado", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Luis y Mari Carmen", familia: true, prebodaPadres: true },
  "florit-machado-aw8a-maria": { nombre: "Familia Florit-Machado", plazas: 1, genero: "f", nombres: [""], titulo: "María", familia: true, preboda: true },
  "florit-machado-aw8a-luis-silvia": { nombre: "Familia Florit-Machado", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Luis y Silvia", familia: true, preboda: true },
  "telerin-m8e5": { nombre: "Familia Telerín", plazas: 4, genero: "p", nombres: ["", "", "", ""], titulo: "Ana Pilar, Raquel, Julia y Elvira", familia: true, preboda: true, prebodaPadres: true, prebodaQuien: { puerto: "Raquel, Julia y Elvira", jerez: "Ana Pilar" }, prebodaNota: "Raquel, Julia y Elvira, la vuestra es la de El Puerto, con los jóvenes; Ana Pilar, la tuya es la de Jerez, con Gonzalo y Magdy." }, // las dos prebodas (14/10/2026)
  "florit-canibano-sktd": { nombre: "Familia Florit-Cañibano", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Manolo y Ana", familia: true, prebodaPadres: true },
  "brun-basarte-wptk-pepe-elvira": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Pepe y Elvira", familia: true, prebodaPadres: true, zaragoza: true },
  "brun-basarte-wptk-ines-ramon": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Inés y Ramón", familia: true, preboda: true, zaragoza: true },
  "brun-basarte-wptk-clara-nico": { nombre: "Familia Brun Basarte", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Clara y Nico", familia: true, preboda: true, zaragoza: true },
  "basarte-gaspar-bays-carlos-ana": { nombre: "Familia Basarte-Gaspar", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Carlos y Ana", familia: true, prebodaPadres: true, zaragoza: true },
  "basarte-gaspar-bays-laura-jose": { nombre: "Familia Basarte-Gaspar", plazas: 3, genero: "p", nombres: ["", "", ""], titulo: "Laura y José", etiquetas: ["", "", "Hija de Laura y José"], ninos: [2], familia: true, preboda: true, zaragoza: true },
  "basarte-gaspar-bays-pablo-rebeca": { nombre: "Familia Basarte-Gaspar", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Pablo y Rebeca", familia: true, preboda: true, zaragoza: true },
  "rosamari-p4dx": { nombre: "Tía Rosa Mari", plazas: 1, genero: "f", nombres: [""], titulo: "Rosa Mari", familia: true, prebodaPadres: true, zaragoza: true },
  "basarte-fernandez-73e5-javier-magdalena": { nombre: "Familia Basarte Fernández", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Javier y Magdalena", familia: true, prebodaPadres: true, zaragoza: true },
  "basarte-fernandez-73e5-javi-irune": { nombre: "Familia Basarte Fernández", plazas: 3, genero: "p", nombres: ["", "", ""], titulo: "Javi e Irune", etiquetas: ["", "", "Hija de Javi e Irune"], ninos: [2], familia: true, preboda: true, zaragoza: true },
  "basarte-fernandez-73e5-nacho-blanca": { nombre: "Familia Basarte Fernández", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Nacho y Blanca", familia: true, preboda: true, zaragoza: true },
  "basarte-jesus-wtby": { nombre: "Familia Basarte", plazas: 3, genero: "p", nombres: ["", "", ""], titulo: "Jesús, Darío y Claudia", familia: true, preboda: true, prebodaPadres: true, prebodaQuien: { puerto: "Darío y Claudia", jerez: "Jesús" }, prebodaNota: "Darío y Claudia, la vuestra es la de El Puerto, con los jóvenes; Jesús, la tuya es la de Jerez, con Gonzalo y Magdy.", zaragoza: true }, // las dos prebodas (14/10/2026)
  "alarcon-hu5s": { nombre: "Familia Alarcón", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Mariela y Aarón", familia: true }, // sin preboda (14/10/2026)
  "miriam-r7kd": { nombre: "Miriam", plazas: 1, genero: "f", nombres: [""], titulo: "Miriam", familia: true }, // sin preboda (14/10/2026)
  "gortazar-alvarez-ehkm-luis-reyes": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Luis y Reyes", familia: true, prebodaPadres: true },
  "gortazar-alvarez-ehkm-borja": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Borja", etiquetas: ["", "Novia de Borja"], familia: true, preboda: true },
  "gortazar-alvarez-ehkm-santi": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Santi", etiquetas: ["", "Novia de Santi"], familia: true, preboda: true },
  "gortazar-alvarez-ehkm-ines-alvaro": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 4, genero: "p", nombres: ["", "", "", ""], titulo: "Inés y Álvaro", etiquetas: ["", "", "Hijo/a de Inés y Álvaro", "Hijo/a de Inés y Álvaro"], ninos: [2, 3], familia: true, preboda: true },
  "gortazar-alvarez-ehkm-maria-beto": { nombre: "Familia Gortázar-Álvarez de las Asturias", plazas: 5, genero: "p", nombres: ["", "", "", "", ""], titulo: "María y Beto", etiquetas: ["", "", "Hijo/a de María y Beto", "Hijo/a de María y Beto", "Hijo/a de María y Beto"], ninos: [2, 3, 4], familia: true, preboda: true },
  "gortazar-fernandez-duran-xmbj-cristina-juan": { nombre: "Familia Gortázar Fernández Durán", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Cristina y Juan", familia: true, prebodaPadres: true },
  "gortazar-fernandez-duran-xmbj-cristina-gavin": { nombre: "Familia Gortázar Fernández Durán", plazas: 3, genero: "p", nombres: ["", "", ""], titulo: "Cristina y Gavin", etiquetas: ["", "", "Hija de Cristina y Gavin"], ninos: [2], familia: true, preboda: true },
  "gortazar-fernandez-duran-xmbj-carla-francois": { nombre: "Familia Gortázar Fernández Durán", plazas: 5, genero: "p", nombres: ["", "", "", "", ""], titulo: "Carla y François", ninos: [2, 3, 4], familia: true, preboda: true },
  "gortazar-diaz-de-rivera-ft7z-fernando-carla": { nombre: "Familia Gortázar Díaz de Rivera", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Fernando y Carla", familia: true, prebodaPadres: true },
  "gortazar-diaz-de-rivera-ft7z-fernandito-maria": { nombre: "Familia Gortázar Díaz de Rivera", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Fernandito y María", familia: true, preboda: true },
  "gortazar-de-casso-2bmr": { nombre: "Familia Gortázar De Casso", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Asun y José", familia: true, prebodaPadres: true },
  "ami-nb6g": { nombre: "Tía Ami", plazas: 1, genero: "f", nombres: [""], titulo: "Ami", familia: true, prebodaPadres: true },
  "bego-joseantonio-cy5m": { nombre: "Tía Bego y José Antonio", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Begoña y José Antonio", familia: true, prebodaPadres: true },
  "sintes-vz35": { nombre: "Familia Sintes", plazas: 5, genero: "p", nombres: ["", "", "", "", ""], titulo: "Carlos, Silvia, Román, Adrián y Nuria", familia: true, prebodaPadres: true },
  // Amigas y amigos de la novia (03/10/2026): un enlace por amiga o pareja; ven la preboda.
  "clara-jaime-yscg": { nombre: "Clara y Jaime", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Clara y Jaime", preboda: true, joven: true },
  "elena-qvjn": { nombre: "Elena", plazas: 1, genero: "f", nombres: [""], titulo: "Elena", preboda: true, joven: true },
  "macarena-kp4k": { nombre: "Macarena", plazas: 1, genero: "f", nombres: [""], titulo: "Macarena", preboda: true, joven: true },
  "maria-javier-5r7q": { nombre: "María y Javier", plazas: 2, genero: "p", nombres: ["", ""], titulo: "María y Javier", preboda: true, joven: true },
  "marisa-gonzalo-9ghf": { nombre: "Marisa y Gonzalo", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Marisa y Gonzalo", preboda: true, joven: true },
  "rocio-afonso-n47v": { nombre: "Rocío y Afonso", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Rocío y Afonso", preboda: true, joven: true },
  "teresa-javier-mtmu": { nombre: "Teresa y Javier", saludo: "Chambea y su ilusión", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Teresa y Javier", preboda: true, joven: true }, // saludo cambiado el 14/10/2026 a petición de Magdalena
  "isabel-jonny-vdxv": { nombre: "Isabel y Jonny", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Isabel y Jonny", preboda: true, joven: true },
  "ale-uvwj": { nombre: "Ale", plazas: 1, genero: "f", nombres: [""], titulo: "Ale", preboda: true, joven: true },
  "belen-tch3": { nombre: "Belén", plazas: 1, genero: "f", nombres: [""], titulo: "Belén", preboda: true, joven: true },
  "marta-felipe-af7e": { nombre: "Marta y Felipe", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Marta y Felipe", preboda: true, joven: true },
  "almu-guille-qdqa": { nombre: "Almu y Guille", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Almu y Guille", preboda: true, joven: true },
  "ainhoa-gwxg": { nombre: "Ainhoa", plazas: 1, genero: "f", nombres: [""], titulo: "Ainhoa", preboda: true, joven: true },
  "andy-cobi-76kp": { nombre: "Andy y Cobi", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Andy y Cobi", preboda: true, joven: true },
  "mariana-tiago-djya": { nombre: "Mariana y Tiago", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Mariana y Tiago", preboda: true, joven: true },
  "marta-alberto-9kph": { nombre: "Marta y Alberto", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Marta y Alberto", preboda: true, joven: true },
  "maria-sucri-azzq": { nombre: "María y Sucri", plazas: 2, genero: "p", nombres: ["", ""], titulo: "María y Sucri", preboda: true, joven: true },
  "candela-carlos-928q": { nombre: "Candela y Carlos", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Candela y Carlos", preboda: true, joven: true },
  "manuela-sacris-2htr": { nombre: "Manuela y Sacris", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Manuela y Sacris", preboda: true, joven: true },
  "miry-edu-szu5": { nombre: "Miry y Edu", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Miry y Edu", preboda: true, joven: true },
  "cris-chema-6pan": { nombre: "Cris y Chema", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Cris y Chema", preboda: true, joven: true },
  "tere-charlie-9vs8": { nombre: "Tere y Charlie", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Tere y Charlie", preboda: true, joven: true },
  "lucia-charlie-yrhd": { nombre: "Lucía y Charlie", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Lucía y Charlie", preboda: true, joven: true },
  "lucia-jacobo-n5ug": { nombre: "Lucía y Jacobo", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Lucía y Jacobo", preboda: true, joven: true },
  // Amigos de los padres de la novia (03/10/2026): un único enlace general para todos.
  // Dos huecos (tú y acompañante) con nombre y apellidos; preboda de adultos en Jerez y hoteles recomendando Jerez.
  "amigos-gonzalo-magdy-r8tq": { nombre: "Amigos de Gonzalo y Magdy", saludo: "Queridos amigos", plazas: 2, genero: "p", apellidos: true, padres: true, balon: true },
  // Amigos de los padres de Solís (02/11/2026): enlace general, sin preboda.
  "amigos-padres-solis-k3vd": { nombre: "Amigos de los padres de Solís", saludo: "Queridos amigos", plazas: 2, genero: "p", apellidos: true, jerez: true }, // como el de los amigos de Gonzalo y Magdy pero sin preboda (15/11/2026)
  // Invitado y amigas de Ana (hermana de la novia), 04/10/2026: enlaces individuales, sin acompañante, con preboda. El nombre lo escriben ellos (hueco vacío).
  "reina-m6ny": { nombre: "Reina", plazas: 1, genero: "m", nombres: [""], titulo: "Álvaro", preboda: true, joven: true },
  "cristina-gimeno-u6vd": { nombre: "Rizos", plazas: 1, genero: "f", nombres: [""], titulo: "Cristina", preboda: true, joven: true },
  "maria-lopez-de-haro-yrnp": { nombre: "María", plazas: 1, genero: "f", nombres: [""], titulo: "María", preboda: true, joven: true },
  // Cris Elices (amiga de la novia, "Otros amigos"), 05/10/2026: con acompañante, preboda de El Puerto; los nombres los escriben ellos.
  "cris-elices-avtk": { nombre: "Cris", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Cris", etiquetas: ["", "Acompañante"], preboda: true, joven: true },
  // Amigos de Solís (Madrid), 17/10/2026: con preboda de El Puerto.
  "juande-carmele-tdda": { nombre: "Juande y Carmele", saludo: "Para los Largos, Juande y Carmele", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Juande y Carmele", preboda: true, joven: true },
  "joaco-maca-59p3": { nombre: "Joaco y Maca", saludo: "Joacorrote y Maca", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Joaco y Maca", preboda: true, joven: true },
  // Familia de Solís (03/10/2026): un enlace por casa. 15/11/2026: los huecos de nombre van en blanco; cada uno escribe su nombre y apellidos.
  "carlos-carmen-6cm3": { nombre: "Carlos y Carmen", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Carlos y Carmen" },
  "fer-lola-7n4f": { nombre: "Fer y Lola", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Fer y Lola" },
  "fer-lucia-9t59": { nombre: "Fer y Lucía", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Fer y Lucía", preboda: true },
  "maria-freddy-fnt3": { nombre: "María y Freddy", plazas: 2, genero: "p", nombres: ["", ""], titulo: "María y Freddy", preboda: true },
  "carlos-aq8j": { nombre: "Carlos", plazas: 1, genero: "m", nombres: [""], titulo: "Carlos", preboda: true },
  "moni-gksh": { nombre: "Moni", plazas: 1, genero: "f", nombres: [""], titulo: "Moni" },
  "bea-sve5": { nombre: "Bea", plazas: 1, genero: "f", nombres: [""], titulo: "Bea" },
  "guille-rocio-cfd6": { nombre: "Guille y Rocío", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Guille y Rocío", preboda: true },
  "beita-jaime-myfr": { nombre: "Beita y Jaime", plazas: 5, genero: "p", nombres: ["", "", "", "", ""], titulo: "Beita y Jaime", ninos: [2, 3, 4], preboda: true },
  "manolo-monica-ysca": { nombre: "Manolo y Mónica", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Manolo y Mónica" },
  "lucia-g2mz": { nombre: "Lucía", plazas: 1, genero: "f", nombres: [""], titulo: "Lucía", preboda: true },
  "alba-trpw": { nombre: "Alba", plazas: 1, genero: "f", nombres: [""], titulo: "Alba", preboda: true },
  "cris-h9e8": { nombre: "Cris", plazas: 3, genero: "p", nombres: ["", "", ""], titulo: "Cris", etiquetas: ["", "Amiga de Cris", "Amiga de Cris"], preboda: true },
  "jaime-tio-r4vn": { nombre: "Jaime", plazas: 1, genero: "m", nombres: [""], titulo: "Jaime" },
  // Familia paterna de Solís (02/11/2026; parejas corregidas por Solís el mismo día; Alvarito es de la familia materna): un enlace por casa; los primos con acompañante escriben su nombre.
  "maria-0owg": { nombre: "María", plazas: 1, genero: "f", nombres: [""], titulo: "María" },
  "carlos-xq0v": { nombre: "Carlos", plazas: 1, genero: "m", nombres: [""], titulo: "Carlos" },
  "carlos-carmita-ykpa": { nombre: "Carlos y Carmita", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Carlos y Carmita" },
  "luis-ines-x6pc": { nombre: "Luis e Inés", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Luis e Inés" },
  "carlos-x8em": { nombre: "Carlos y María", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Carlos y María", preboda: true },
  "javi-zjo6": { nombre: "Javi", plazas: 1, genero: "m", nombres: [""], titulo: "Javi", preboda: true },
  "ines-tlnz": { nombre: "Inés", plazas: 1, genero: "f", nombres: [""], titulo: "Inés", preboda: true },
  "maria-8ubp": { nombre: "María", plazas: 1, genero: "f", nombres: [""], titulo: "María", preboda: true },
  "pablo-a3qz": { nombre: "Pablo y Isabela", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Pablo y Isabela" },
  "elena-6lfp": { nombre: "Elena y Jaime", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Elena y Jaime" },
  "teresa-vopc": { nombre: "Teresa y Pedro", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Teresa y Pedro" },
  "daniela-srj3": { nombre: "Daniela", plazas: 1, genero: "f", nombres: [""], titulo: "Daniela", preboda: true },
  "alvarito-ope7": { nombre: "Alvarito", plazas: 1, genero: "m", nombres: [""], titulo: "Alvarito", preboda: true },
  // Amigos de Solís de Sevilla (02/11/2026): con preboda de El Puerto; nombres de los acompañantes dados por Solís.
  "carlos-y-blanca-rja7": { nombre: "Carlos y Blanca", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Carlos y Blanca", preboda: true, joven: true },
  "alfon-nhow": { nombre: "Alfon", plazas: 1, genero: "m", nombres: [""], titulo: "Alfon", preboda: true, joven: true },
  "alvaro-y-blanca-rpgx": { nombre: "Álvaro y Blanca", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Álvaro y Blanca", preboda: true, joven: true },
  "rufino-vvm3": { nombre: "Rufino", plazas: 1, genero: "m", nombres: [""], titulo: "Rufino", preboda: true, joven: true },
  "beltran-f7jz": { nombre: "Beltrán", plazas: 1, genero: "m", nombres: [""], titulo: "Beltrán", preboda: true, joven: true },
  "camilo-y-conchita-a4n3": { nombre: "Camilo y Conchita", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Camilo y Conchita", preboda: true, joven: true },
  "carlos-e-ina-qz6h": { nombre: "Carlos e Ina", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Carlos e Ina", preboda: true, joven: true },
  "charly-y-adela-tfc4": { nombre: "Charly y Adela", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Charly y Adela", preboda: true, joven: true },
  "curro-y-guio-ljtv": { nombre: "Curro y Guio", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Curro y Guio", preboda: true, joven: true },
  "dani-e-ines-ray6": { nombre: "Dani e Inés", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Dani e Inés", preboda: true, joven: true },
  "fale-y-elena-o3lj": { nombre: "Fale y Elena", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Fale y Elena", preboda: true, joven: true },
  "aguilar-komo": { nombre: "Aguilar", plazas: 1, genero: "m", nombres: [""], titulo: "Aguilar", preboda: true, joven: true },
  "loring-9kfl": { nombre: "Loring", plazas: 1, genero: "m", nombres: [""], titulo: "Loring", preboda: true, joven: true },
  "arimon-c51w": { nombre: "Arimon", plazas: 1, genero: "m", nombres: [""], titulo: "Arimon", preboda: true, joven: true },
  "jaime-y-carla-u3jl": { nombre: "Jaime y Carla", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Jaime y Carla", preboda: true, joven: true },
  "juan-y-natalia-5cx0": { nombre: "Juan y Natalia", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Juan y Natalia", preboda: true, joven: true },
  "juanri-tnyw": { nombre: "Juanri", plazas: 1, genero: "m", nombres: [""], titulo: "Juanri", preboda: true, joven: true },
  "manu-y-carmen-8cab": { nombre: "Manu y Carmen", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Manu y Carmen", preboda: true, joven: true },
  "pablo-y-sara-b6vb": { nombre: "Pablo y Sara", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Pablo y Sara", preboda: true, joven: true },
  "richi-tk1h": { nombre: "Richi", plazas: 1, genero: "m", nombres: [""], titulo: "Richi", preboda: true, joven: true },
  "gon-y-daniela-pjcj": { nombre: "Gon y Daniela", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Gon y Daniela", preboda: true, joven: true },
  "antonio-y-rochi-s9hi": { nombre: "Antonio y Rochi", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Antonio y Rochi", preboda: true, joven: true },
  // Amigos de Solís (Madrid) (02/11/2026): nombres de los acompañantes dados por Solís.
  "charly-y-sarita-ho3o": { nombre: "Charly y Sarita", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Charly y Sarita", preboda: true, joven: true },
  "alvarini-y-blanca-3lsc": { nombre: "Alvarini y Blanca", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Alvarini y Blanca", preboda: true, joven: true },
  "berni-y-marta-jm9t": { nombre: "Berni y Marta", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Berni y Marta", preboda: true, joven: true },
  "coqui-y-cova-4l5h": { nombre: "Coqui y Cova", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Coqui y Cova", preboda: true, joven: true },
  "edu-y-lulu-e55e": { nombre: "Edu y Lulú", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Edu y Lulú", preboda: true, joven: true },
  "gonchi-y-paula-k180": { nombre: "Gonchi y Paula", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Gonchi y Paula", preboda: true, joven: true },
  "guille-y-sara-4dr0": { nombre: "Guille y Sara", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Guille y Sara", preboda: true, joven: true },
  "ignacio-y-neni-8rv8": { nombre: "Ignacio y Neni", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Ignacio y Neni", preboda: true, joven: true },
  "telmo-y-ela-utyx": { nombre: "Telmo y Ela", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Telmo y Ela", preboda: true, joven: true },
  "jaime-y-moni-uurz": { nombre: "Jaime y Moni", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Jaime y Moni", preboda: true, joven: true },
  "javier-y-belen-s8ln": { nombre: "Javier y Belén", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Javier y Belén", preboda: true, joven: true },
  "jorge-y-maria-ksuu": { nombre: "Jorge y María", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Jorge y María", preboda: true, joven: true },
  "pepelu-y-telle-sxyx": { nombre: "Pepelu y Telle", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Pepelu y Telle", preboda: true, joven: true },
  "nito-y-ana-derc": { nombre: "Nito y Ana", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Nito y Ana", preboda: true, joven: true },
  "luis-y-ana-h2wt": { nombre: "Luis y Ana", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Luis y Ana", preboda: true, joven: true },
  "pedro-y-belen-ofn9": { nombre: "Pedro y Belén", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Pedro y Belén", preboda: true, joven: true },
  "puki-101q": { nombre: "Puki", plazas: 1, genero: "m", nombres: [""], titulo: "Puki", preboda: true, joven: true },
  "puy-7e10": { nombre: "Puy e Inés", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Puy e Inés", saludo: "¡Parseritos!", preboda: true, joven: true },
  "alberto-y-jimena-d3xb": { nombre: "Alberto y Jimena", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Alberto y Jimena", preboda: true, joven: true },
  "javier-y-sofia-wibr": { nombre: "Javier y Sofía", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Javier y Sofía", preboda: true, joven: true },
  // Amigos de Solís (trabajo) (02/11/2026): nombres de los acompañantes dados por Solís.
  "marc-9bmk": { nombre: "Marc", plazas: 1, genero: "m", nombres: [""], titulo: "Marc", preboda: true, joven: true },
  "rafa-jxmi": { nombre: "Rafa", plazas: 1, genero: "m", nombres: [""], titulo: "Rafa", preboda: true, joven: true },
  "hugo-59dn": { nombre: "Hugo", plazas: 1, genero: "m", nombres: [""], titulo: "Hugo", preboda: true, joven: true },
  "fundas-nmrx": { nombre: "Fundas", plazas: 1, genero: "m", nombres: [""], titulo: "Fundas", preboda: true, joven: true },
  "arguelles-p041": { nombre: "Argüelles", plazas: 1, genero: "m", nombres: [""], titulo: "Argüelles", preboda: true, joven: true },
  "isa-f1vv": { nombre: "Isa", plazas: 1, genero: "f", nombres: [""], titulo: "Isa", preboda: true, joven: true },
  "mugui-miqf": { nombre: "Mugui", plazas: 1, genero: "m", nombres: [""], titulo: "Mugui", preboda: true, joven: true },
  "delpa-6880": { nombre: "Delpa", plazas: 1, genero: "m", nombres: [""], titulo: "Delpa", preboda: true, joven: true },
  "jorge-g4gs": { nombre: "Jorge", plazas: 1, genero: "m", nombres: [""], titulo: "Jorge", preboda: true, joven: true },
  "leti-qunc": { nombre: "Leti", plazas: 1, genero: "f", nombres: [""], titulo: "Leti", preboda: true, joven: true },
  "maria-e-59hg": { nombre: "María E.", plazas: 1, genero: "f", nombres: [""], titulo: "María E.", preboda: true, joven: true },
  "paco-2grt": { nombre: "Paco", plazas: 1, genero: "m", nombres: [""], titulo: "Paco", preboda: true, joven: true },
  "ramon-nvq4": { nombre: "Ramón", plazas: 1, genero: "m", nombres: [""], titulo: "Ramón", preboda: true, joven: true },
  "vicky-f3h3": { nombre: "Vicky", plazas: 1, genero: "f", nombres: [""], titulo: "Vicky", preboda: true, joven: true },
  "vero-oncx": { nombre: "Vero", plazas: 1, genero: "f", nombres: [""], titulo: "Vero", preboda: true, joven: true },
  "bego-uqgm": { nombre: "Bego", plazas: 1, genero: "f", nombres: [""], titulo: "Bego", preboda: true, joven: true },
  "lucas-ak3f": { nombre: "Lucas", plazas: 1, genero: "m", nombres: [""], titulo: "Lucas", preboda: true, joven: true },
  // Compromisos de Solís (02/11/2026; con preboda desde el mismo día): nombres de los acompañantes dados por Solís.
  "nono-68t2": { nombre: "Nono", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Nono", etiquetas: ["", "Acompañante"], preboda: true, joven: true },
  "falele-gjei": { nombre: "Falele", plazas: 1, genero: "m", nombres: [""], titulo: "Falele", preboda: true, joven: true },
  "nacho-y-elena-2ywp": { nombre: "Nacho y Elena", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Nacho y Elena", preboda: true, joven: true },
  "ines-y-pepe-nh4i": { nombre: "Inés y Pepe", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Inés y Pepe", preboda: true, joven: true },
  "reyes-5zpk": { nombre: "Reyes", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Reyes", etiquetas: ["", "Acompañante"], preboda: true, joven: true },
  "victor-7k7a": { nombre: "Víctor", plazas: 1, genero: "m", nombres: [""], titulo: "Víctor", preboda: true, joven: true },
  "elvira-y-miguel-iwhz": { nombre: "Elvira y Miguel", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Elvira y Miguel", preboda: true, joven: true },
  "pepe-y-francina-y3im": { nombre: "Pepe y Francina", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Pepe y Francina", preboda: true, joven: true },
  "patri-y-pedro-9f3z": { nombre: "Patri y Pedro", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Patri y Pedro", preboda: true, joven: true },
  "juan-4f0m": { nombre: "Juan", plazas: 1, genero: "m", nombres: [""], titulo: "Juan", preboda: true, joven: true },
  // Reservas de Solís (sin mandar) (02/11/2026): nombres de los acompañantes dados por Solís.
  "alvaro-0hy0": { nombre: "Álvaro", plazas: 1, genero: "m", nombres: [""], titulo: "Álvaro", preboda: true, joven: true },
  "ignacio-abk4": { nombre: "Ignacio", plazas: 1, genero: "m", nombres: [""], titulo: "Ignacio", preboda: true, joven: true },
  "olaegui-c8ww": { nombre: "Olaegui", plazas: 1, genero: "m", nombres: [""], titulo: "Olaegui", preboda: true, joven: true },
  "bono-or39": { nombre: "Bono", plazas: 1, genero: "m", nombres: [""], titulo: "Bono", preboda: true, joven: true },
  "emilio-st4q": { nombre: "Emilio", plazas: 1, genero: "m", nombres: [""], titulo: "Emilio", preboda: true, joven: true },
  "emi-gt1z": { nombre: "Emi", plazas: 1, genero: "m", nombres: [""], titulo: "Emi", preboda: true, joven: true },
  "xullo-tszt": { nombre: "Xullo", plazas: 1, genero: "m", nombres: [""], titulo: "Xullo", preboda: true, joven: true },
  "abaurre-q3zc": { nombre: "Nico y María", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Nico y María", preboda: true, joven: true },
  "anton-y-daniela-k7wq": { nombre: "Antón y Daniela", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Antón y Daniela", preboda: true, joven: true },
  // Hospital, trabajo y adjuntos de la novia (02/11/2026): saludos que dio Magdalena. Algunos acompañantes ya dijeron que no vienen, pero se les deja la plaza en la invitación (en el Excel siguen con No).
  "chema-y-sergio-bpoo": { nombre: "Chema y Sergio", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Chema y Sergio", preboda: true, joven: true },
  "jose-y-paula-sjsj": { nombre: "José y Paula", plazas: 2, genero: "p", nombres: ["", ""], titulo: "José y Paula", preboda: true, joven: true },
  "alvaro-y-jesus-agng": { nombre: "Álvaro y Jesús", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Álvaro y Jesús", preboda: true, joven: true },
  "maca-y-jaime-swhj": { nombre: "Maca y Jaime", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Maca y Jaime", preboda: true, joven: true },
  "jaime-wd32": { nombre: "Jaime", plazas: 1, genero: "m", nombres: [""], titulo: "Jaime", preboda: true, joven: true },
  "pedro-i1p2": { nombre: "Pedro", plazas: 1, genero: "m", nombres: [""], titulo: "Pedro", preboda: true, joven: true },
  "monchi-y-mar-xrc7": { nombre: "Monchi y Mar", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Monchi y Mar", preboda: true, joven: true },
  "juan-y-celia-lnx9": { nombre: "Juan y Celia", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Juan y Celia", preboda: true, joven: true },
  "toni-y-lidia-fy8s": { nombre: "Toni y Lidia", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Toni y Lidia", preboda: true, joven: true },
  "lara-y-diego-ygt3": { nombre: "Lara y Diego", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Lara y Diego", preboda: true, joven: true },
  "jorge-y-anabella-urf1": { nombre: "Jorge y Anabella", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Jorge y Anabella", preboda: true, joven: true },
  "dani-te2k": { nombre: "Dani y Laura", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Dani y Laura", preboda: true, joven: true },
  "miren-y-alvaro-zfbh": { nombre: "Miren y Álvaro", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Miren y Álvaro", preboda: true, joven: true },
  "pablo-y-marta-a026": { nombre: "Pablo y Marta", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Pablo y Marta", preboda: true, joven: true },
  "javier-z424": { nombre: "Javier", plazas: 1, genero: "m", nombres: [""], titulo: "Javier", preboda: true, joven: true },
  "zach-1ggg": { nombre: "Zach", plazas: 1, genero: "m", nombres: [""], titulo: "Zach", preboda: true, joven: true },
  "carlos-y-barbara-b67h": { nombre: "Carlos y Bárbara", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Carlos y Bárbara", preboda: true, joven: true },
  "mikel-r4zq": { nombre: "Mikel", plazas: 1, genero: "m", nombres: [""], titulo: "Mikel", preboda: true, joven: true }, // Mikel Taibo, hospital (15/11/2026)
  "andrea-y-juan-rf9n": { nombre: "Andrea y Juan", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Andrea y Juan", preboda: true, joven: true },
  "monica-y-nacho-1u0r": { nombre: "Mónica y Nacho", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Mónica y Nacho", preboda: true, joven: true },
  "carla-y-jaime-zhry": { nombre: "Carla y Jaime", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Carla y Jaime", preboda: true, joven: true },
  "oscar-y-vanesa-t5kd": { nombre: "Óscar y Vanesa", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Óscar y Vanesa", preboda: true, joven: true } // adjunto del hospital (15/11/2026)
};
// Enlace antiguo de Isabel y Jonny (por si ya se mandó): apunta a la misma invitación.
window.INVITADOS["isabel-johnny-vdxv"] = window.INVITADOS["isabel-jonny-vdxv"];
// Enlace antiguo de Ale (por si ya se mandó).
window.INVITADOS["alejandra-uvwj"] = window.INVITADOS["ale-uvwj"];
// Enlace antiguo de Andy y Cobi (por si ya se mandó).
window.INVITADOS["andy-cobaleda-76kp"] = window.INVITADOS["andy-cobi-76kp"];
// Enlace antiguo de Miry y Edu (por si ya se mandó).
window.INVITADOS["miriam-edu-szu5"] = window.INVITADOS["miry-edu-szu5"];
// 15/11/2026: sin preboda; se les recomienda dormir en Jerez (jerez: true). 
window.INVITADOS["julian-meme-k8vb"] = { nombre: "Julián y Meme", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Julián y Meme", familia: true, prebodaPadres: true }; // hotel pagado (hab. 39 del AQ35) y preboda de Gonzalo y Magdy en Jerez
window.INVITADOS["rafa-marta-q2nw"] = { nombre: "Rafa y Marta", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Rafa y Marta", jerez: true };
window.INVITADOS["loreto-vicente-h6tz"] = { nombre: "Loreto y Vicente", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Loreto y Vicente", jerez: true };
// Enlace antiguo de Toni escrito "tony" (por si ya se mandó): misma invitación.
window.INVITADOS["tony-y-lidia-fy8s"] = window.INVITADOS["toni-y-lidia-fy8s"];
// 15/11/2026: estaban en duda; invitados sin preboda.
window.INVITADOS["pedro-maria-x7jd"] = { nombre: "Pedro y María", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Pedro y María" };
window.INVITADOS["curro-pilar-w2ns"] = { nombre: "Curro y Pilar", plazas: 2, genero: "p", nombres: ["", ""], titulo: "Curro y Pilar" };
window.INVITADOS["javi-artacho-c9fm"] = { nombre: "Javi", plazas: 1, genero: "m", nombres: [""], titulo: "Javi" };
// Enlace de prueba de los amigos de los padres (por si ya se mandó): misma invitación que el enlace general.
window.INVITADOS["prueba-padres"] = window.INVITADOS["amigos-gonzalo-magdy-r8tq"];
// Enlace antiguo de Rizos con el apellido mal escrito (por si ya se mandó): misma invitación.
window.INVITADOS["cristina-jimeno-u6vd"] = window.INVITADOS["cristina-gimeno-u6vd"];
