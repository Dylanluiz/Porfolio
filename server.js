import { createServer, Model } from "miragejs";

    createServer({
       models: {
        projects: Model
       },

       seeds(server) {
        server.create('project', {
            id: 1,
            name: "Quizzical",
            link: ["../images/Q.png", '../images/Quiz-vid.gif', '../images/Quiz-home-page.PNG', '../images/quiz-question-page.PNG'],
            desc: "A quiz game-based app where the user can select the category that they wish to be quizzed on. Then, the user is prompted with different questions given by a third-party API. The user earns XP by answering questions correctly. The level system scales with the player's level.",
            technologies: ['React.js', 'JavaScript', 'CSS', 'APIs'],
            site: "https://frolicking-brigadeiros-80c272.netlify.app/",
            git: 'https://github.com/Dylanluiz/Guessing-game'})
        server.create('project', {
            id: 2,
            name: "Kanban",
            link: ["../images/Kanban.png","../images/kanban-img-1.png", '../images/Kanban-vid.gif', '../images/kanban-img-2.png', '../images/kanban-img-3.png', '../images/kanban-img-4.png'],
            desc: "Kanban is an organizational app, designed with the user in mind. The app is customizable, enabling users to create, edit, and alter the status of tasks. The user is able to create boards, each with their own repository of tasks and associated subtasks",
            technologies: ['React.js', 'JavaScript', 'CSS', 'APIs', 'react-spring'],
            site: "https://amazing-moonbeam-c1d97a.netlify.app/",
            git: 'https://github.com/Dylanluiz/kanban-board'
        })
        server.create('project', {
            id: 3,
            name: "Audiophile",
            link: ["../images/Audio.png"],
            desc: "Kanban is an organizational app, designed with the user in mind. The app is customizable, enabling users to create, edit, and alter the status of tasks. The user is able to create boards, each with their own repository of tasks and associated subtasks",
            technologies: ['React.js', 'JavaScript', 'CSS', 'APIs', 'react-spring', 'firebase'],
            site: "https://extraordinary-bunny-d8f9da.netlify.app/",
            git: 'https://github.com/Dylanluiz/Audiophile'
        })
       },

       routes() {
        this.namespace = 'api'

        this.get('/projects', (schema, request) => {
            return schema.projects.all()
        })

        this.get('/projects/:id', (schema, request) => {
            const id = request.params.id
            return schema.projects.find(id)
        })

        this.passthrough('https://api.emailjs.com/api/v1.0/email/send-form')
        
        this.logging = false
       }

      

    })

