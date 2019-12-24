import DrunkardInput from "./input.vue"

let input = {}
input.install = (Vue, options)=>{
    Vue.component(DrunkardInput.name, DrunkardInput)
}

export default input