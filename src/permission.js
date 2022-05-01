import router from './router'

router.beforeEach((to, from, next) => {
  console.log(to, 'ssssssss')
  document.title = to.meta.title
  next()
})
