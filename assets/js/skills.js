const SkillsComponent = {
    template: `
    <h3>Skills</h3>
    <div class="skill-container">
        <div class="skill" v-for="skill in skills" :key="skill.nombre">
            <div class="circle" :style="{ '--level': skill.lvl + '%', '--progress-color': skill.color }">
                <div class="circle-image-box">
                    <img :src="'assets/svg/' + skill.nombre.toLowerCase().replace('#', 'sharp') + '.svg'" alt="Icono-' + skill.nombre" class="circle-image" />
                </div>
            </div>
            <div class="skill-name">{{ skill.nombre }}</div>
        </div>
    </div>
    `,
    data() {
        return {
            skills: [
                {nombre: "HTML", lvl: 75, color: "#E34F26"},
                {nombre: "CSS", lvl: 75, color: "#1572B6"},    
                {nombre: "Bootstrap", lvl: 25, color: "#6610F2"},
                {nombre: "Js", lvl: 25, color: "#F7DF1E"},
                {nombre: "Vue.js", lvl: 50, color: "#4FC08D"},
                {nombre: "Figma", lvl: 25, color: "#FF3737"},
                {nombre: "Python", lvl: 75, color: "#346E9E"},
                {nombre: "Django", lvl: 75, color: "#155F43"},
                {nombre: "PostgreSQL", lvl: 50, color: "#336791"},
                {nombre: "MariaDB", lvl: 50, color: "#003545"},
                {nombre: "MySQL", lvl: 50, color: "#038489"},
                {nombre: "GitHub", lvl: 50, color: "#24292F"},
                {nombre: "Git", lvl: 50, color: "#F05032"},
                {nombre: "Unity", lvl: 50, color: "#000000"},
                {nombre: "C#", lvl: 25, color: "#A179DC"},
                {nombre: "MsProject", lvl: 50, color: "#21A366"},
                {nombre: "Inglés", lvl: 25, color: "#FF4D00"},
            ]
        }
    },
};