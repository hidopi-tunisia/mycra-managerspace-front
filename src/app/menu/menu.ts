import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'liste',
    title: 'Mes projets',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'file',
    url: 'projet'
  },
  /*{
    id: 'client',
    title: 'Mes clients',
    translate: 'MENU.SAMPLE',
    type: 'collapsible',
    icon: 'slack',
    children:[{
      id: 'liste',
      title: 'liste clients',
      translate: 'MENU.SAMPLE',
      type: 'item',
      icon: 'slack',
      url: '/clients/liste',
    },
    {
      id: 'add',
      title: 'ajouter client',
      translate: 'MENU.SAMPLE',
      type: 'item',
      icon: 'slack',
      url: '/clients/add',
    }]
  },*/
  {
    id: 'liste',
    title: 'Mes clients',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'slack',
    url: '/clients/liste'
  },
  
  {
    id: 'liste',
    title: 'Mes consultants',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'users',
    url: '/consultants/liste'
  },
  {
    id: 'add',
    title: 'Notifications',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'bell',
    url: 'notification/add'
  }
  ,
  {
    id: 'monprofil',
    title: 'Mon profil',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'user',
    url: 'monprofil'
  }
  ,
  {
    id: 'apropos',
    title: 'A propos',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'info',
    url: 'apropos'
  },
  {
    id: 'deconnexion',
    title: 'Déconnexion',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'log-out',
    url: 'deconnexion'
  }
    
    
    
]
