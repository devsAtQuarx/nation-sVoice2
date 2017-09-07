
const app_home = resolve => {
  require.ensure(['@/components/app-main/app-home'],()=>{
      resolve(require('@/components/app-main/app-home'))
  })
}

const app_login = resolve => {
  require.ensure(['@/components/app-main/app-login'],()=>{
      resolve(require('@/components/app-main/app-login'))
  })
}

const app_profile = resolve => {
  require.ensure(['@/components/app-main/app-profile'],()=>{
      resolve(require('@/components/app-main/app-profile'))
  })
}

const app_comments = resolve => {
  require.ensure(['@/components/app-main/app-comments'],()=>{
    resolve(require('@/components/app-main/app-comments'))
  })
}

const app_specNews = resolve => {
  require.ensure(['@/components/app-main/app-specNews'],()=>{
    resolve(require('@/components/app-main/app-specNews'))
  })
}

export default [

  {
    path:'/',
    component:app_home
  },
  {
    path: '/app-login',
    component: app_login
  },
  {
    path: '/app-profile',
    component: app_profile
  },
  {
    path: '/app-comments',
    component: app_comments
  },
  {
    path: '/app-specNews/:id',
    component: app_specNews
  }

]
