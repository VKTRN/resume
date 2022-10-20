const about = {
  title:"Über", 
  text: 'Ich bin ein Software Engineer aus Hannover. Ich arbeite im Bereich der Fullstack Webentwicklung mit Fokus auf Frontend.\
         Sauberen und wiederverwendbaren Code zu schreiben liegt mir am Herzen. '
}

const date = 'Seit September 2021'

const contact = 'Kontakt'

const experience = 'Erfahrung'

const project1 = {
  title: 'Vereinheitlichung mehrerer Login-Syteme für Volkswagen',
  description: [
    'Umsetzung eines Einheitlichen Designs für mehrere Logins mittels Sass',
    'Schreiben von End-to-End Tests mittels Cypress',
    'Automatisierung der Tests durch Integration in die ci/cd-Pipeline in bamboo (Atlassian).',
  ],
  tech: [' Javascript',' HTML',' 11ty',' Sass',' Cypress.io',' Docker']
}

const project2 = {
  title: 'Entwickung eines Domument Management Systems',
  description: [
    'Entwicklung einer Internen Plattform zur Verwaltung von Dokumenten',
    'Umsetzung des Frontends mittels React und Electron',
    'Entwicklung eines Backends zur Speicherung der Daten und Bereitstellung der Schnittstellen mittels Node.JS, Express und MongoDB'
  ],
  tech: [' React.js',' Electron.js',' draft.js',' Typescript',' Sass',' MongoDB',' Express']

}

const project3 = {
  title: 'Content-Management für CARIAD',
  description: [
    'Erstellen und Bearbeiten von Seiten, Texten, Stilen, Übersetzungen.',
    'Korrektur von Darstellungsproblemen unter Einsatz von HTML und CSS.'
  ],
  tech:[' HTML',' CSS']
}

const projects = [project1, project2, project3]

const skills = 'Fähigkeiten'

const education = {
  title:'Ausbildung',
  description: [
    {
      title: 'M.Sc. Computational Methods in Engineering',
      institute: 'Leibniz Universität Hannover',
      date: '2021'
    },
    {
      title: 'B.Sc. Maschinenbau',
      institute: 'TU Braunschweig',
      date: '2017'
    }]
}

export const text = {about, date, contact,  experience, projects,  skills, education}