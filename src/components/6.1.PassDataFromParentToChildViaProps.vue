<template>
    <div id="parent">
        <h1>I am Parent Component.</h1>
        <ChildComponent book="Jiban kada ki phool" :name="name" :age="age" :bio="{role,technology}" :fruits="fruits" :func1="greet" :func2_1="add" :func2="add(a,b)" :func3="()=>add(a,b)" :func4="()=>add(a,b)"/>
    </div>
</template>

<script>
    import ChildComponent from './6.2.ChildComponent.vue'
    export default {
        name: "PassDataViaProps",
        components:{
            ChildComponent,
        },
        data(){
            return{
                name:"Amir",
                role:"FullStack",
                technology: "JavaScript",
                age: 22,
                fruits: ['apple','orange','coconut']
            }
        },
        methods: {
            greet(){
                alert("Namaste!")
                console.log("Namaste!")
            },
            add(a,b){
                return a+b
            }
        }
    }
</script>

<style>
    #parent{
        border: 2px solid black;
        padding: 20px;
    }
</style>


<!-- C:\Users\DELL\Desktop\VueJs\2. Vue CLI Framework\Note\Props.txt -->