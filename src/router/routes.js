import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import NotesPage from "../pages/NotesPage.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
        name: "home"
    },

    {
        path: "/notes",
        component: NotesPage,
        name: 'notes',
        meta: {
            auth: true
        }
    },
    {
        path: "/register",
        component: RegisterPage,
        name: 'register',
    },
    {
        path: "/login",
        component: LoginPage,
        name: 'login'
    },
    {
        path: "/notes",
        component: NotesPage,
        name: 'notes'
    }
]


export default routes;