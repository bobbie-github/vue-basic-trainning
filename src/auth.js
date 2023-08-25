import {reactive, toRefs} from "vue";


const state = reactive({
    isAuthenticated: true,
    user:'admin',
    token: localStorage.getItem('token')
});




export default {
    ...toRefs(state)
}