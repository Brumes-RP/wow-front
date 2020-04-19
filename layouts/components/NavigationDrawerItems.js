export default {
  mainNavigation: [
    {
      icon: 'mdi-apps',
      title: 'Accueil',
      to: '/'
    }
    // {
    //   icon: 'mdi-book',
    //   title: 'Règles',
    //   to: '/rules'
    // }
  ],
  subNavigation: [
    // {
    //   icon: 'mdi-account',
    //   title: 'Profil',
    //   items: [
    //     { title: 'Compte', to: '/account' },
    //     { title: 'Personnages', to: '/character' }
    //   ]
    // },
    {
      icon: 'mdi-account-box-multiple',
      title: 'Personnages',
      to: '/characters'
    },
    {
      icon: 'mdi-book-multiple',
      title: 'Trames',
      to: '/wiki'
    }
    // {
    //   icon: 'mdi-timer-sand-full',
    //   title: 'Chronologie',
    //   to: '/timeline'
    // },
    // {
    //   icon: 'mdi-calendar',
    //   title: 'Evènements',
    //   to: '/calendar'
    // }
  ]
}
