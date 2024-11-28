const EducationComponent = {
    template: `
        <div>
            <h3>Estudios Formales</h3>
            <ul v-for="estudios in estudiosFormalesList">
                <a :href= "estudios[3].link" target="_blank">
                    <li class="p-instituto">{{ estudios[0].institucion }}</li>
                    <li class="p-titulo">{{ estudios[1].titulo }}<img class="link" src="assets/svg/link.svg" alt="icono-link"></li>
                    <li class="p-estado">{{ estudios[2].estado }}</li>
                </a>
            </ul>
        </div>
        <div>
            <h3>Cursos</h3>
            <ul v-for="curso in cursosList">
                <a :href= "curso[3].link" target="_blank">
                    <li class="p-instituto">{{ curso[0].institucion }}</li>
                    <li class="p-titulo">{{ curso[1].tipo }}<img class="link" src="assets/svg/link.svg" alt="icono-link"></li>
                    <li class="p-estado">{{ curso[2].estado }}</li>
                </a>
            </ul>
        </div>
    `,
    data() {
        return {
            estudiosFormalesList: {
                1: [
                  {institucion: "Universidad de la Ciudad de Buenos Aires"},
                  {titulo: "Licenciatura en Desarrollo y Producción de Videojuegos"},    
                  {estado: "En curso"},
                  {link: "https://udelaciudad.edu.ar/licenciatura-en-desarrollo-y-produccion-de-videojuegos/"},
                ],
                2: [
                  {institucion: "Instituto de Formación Técnica 18"},
                  {titulo: "Tecnicatura Superior en Desarrollo de Software"},
                  {estado: "Completado"},
                  {link: "https://www.ifts18.edu.ar/carreras/desarrollo-de-software"},
                ],
            },
            cursosList: {
                1: [
                    {institucion: "BA Multiplica 2.0"},
                    {tipo: "Frontend Developer"},
                    {estado: "Completado"},
                    {link: "https://drive.google.com/file/d/1eRNJEUwneCoournhClAdHVOZabm2xBjt/view?usp=sharing"},
                ],
                2: [
                    {institucion: "Codo a Codo 4.0"},
                    {tipo: "Full Stack Python Developer"},    
                    {estado: "Completado"},
                    {link: "https://drive.google.com/file/d/1NkrZhANh_LUCDZDke9Y2Ql8YZ56zl1M3/view?usp=sharing"},
                ],
            }
        }
    },
};