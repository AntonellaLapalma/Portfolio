const { createApp } = Vue;
createApp({
    components: {
        'skills': SkillsComponent,
        'education-courses': EducationComponent,
        'projects': ProjectsComponent,
    }
}).mount('#app');