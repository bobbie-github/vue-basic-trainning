import {reactive, toRefs} from "vue";


const state = reactive({
    isAuthenticated: true,
    user:'user',
    token: 'hastoken'
});




export default {
    ...toRefs(state)
}