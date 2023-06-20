import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Tableau de bord',
    translate: '',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'liste',
    title: 'Mes projets',
    translate: '',
    type: 'item',
    icon: 'file',
    url: '/projets/liste'
  },

  {
    id: 'liste',
    title: 'Mes clients',
    translate: '',
    type: 'item',
    icon: 'slack',
    url: '/clients/liste'
  },
  
  
  {
    id: 'liste',
    title: 'Mes consultants',
    translate: '',
    type: 'item',
    icon: 'users',
    url: '/consultants/liste'
  },
  {
    id: 'notifier',
    title: 'Notifications',
    translate: '',
    type: 'item',
    icon: 'bell',
    url: 'notification/notifier'
  }
  ,
  {
    id: 'monprofil',
    title: 'Mon profil',
    translate: '',
    type: 'item',
    icon: 'user',
    url: 'monprofil'
  }
  ,
  {
    id: 'apropos',
    title: 'A propos',
    translate: '',
    type: 'item',
    icon: 'info',
    url: 'apropos'
  }
    
    
    
]
