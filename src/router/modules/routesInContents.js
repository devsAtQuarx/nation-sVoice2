const content_home = resolve => {
  require.ensure(['@/components/app-main/app-contents-components/content-home'],()=>{
      resolve(require('@/components/app-main/app-contents-components/content-home'))
  })
}


export default [

  {path:'', component:content_home},

]
