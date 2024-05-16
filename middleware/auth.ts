export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()
    if (user.value){
        return;
    }
    else {
        return navigateTo(`/login?redirectTo=${to.path}`)
    }
})
