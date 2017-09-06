
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
  }

]
