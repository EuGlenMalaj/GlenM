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
        company: 'Consumer Protection Agency Municipality of Tirana (Albania)',
        description: 'Swinging from building to building, fighting bad guys and making a difference in the world.'
      },
      {
        title: 'Electrical Engineer',
        start: '08/2019',
        end: 'present',
        company: 'Part time Freelance',
        description: 'Design in AutoCad electrical infrastructure for civil and industrial buildings and Implementation of the designed plan. '
      },
    ]
  },
  education: {
    title: 'Education',
    icon: 'mdi-school',
    data: [
      {
        major: 'Journalism',
        start: '09/2014',
        end: '07/2018',
        institute: 'High School',
        description: 'Hanging out with Ned and MJ, throwing house parties, city parties and all kind of parties.'
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
