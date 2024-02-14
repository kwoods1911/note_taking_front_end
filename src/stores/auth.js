import { defineStore } from "pinia";
import {computed, ref } from "vue";
import {csrfCookie,login,register,logout,getUser} from "../http/auth-api";

export const useAuthStore = defineStore("authStore", () => {
    const user = ref(null)

    const errors = ref({})

    const isLoggedIn = computed(() => !!user.value)

    const fetchUser = async () => {
        try{
            const { data } = await getUser()
            user.value = data
        } catch(error){
            user.value = null
        }
    }

    const handleLogin = async (credentials) => {
        await csrfCookie()

        try {
            await login(credentials);
            await fetchUser()
            errors.value = {}
        } catch (error) {
            
            if(error.response && error.response.status === 422){
                errors.value = error.response.data.errors
                console.log(error)
            }
        }
    }

    return {
        user,
        errors,
        handleLogin,
        isLoggedIn
    }
})
