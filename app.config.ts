// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'WhyApp',
    description: 'WhyApp é um aplicativo de bate-papo projetado para facilitar a comunicação entre os usuários.',
    image: '/img/favicon.png',
    socials: {
      github: 'https://github.com/bear-system-dev/WhyApp-Docs',
    },
    aside: {
      collapsed: false,
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      fluid: true
    },
    footer: {
      credits: {
        text: 'Criado por @bear-system-dev',
        icon: 'mdi:copyright',
        href: 'https://github.com/bear-system-dev'
      },
      fluid: true,
    }
  }
})
