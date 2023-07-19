import { createServer, Model } from "miragejs";

    createServer({
       models: {
        projects: Model
       },

       seeds(server) {
        server.create('project', {
            id: 1,
            name: "Quizzical",
            link: ["../images/Q.png", '../images/Quiz-vid.gif', '../images/Quiz-home-page.PNG'],
            desc: "A quiz game based app where the user can select the category that they wish to be quized, then the user is propted with diffrent questions given by a third party API, the user earns xp by answering questions correctly. The level system scales with the players level",
            technologies: ['React.js', 'JavaScript', 'CSS', 'APIs'],
            site: "https://frolicking-brigadeiros-80c272.netlify.app/",
            git: 'https://github.com/Dylanluiz/Guessing-game'})
        server.create('project', {
            id: 2,
            name: "Quizzical",
            link: ["../images/Q.png"],
            desc: "A quiz game based app where the user can select the category that they wish to be quized, then the user is propted with diffrent questions given by a third party API, the user earns xp by answering questions correctly. The level system scales with the players level",
            technologies: ['React.js', 'JavaScript', 'CSS', 'APIs'],
            site: "https://frolicking-brigadeiros-80c272.netlify.app/",
            git: 'https://github.com/Dylanluiz/Guessing-game'
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

