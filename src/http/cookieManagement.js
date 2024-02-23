import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();


export const removeCookies = () => {
   
    console.log(cookies.get("XSRF-TOKEN"))
}

