import children from './routesInContents'


const app_contents = resolve => {
  require.ensure(['@/components/app-main/app-contents'],()=>{
      resolve(require('@/components/app-main/app-contents'))
  })
}

const app_drawer = resolve => {
  require.ensure(['@/components/app-main/app-drawer'],()=>{
      resolve(require('@/components/app-main/app-drawer'))
  })
}





export default [
  {
    path: '/',
    component: app_contents,
    children
  },
  {
    path: '/app-drawer',
    component: app_drawer
  }

]
