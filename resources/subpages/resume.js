export default {
  name: 'resume', // do not change
  pageTitle: 'Resume',
  icon: 'mdi-card-account-details',

  experience: {
    title: 'Work experience and internships',
    icon: 'mdi-tie',
    data: [
      {
        title: 'Specialist in the field of environmental pollution control',
        start: '06/2021',
        end: 'present',
        company: 'Consumer Protection Agency Municipality of Tirana AL',
        description: 'Experts who monitor the impact of a population on the environment, identifying environmental issues, and recommending solutions.'
      },
      {
        title: 'Electrical Engineer',
        start: '08/2019',
        end: 'present',
        company: 'Part time Freelance Tirana AL ',
        description: 'Design in AutoCad electrical infrastructure for civil and industrial buildings and Implementation of the designed plan. '
      },
      {
        title: 'Management Team Leader',
        start: '11/2014',
        end: '06/2021',
        company: 'GENA Family Business Ballsh AL',
        description: 'Leadership of a staff of nine to twelve people        • Create a work plan and delegate work to the team members          • Assess progress and adjust the plan accordingly'
      },{
        title: 'Electrical Engineer',
        start: '04/2018',
        end: '08/2018',
        company: 'Industrial automation (Automatizime industriale) Tirana AL',
        description: '•Work on the construction and testing of electrical / automation panels                •Design in the AutoCAD infrastructure of electrical / automation panels        •Maintenance of industrial printers (trained for printers VIDEOJET USA) '
      },{
        title: 'Inspection Specialist',
        start: '05/2017',
        end: '07/2017',
        company: 'National Water and Sewerage Agency',
        description: 'Inspection and assessment of the investment needs atthe regional director of the Albanian water supply. '
      },
    ]
  },
  education: {
    title: 'Educational Path',
    icon: 'mdi-school',
    data: [
      {
        major: 'Energy Audit in Buildings',
        start: '10/2021',
        end: '04/2022',
        institute: 'Polytechnic University of Tirana, Tirana AL ',
        description: 'Postgraduate course'
      },{
        major: 'Masters Degree in ElectroPower',
        start: '07/2014',
        end: '10/2016',
        institute: 'Polytechnic University of Tirana, Tirana AL ',
        description: 'Master thesis: Efficiency of the turbine generator set in the Bishnica hydropower plant'
      },{
        major: 'Bachelor in Electrical Engineering',
        start: '08/2010',
        end: '03/2014',
        institute: 'Polytechnic University of Tirana, Tirana AL ',
        description: 'Bachelor Degree Specializing in Electropower'
      },
    ]
  },
  certificatesAndAwards: {
    title: 'Certificates/Awards',
    icon: 'mdi-medal',
    data: [
      {
        title: 'Key of LA',
        date: '14/07/2020',
        issuedBy: 'Los Angeles Major',
        description: 'I was honered to be given the key to the city by the Los Angeles Major. #goals'
      },
      {
        title: 'Best Costume',
        date: '19/12/2019',
        issuedBy: 'Marvel Comics',
        description: 'Got the award for the best costume ever made on Marvel Comics, gotta love it.'
      },
    ]
  },
  academic: {
    title: 'Academic',
    icon: 'mdi-library-shelves',
    data: [
      {
        title: 'Research paper on criminals.',
        date: '10/07/2019',
        issuedBy: 'MIT',
        description: 'Published a research paper at MIT about criminal behaviours and predictions.'
      },
    ]
  },
  skills: [
    {
      title: 'Swinging',
      barType: 'line',
      icon: 'mdi-web',
      items: [
        {
          title: 'Horizontally',
          level: 80
        },
        {
          title: 'Vertically',
          level: 90
        },
      ]
    },
    {
      title: 'Design',
      barType: 'line',
      icon: 'mdi-brush-variant',
      items: [
        {
          title: 'Web Design',
          level: 85
        },
        {
          title: 'Photoshop',
          level: 90
        },
        {
          title: 'After Effects',
          level: 80
        },
      ]
    },
    {
      title: 'Languages',
      barType: 'dots',
      icon: 'mdi-earth',
      items: [
        {
          title: 'Albanian',
          level: 100
        },
        {
          title: 'English',
          level: 94
        },
      ]
    },
    {
      title: 'Knowledge',
      barType: 'dots',
      icon: 'mdi-book-open-page-variant',
      items: [
        {
          title: 'Web shoot',
          level: 94
        },
        {
          title: 'Taking pictures',
          level: 91
        },
      ]
    }
  ],
};
