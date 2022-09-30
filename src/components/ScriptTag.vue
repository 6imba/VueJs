<template>
    <h1>I am Parent Component.</h1>
    <p>Name: {{user}}</p>
</template>

<script>
    // import ChildComponent from './6.2.ChildComponent.vue'
    export default {
        name: "ScriptTag",
        components:{
            // ChildComponent,
        },
        data(){
            return{
                user:"Amir",
                role:"FullStack",
                technology: "JavaScript"
            }
        },
        created(){
            console.log("Hi console.")
            console.log(this.user)
            console.log(typeof(this.user,this.role,this.technology))
            console.log(typeof('a','b','c')) 
            console.log(typeof(('a','b','c'))) 
        },
    }
</script>

