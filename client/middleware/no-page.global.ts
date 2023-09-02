export default defineNuxtRouteMiddleware((to, from) => {
    if(to.matched[0] === undefined){
        return navigateTo('/')
    }
})