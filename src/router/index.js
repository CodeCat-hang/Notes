import Vue from 'vue'
import VueRouter from 'vue-router'
import ListNote from '../views/ListNote.vue'
import CreateNote from '../views/CreateNote.vue'
import EditNote from '../views/EditNote.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/notes/index'
    },
    {
        path: '/notes/index',
        name: 'list-note',
        component: ListNote
    },
    {
        path: '/notes/create',
        name: 'create-note',
        component: CreateNote
    },
    {
        path: '/notes/:id/edit',
        name: 'eait-note',
        component: EditNote
    }
]
const router = new VueRouter({
    routes
})

export default router