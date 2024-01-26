// HEADER
Vue.component('header-content',{
    template:
    `
        <div id="header-content" class="fila">
            <section id="info" class="fila">
                <article id="img-box">
                    <img id="foto-perfil" src="assets/img/PIXEL-1x1.png" alt="Personaje pixel" sizes="">
                </article>
                <article id="datos-personales" class="columna">
                    <h1 id="nombre">{{nombre}}</h1>
                    <h3 id="especialidad">{{especialidad}}</h3>
                    <p id="email" class="fila contacto">
                        <i id="i-email" class="fa-solid fa-envelope"></i>
                        <span id="copyButton">{{email}}</span>
                        <i id="copyBtn" class="fa-regular fa-copy" title="Copiar email"></i>
                    </p>
                    <a id="github" class="fila contacto" href="https://github.com/AntonellaLapalma" title="Ir a GitHub">
                        <i id="i-github" class="fa-brands fa-github"></i>
                        <span>{{github}}</span>
                        <i id="redirect" class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </article>
            </section>
            <section id="descarga">
                <a id="cv" class="btn-p fila" href="assets/pdf/Antonella Lapalma - CV.pdf">
                    <i id="i-cv" class="fa-solid fa-download"></i>
                    <span>Descargar CV</span>
                </a>
            </section>
        </div>
    `,
    data(){
        return{
            nombre:"Antonella Lapalma",
            especialidad:"Software Developer",
            email:"antonellalapalma97@gmail.com",
            github:"/antonellalapalma",
        }
    }
})
{/* <a id="github" class="fila contacto" href="https://www.linkedin.com/in/antonella-lapalma/" title="Ir a GitHub">
                        <i id="i-github"  class="fa-brands fa-linkedin"></i>
                        <span>{{github}}</span>
                        <i id="redirect" class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a> */}
