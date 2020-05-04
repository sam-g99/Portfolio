export const state = () => ({
  projects: [
    {
      title: 'WebRTC Demo (Screen Sharing)',
      description:
        'A demo of what you can do with WebRTC. Screen sharing, chat, image sharing',
      img: 'webrtc',
      inProgress: true,
      tech: ['HTML', 'SCSS', 'JavaScript', 'Vue', 'WebRTC/PeerJS'],
      content: {
        disclaimer: `This was an excellent learning experience,
         due to the complexity of the application and how many components needed to come together.
         If you have any questions about anything in particular about this application
         I would gladly go more in depth, for now I'll just explain some of
        he basic things I learned. (Also please note still under development)`,
        learned: [
          'Using the Peer JS WebRTC wrapper',
          'Creating a peer2peer mesh network',
          'Using vue-persist to save certain vuex states to local storage',
          'Connecting to the tenor Gif API',
          'Image compression',
          'A lot of complex state management and making sure components are able to share relevant information',
          'Creating a custom range slider',
        ],
      },
      video: 'https://www.youtube-nocookie.com/embed/zvBoi1XmVuo?rel=0',
      link: {
        live: 'https://webrtcdemo.netlify.com/',
        github: 'https://github.com/sam-g99/webrtc-mesh-network',
      },
    },
    {
      title: 'Template Site',
      description:
        'A site created based off a free PSD design. Utilized a build tool and SCSS.',
      img: 'template',
      tech: ['HTML', 'CSS', 'JavaScript', 'Gulp'],
      content: {
        learned: [
          'The role build tools such as Gulp.js play in modern web development, to optimize a site for production.',
          "Sass and it's new syntax SCSS, utilized mixins, variables and nesting",
          'How to develop a site from a design in PSD',
          'New ways to structure and modularize a codebase to make it easier to modify for the future',
        ],
      },
      link: {
        live: 'https://upbeat-shockley-d4c443.netlify.com/',
        github: 'https://github.com/sam-g99/Tajam-Template-Site-PSD',
      },
    },
    {
      title: 'Landing Page',
      description: 'Landing page for a local personal training business ',
      img: 'training',
      tech: ['HTML', 'SCSS', 'JavaScript', 'Nuxt'],
      content: {
        learned: [
          'Mobile first approach',
          'How to utilize static site generators to build optimized, fast and SEO sites',
          'Using design tools such as Figma to plan out designs to show to clients',
          'Setting up domain email via zoho',
          'Deploying sites via netlify, as well as adding a custom domain',
        ],
      },
      link: {
        live: 'https://ivelspersonaltraining.com/',
      },
    },
    {
      title: 'Movies',
      description:
        'A movie data Single Page Application, connected to the Movie API',
      img: 'movie',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      content: {
        learned: ["Connecting to RESTful API's", 'Fetch API', 'Promises'],
      },
      link: {
        live: 'https://elegant-hoover-031eef.netlify.com/',
        github: 'https://github.com/sam-g99/Movie-API',
      },
    },
    {
      title: 'Time Zones Made Simple ',
      description: 'Create links which show an event in your timezone.',
      img: 'timezone',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Moment JS'],
      content: {
        learned: [
          'React',
          'React Routing',
          'NPM',
          'Utilizing libraries such as Moment.js',
        ],
      },
      link: {
        live: 'https://priceless-goldberg-a9cfed.netlify.com/',
        github: 'https://github.com/sam-g99/Time-Zones-Made-Simple',
      },
    },
  ],
});
