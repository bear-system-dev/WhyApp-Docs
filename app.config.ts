// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'WhyApp',
    description: 'WhyApp é um aplicativo de bate-papo projetado para facilitar a comunicação entre os usuários.',
    image: 'favicon.png',
    socials: {
      github: 'https://github.com/bear-system-dev/WhyApp-Docs',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'WhyApp-Docs',
      owner: 'Bear System',
      edit: false
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    } 
  }
})
