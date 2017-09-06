import children from './routesInContents'


const app_contents = resolve => {
  require.ensure(['@/components/app-main/app-contents'],()=>{
      resolve(require('@/components/app-main/app-contents'))
  })
}

const app_profile = resolve => {
  require.ensure(['@/components/app-main/app-profile'],()=>{
      resolve(require('@/components/app-main/app-profile'))
  })
}
const app_login = resolve => {
  require.ensure(['@/components/app-main/app-login'],()=>{
      resolve(require('@/components/app-main/app-login'))
  })
}





export default [
  {
    path: '/',
    component: app_contents,
    children
  },
  {
    path: '/app-profile',
    component: app_profile
  },
  {
    path: '/app-login',
    component: app_login
  }

]
