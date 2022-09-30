<template>
    <p>Name: {{name}}</p>
    <button @click="changeName">Change Name</button> <br><br>
    <button @click="counter -= 1">-</button> <span ref="count"> {{counter}} </span> <button @click="counter += 1">+</button>
</template>

<script>
    export default {
        name: 'Update Methods Hook',
        data(){
            console.warn("2. Script Loaded!")
            for(let i=0; i<1000000000; i++){
                let x= 0;
            }
            return{
                name: "Amir",
                counter: 0,
            }
        },
        methods: {
            changeName(){
                this.name = "Amir Shrestha"
            },
        },
        beforeCreate(){
            alert("1. Component template structure is getting ready!")
            this.name = "John"
        },
        created(){
            alert("3. Component logic is loaded!")
            this.name = "Harry"
        },
        beforeMount(){
            alert("Template is getting mounted/attached into the component")
            console.log("Template is getting mounted/attached into the component", this.$el)
        },
        mounted(){
            alert("Template is mounted/attached into the component")
            console.log("Template is mounted/attached into the component", this.$el)
        },
        beforeUpdate(){
            alert("Component Template is about to get updated.")
            console.log("Component Template is about to get updated.", this.counter)
            console.log("Component Template is about to get updated.", this.$refs['count'].textContent)
        },
        updated(){
            alert("Component Template is updated.")
            console.log("Component Template is updated.", this.counter)
            console.log("Component Template is updated.", this.$refs['count'].textContent)
        },
    }
</script>



<!-- 
    # Phases in LifeCycle of a single vue component:
        1. Create: structure
        2. Mount: data-property
        3. Update: update-data-property
        4. Unmount: hide

    - We implement these phases in a component with the help of vue_life_cycle_methods.
    - each phase/event have a two method before and after.
    
    # Vue Component Life Cycle Methods:
        - We implement these phases in a component with the help of vue_life_cycle_methods.
        
        - each phase/event have a two method before and after.

        3. Update: update-data-property
            - beforeUpdate
            - updated

        - beforeUpdate and updated method is called on the updation of UI not on the updation of property.
 -->
