const about = {
  title:"About", 
  text: 'I am a software engineer based in Hannover, Germany. I specialize in fullstack web development with a focus on frontend development. I like to write clean, readable, reusable code and deliver a smooth and intuitive user experience.'
}

const date = 'Since September 2021'

const contact = 'Contact'

const experience = 'Experience'

const project1 = {
  title: 'Design unification of multiple user authentication systems for Volkswagen',
  description: [
    'Implemented the unified design for multiple user authentication pages.',
    'Wrote End to End tests for the authentication pages.',
    'Integrated the test-automation into the ci/cd pipeline in bamboo (Atlassian).',
  ],
  tech: [' Javascript',' HTML',' 11ty',' Sass',' Cypress.io',' Docker']
}

const project2 = {
  title: 'Development of a document management system',
  description: [
    'Developing the frontend for creating, editing and managing company specific documents.',
    'Developing a backend for storing and accessing the documents.',
  ],
  tech: [' React.js',' Electron.js',' draft.js',' Typescript',' Sass',' MongoDB',' Express']
}

const project3 = {
  title: 'Support of a content management system for CARIAD',
  description: [
    'Created and edited web-pages in the CARIAD Intranet.',
    'Fixed issues with the display of the content using HTML and CSS'
  ],
  tech:[' HTML',' CSS']
}

const projects = [project1, project2, project3]

const skills = 'Skills'

const education = {
  title:'Education',
  description: [
    {
      title: 'M.Sc. Computational Methods in Engineering',
      institute: 'Leibniz Universität Hannover',
      date: '2021'
    },
    {
      title: 'B.Sc. Mechanical Engineering',
      institute: 'TU Braunschweig',
      date: '2017'
    }]
}

export const text = {about, date, contact,  experience, projects,  skills, education}






