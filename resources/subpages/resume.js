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
        description: 'Specialist who monitor the impact of polution on the environment, identifying environmental issues, and recommending solutions.'
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
      },
      {
        title: 'Electrical Engineer',
        start: '04/2018',
        end: '08/2018',
        company: 'Industrial automation (Automatizime industriale) Tirana AL',
        description: '•Work on the construction and testing of electrical / automation panels                •Design in the AutoCAD infrastructure of electrical / automation panels        •Maintenance of industrial printers (trained for printers VIDEOJET USA) '
      },
      {
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
    title: 'Licenses/Certificates',
    icon: 'mdi-medal',
    data: [
      {
        title: 'Additional qualifications in the Electrical Engineer License ',
        date: '26/11/2021',
        issuedBy: 'The Ministry of Infrastructure and Energy Tirana AL',
        description: '•Designing electrical cabinets of the distribution network, low-medium voltage lines.       •Electrical substation design, primary and secondary. High voltage lines. •Project of telephone networks, intercom, phone, internet, TV, access control, CCTV, alarm systems, fire detection systems, for civil and industrial facilities .'
      },
      {
        title: 'House Warming 2020',
        date: '04/09/2020',
        issuedBy: 'Center for Energy, Water and Environmental Technology of the Artisan Chamber, Hamburg GE ',
        description: 'Energy advice in medium-sized companies , residential and non residential buildings . '
      },
      {
        title: 'Licensed Electrical Engineer ',
        date: '04/09/2019',
        issuedBy: 'The Ministry of Infrastructure and Energy Tirana AL',
        description: 'Design of electrical network lines for civil and industrial facilities.'
      },
      {
        title: 'GOETHE-ZERTIFIKAT A1 START DEUTSCH 1 ',
        date: '17/12/2018',
        issuedBy: 'GOETHE INSTITUT, Tirana AL',
        description: ''
      },
      {
        title: 'Proof of performance TOEFL ITP TEST ',
        date: '01/10/2016',
        issuedBy: 'Polytechnic University of Tirana, Tirana AL',
        description: ''
      },
      {
        title: 'Certificate in installation and repair of solar module',
        date: '05/2015 - 07/2015',
        issuedBy: 'Regional Directorate for Public Vocational Training Nr. 4, Tirana AL',
        description: ''
      },
    ]
  
  },
  skills: [
    {
      title: 'Driving',
      barType: 'line',
      icon: 'mdi-car',
      items: [
        {
          title: 'Driving license B category',
          level: 100
        },
        
      ]
    },
    {
      title: 'Computer skills',
      barType: 'line',
      icon: 'mdi-desktop-classic',
      items: [
        {
          title: 'AutoCad 2D Design',
          level: 77
        },
        {
          title: 'DiaLux',
          level: 74
        },
        {
          title: 'Microsoft Office',
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
          level: 75
        },
        {
          title: 'German',
          level: 25
        
        },
      ]
    },
    {
      title: 'Knowledge',
      barType: 'dots',
      icon: 'mdi-book-open-page-variant',
      items: [
        
        {
          title: 'Taking pictures',
          level: 65
        },
        {
          title: 'Knowing where to look for solutions when a problem arises.',
          level: 95
        },
      ]
    }
  ],
};
