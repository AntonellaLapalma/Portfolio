const ProjectsComponent = {
    template: `
    <h3>Proyectos</h3> 
    <div>
        <div class="box-project" v-for="project in projects">
            <img :src="project[0].img" class="img-project" alt="logo-proyecto"/>
            <article v-for="p in project">
                <h4><a href="">{{ p.nombre }}<img class="link" src="assets/svg/link.svg" alt="icono-link" width="10" height="15"></a></h4>
                <h5>{{ p.procedencia }}</h5>
                <p class="descripcion">{{ p.descripcion }}</p>
                <p class="subtitulo">Tecnologías utilizadas:</p>
                <ul>
                    <li v-for="t in p.tecnologias">
                        <img :src="'assets/svg/' + t.toLowerCase().replace('#', 'sharp') + '.svg'" alt="Icono"/>
                    </li>
                </ul>
            </article>
        </div>
    </div>
    `,
    data() {
        return {
            projects: {
                Escolares: [
                    {
                        img:"assets/svg/EscolaresDB.svg",
                        nombre: "Escolares DB",
                        procedencia:"Proyecto final de 3er año", 
                        descripcion:"Aplicacion web dedicada al servicio de transporte escolar, para gestionar clientes, empleados, vehiculos y recorridos. Además permite llevar un control de ingresos y gastos.",
                        tecnologias:[
                            "HTML",
                            "CSS",
                            "Vue.js",
                            "Python",
                            "Django",
                            "PostgreSQL",
                            "Git",
                        ],
                    },
                ],
                TiendaOnline: [
                    {
                        img:"assets/svg/tiendaOnline.svg",
                        nombre: "Tienda Online", 
                        tipo: "Tienda virtual", 
                        procedencia:"Proyecto final 2do año", 
                        descripcion:"Tienda virtual que permite la compra de productos en linea. Posee autenticacion, carrito de compra, buscador y navegacion por categorias y sub categorias.",
                        tecnologias:[
                            "HTML",
                            "CSS",
                            "Python",
                            "Django",
                            "PostgreSQL"
                        ]
                    },
                ],
                Kiosco: [
                    {
                        img:"assets/svg/abmKiosco.svg",
                        nombre: "ABM - Kiosco", 
                        tipo: "Gestión", 
                        procedencia:"Proyecto final 1er año", 
                        descripcion:"Se pueden realizar altas, bajas y modificaciones de clientes, proveedores y productos. También, posee un sistema de facturación e historial de ventas.",
                        tecnologias:[
                            "Python",
                            "MariaDB",
                        ]
                    },
                ],
            },
        }
    },
};