// NAVBAR
Vue.component('nav-bar',{
    props: ['selected-tab'],
    template:
    `
    <div id="nav-bar" class="fila">
        <ul id="secciones" class="fila">
            <li :class="{ 'item-secciones': true, 'fila': true, 'active': selectedTab === a }" @click="selectSection(a)">{{ a }}</li>
            <li :class="{ 'item-secciones': true, 'fila': true, 'active': selectedTab === b }" @click="selectSection(b)">{{ b }}</li>
        </ul>
        <ul id="secciones" class="fila">
            <li :class="{ 'item-secciones': true, 'fila': true, 'active': selectedTab === c }" @click="selectSection(c)">{{ c }}</li>
            <li :class="{ 'item-secciones': true, 'fila': true, 'active': selectedTab === d }" @click="selectSection(d)">{{ d }}</li>
        </ul>
        <ul id="secciones" class="fila">
            <li :class="{ 'item-secciones': true, 'fila': true, 'active': selectedTab === e }" @click="selectSection(e)">{{ e }}</li>
            <li :class="{ 'item-secciones': true, 'fila': true, 'active': selectedTab === f }" @click="selectSection(f)">{{ f }}</li>
        </ul>
    </div>
    `,
    data(){
        return{
            a:"Sobre mi",
            b:"Habilidades",
            c:"Estudios",
            d:"Proyectos",
            e:"Experiencia",
            f:"Contacto",
        };
    },
    methods: {
        selectSection(section) {
            console.log('Valor de selectedTab al hacer clic:', this.selectedTab);
            this.$emit('tab-selected', section);
        },
    },
});
Vue.component('nav-proyectos', {
    props: ['selected-tab2'],
    template: `
      <div id="nav-proyectos" class="fila">
        <ul id="box-circulos" class="fila">
            <li :class="{ 'circulo': true, 'active2': selectedTab2 === z }" @click="selectSection2(z)"></li>
            <li :class="{ 'circulo': true, 'active2': selectedTab2 === x }" @click="selectSection2(x)"></li>
            <li :class="{ 'circulo': true, 'active2': selectedTab2 === y }" @click="selectSection2(y)"></li>
        </ul>
      </div>
    `,
    data(){
        return{
            z:"escolares",
            x:"tienda",
            y:"kiosco",
        };
    },
    methods: {
        selectSection2(section) {
            console.log('Valor de selectedTab 2 al hacer clic:', this.selectedTab2);
            this.$emit('tab-selected2', section);
        },
    },
});
// SECCIONES
Vue.component('contenido-sobre-mi', {
    template: 
    `
    <div id="sobre-mi">
        <section class="fila marco">
            <i class="fa-solid fa-user-tie i-marco"></i>
            <h3 class="titulo-marco">Sobre mi</h3>
        </section>
        <section class="columna contenido">
            <h3 class="titulo">Presentación</h3>
            <p>Hola! Soy <span>Antonella</span>, tengo 26 años y me apasiona la tecnología, el diseño y programación de software. Recientemente, completé una <span>Tecnicatura Superior en Desarrollo de Software</span>, donde adquirí una base sólida en conceptos fundamentales y metodologías de desarrollo.</p>
            <br>
            <p>Durante mi formación, busqué ampliar mis habilidades participando en cursos especializados. Completé con éxito un curso dedicado al <span>Desarrollo Front End</span> y otro en <span>Full Stack Python</span>.</p>
            <br>
            <p>Actualmente me encuentro cursando una <span>Licenciatura en Desarrollo y Producción de Videojuegos</span>, donde continúo expandiendo mis conocimientos.</p>
            <br>
            <p>Me entusiasma la oportunidad de <span>contribuir</span>, <span>aprender</span> y <span>desarrollarme</span> en un entorno laboral donde pueda aportar mi <span>creatividad</span> y <span>conocimientos</span> para impulsar proyectos significativos y seguir evolucionando como profesional del Desarrollo de Software.</p>
        </section>
    </div>
    `,
});
Vue.component('contenido-habilidades', {
    template: 
    `
    <div>
        <section class="fila marco">
            <i class="fa-solid fa-user-gear i-marco"></i>
            <h3 class="titulo-marco">Habilidades</h3>
        </section>
        <section id="habilidades" class="fila contenido">
            <article class="columna">
                <h3 class="titulo2">Front End</h3>
                <div class="fila listas">
                    <ul class="lista-habilidades columna">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Java Script</li>
                        <li>Vue.js</li>
                    </ul>
                    <ul class="barras-habilidades columna">
                        <li class="fila">
                            <intermedio></intermedio>
                        </li>
                        <li class="fila">
                            <intermedio></intermedio>
                        </li>
                        <li class="fila">
                            <basico></basico>
                        </li>
                        <li class="fila">
                            <basico></basico>
                        </li>
                        <li class="fila">
                            <basico></basico>
                        </li>
                    </ul>
                </div>
            </article>
            <article  class="columna">
                <h3 class="titulo2">Back End</h3>
                <div class="fila listas">
                    <ul class="lista-habilidades columna">
                        <li>Python</li>
                        <li>Django</li>
                        <li>SQL</li>
                    </ul>
                    <ul class="barras-habilidades columna">
                        <li class="fila">
                            <intermedio></intermedio>
                        </li>
                        <li class="fila">
                            <intermedio></intermedio>
                        </li>
                        <li class="fila">
                            <basico></basico>
                        </li>
                    </ul>
                </div>
            </article>
            <article class="columna">
                <h3 class="titulo2">Bases de Datos</h3>
                <div class="fila listas">
                    <ul class="lista-habilidades columna">
                        <li>PostgreSQL</li>
                        <li>MariaDB</li>
                        <li>MySQL</li>
                    </ul>
                    <ul class="barras-habilidades columna">
                        <li class="fila">
                            <basico></basico>
                        </li>
                        <li class="fila">
                            <basico></basico>
                        </li>
                        <li class="fila">
                            <basico></basico>
                        </li>
                    </ul>
                </div>
            </article>
            <article class="columna">
                <h3 class="titulo2">Control de Versiones</h3>
                <div class="fila listas">
                    <ul class="lista-habilidades columna">
                        <li>GitHub</li>
                        <li>Git</li>
                    </ul>
                    <ul class="barras-habilidades columna">
                        <li class="fila">
                            <basico></basico>
                        </li>
                        <li class="fila">
                            <basico></basico>
                        </li>
                    </ul>
                </div>
            </article>
            <article class="columna">
                <h3 class="titulo2">Idiomas</h3>
                <div class="fila listas">
                    <ul class="lista-habilidades columna">
                        <li>Inglés</li>
                    </ul>
                    <ul class="barras-habilidades columna">
                        <li class="fila">
                            <basico></basico>
                        </li>
                    </ul>
                </div>
            </article>
        </section> 
    </div>
    `,
});
Vue.component('contenido-estudios', {
    template: 
    `
    <div>
        <section class="fila marco">
            <i class="fa-solid fa-book-bookmark i-marco"></i>
            <h3 class="titulo-marco">Estudios</h3>
        </section>
        <section id="estudios" class="fila contenido">
            <section>
                <h3 class="titulo">Estudios Formales</h3>
                <article>
                    <ul>
                        <li class="estudio-instituto">Universidad de la Ciudad de Buenos Aires</li>
                        <li class="estudio-titulo fila">
                            <a href="https://udelaciudad.edu.ar/licenciatura-en-desarrollo-y-produccion-de-videojuegos/" class="link-estudio" target="_blank" title="+Info">
                            Licenciatura en Desarrollo y Producción de Videojuegos
                            <i id="redirect" class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </li>
                        <li class="estado">En curso</li>
                    </ul>
                </article>
                <article>
                    <ul>
                        <li class="estudio-instituto">Instituto de Formación Técnica 18</li>
                        <li class="estudio-titulo fila">
                            <a href="https://www.ifts18.edu.ar/carreras/desarrollo-de-software" class="link-estudio" target="_blank" title="+Info">Tecnicatura Superior en Desarrollo de Software
                            <i id="redirect" class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </li>
                        <li class="estado">Finalizado</li>
                    </ul>
                </article>
            </section>
            <section>
                <h3 class="titulo">Cursos y Certificaciones</h3>
                <article>
                    <ul>
                        <li class="estudio-instituto">Codo a Codo 4.0</li>
                        <li class="estudio-titulo">
                            <a href="https://inscripcionesagencia.bue.edu.ar/codoacodo/courses" class="link-estudio" target="_blank" title="+Info">
                                Full Stack Python Developer
                                <i id="redirect" class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </li>
                        <li class="estado">Finalizado</li>
                    </ul>
                </article>
                <article>
                    <ul>
                        <li class="estudio-instituto">BA Multiplica 2.0 - UTN</li>
                        <li class="estudio-titulo">
                            <a class="link-estudio">
                                Front End Developer
                            </a>
                        </li>
                        <li class="estado">Finalizado</li>
                    </ul>
                </article>
            </section>

        </section>
    </div>
    `
});
Vue.component('contenido-proyectos', {
    template: `
        <div>
            <section class="fila marco">
                <i class="fa-solid fa-code i-marco"></i>
                <h3 class="titulo-marco">Proyectos</h3>
            </section>
            <section class="columna contenido no-desplazar">
                <article class="desplazamiento">
                    <component :is="selectedTabComponent2"></component>
                </article>
                <article>
                    <nav-proyectos :selected-tab2="selectedTab2" @tab-selected2="selectTab2"></nav-proyectos>
                </article>
            </section>         
        </div>
    `,
    data() {
        return {
            selectedTab2: 'escolares',
        };
    },
    computed: {
        selectedTabComponent2() {
            return 'proyecto-' + (this.selectedTab2 || '').toLowerCase().replace(' ', '-');
        },
    },
    methods: {
        selectTab2(tab) {
            this.selectedTab2 = tab;
        },
    },
});
Vue.component('contenido-experiencia', {
    template: 
    `
    <div>
        <section class="fila marco">
            <i class="fa-solid fa-briefcase i-marco"></i>
            <h3 class="titulo-marco">Experiencia</h3>
        </section>
        <section class="columna contenido">
            <h3 class="titulo">Sin experiencia laboral</h3>
            <p></p>
        </section>
    </div>
    `
});
Vue.component('contenido-contacto', {
    template: 
    `
    <div>
        <section class="fila marco">
            <i class="fa-solid fa-envelope i-marco"></i>
            <h3 class="titulo-marco">Contacto</h3>
        </section>
        <section id="contacto" class="contenido">
            <form action="https://formsubmit.co/antoolapalma1997@gmail.com" method="POST">
                <section id="nombre-contacto" class="fila">
                    <article class="columna box-label">
                        <input type="text" placeholder=" " name="Nombre" required title="Ingrese su nombre">
                        <label for="">Nombre</label>
                    </article>
                    <article class="columna box-label" >
                        <input type="text" placeholder=" " required name="Apellido" title="Ingrese su apellido">
                        <label for="">Apellido</label>
                    </article>
                </section>
                <section class="columna box-label">
                    <input type="email" placeholder=" " required name="Emal" title="Ingrese su email">
                    <label for="">Email</label>
                </section>
                <section class="columna box-label">
                    <textarea name="" id="" cols="30" rows="10" placeholder=" " required name="Mensaje"  title="Escriba un mensaje"></textarea>
                    <label for="" id="label-area">Mensaje</label>
                </section>
                <section>
                    <button type="submit" title="Enviar formulario">Enviar</button>
                </section>
            </form>
        </section>
    </div>
    `
});
// PROYECTOS
Vue.component('proyecto-escolares',{
    template:
    `
    <div id="proyectos" class="fila">
        <section id="box-img">
            <img :src="img" alt="">
        </section>
        <section >
            <h3>Proyecto</h3>
            <p class="margen-proyectos">{{proyecto}}</p>
            <h3>Tipo</h3>
            <p class="margen-proyectos">{{tipo}}</p>
            <h3>Procedencia</h3>
            <p class="margen-proyectos">{{origen}}</p>
            <h3>Descripción</h3>
            <p class="margen-proyectos">{{descripcion}}</p>
            <h3>Tecnologías utilizadas</h3>
            <p>{{tecnologias}}</p>
        </section>
    </div>
    `,
    data() {
        return {
            proyecto: 'Escolares',
            tipo: 'Gestión',
            origen: 'Proyecto final 3er año',
            descripcion: 'Aplicacion web dedicada al servicio de transporte escolar, en ella se pueden registrar clientes, empleados, vehiculos y recorridos. Además permite llevar un control de ingresos y gastos.',
            tecnologias: 'HTML, CSS, Java Script, Python, Djando, PostgreSQL, Git',
            img: 'assets/img/transporte.jpeg',
            };
   },         
});
Vue.component('proyecto-tienda',{
    template:
    `
    <div id="proyectos" class="fila">
        <section id="box-img">
            <img :src="img" alt="">
        </section>
        <section >
            <h3>Proyecto</h3>
            <p class="margen-proyectos">{{proyecto}}</p>
            <h3>Tipo</h3>
            <p class="margen-proyectos">{{tipo}}</p>
            <h3>Procedencia</h3>
            <p class="margen-proyectos">{{origen}}</p>
            <h3>Descripción</h3>
            <p class="margen-proyectos">{{descripcion}}</p>
            <h3>Tecnologías utilizadas</h3>
            <p>{{tecnologias}}</p>
        </section>
    </div>
    `,
    data() {
        return {
            proyecto: 'Tienda Online',
            tipo: 'Tienda Virtual',
            origen:'Proyecto final 2do año',
            descripcion: 'Tienda virtual que permite la compra de productos en linea. Posee autenticacion, carrito de compra, buscador y navegacion por categorias y sub categorias.',
            tecnologias: 'HTML, CSS, Python, Djando, PostgreSQL',
            img: 'assets/img/tienda virtual.jpeg',
            };
   },         
});
Vue.component('proyecto-kiosco',{
    template:
    `
    <div id="proyectos" class="fila">
        <section id="box-img">
            <img :src="img" alt="">
        </section>
        <section >
            <h3>Proyecto</h3>
            <p class="margen-proyectos">{{proyecto}}</p>
            <h3>Tipo</h3>
            <p class="margen-proyectos">{{tipo}}</p>
            <h3>Procedencia</h3>
            <p class="margen-proyectos">{{origen}}</p>
            <h3>Descripción</h3>
            <p class="margen-proyectos">{{descripcion}}</p>
            <h3>Tecnologías utilizadas</h3>
            <p>{{tecnologias}}</p>
        </section>
    </div>
    `,
    data() {
        return {
            proyecto: 'ABM - Kiosco',
            tipo: 'Gestión',
            origen: 'Proyecto final 1er año',
            descripcion: 'Se pueden realizar altas, bajas y modificaciones de clientes, proveedores y productos. Además, posee un sistema de facturación e historial de ventas.',
            tecnologias: 'Python, MariaDB',
            img: 'assets/img/kiosco.jpeg',
            };
   },         
});
// GRAFICOS
Vue.component('basico',{
    template:
    `
    <li class="fila" title="Nivel Básico">
        <section class="bloque-a"></section>
        <section class="bloque-b"></section>
        <section class="bloque-b"></section>
    </li>
    `
});
Vue.component('intermedio',{
    template:
    `
    <li class="fila" title="Nivel Intermedio">
        <section class="bloque-a"></section>
        <section class="bloque-a"></section>
        <section class="bloque-b"></section>
    </li>
    `
});
Vue.component('avanzado',{
    template:
    `
    <li class="fila" title="Nivel Avanzado">
        <section class="bloque-a"></section>
        <section class="bloque-a"></section>
        <section class="bloque-a"></section>
    </li>
    `
});
// 
new Vue({el:'#header',})
new Vue({
    el: '#app',
    data: {
        selectedTab: 'Sobre mi',
        selectedTab2:'escolares',
    },
    computed: {
        selectedTabComponent() {
            return 'contenido-' + (this.selectedTab || '').toLowerCase().replace(' ', '-');
        },
        selectedTabComponent2() {
        return 'proyecto-' + (this.selectedTab2 || '').toLowerCase().replace(' ', '-');
        },
    },
    methods: {
        selectTab(tab) {
            this.selectedTab = tab;
        },
        selectTab2(tab) {
            this.selectedTab2 = tab;
        },
    },
});