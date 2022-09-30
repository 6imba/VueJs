<template>
    ComponentLifeCycle {{name}}
    <p>{{name}}</p>
</template>

<script>
    export default {
        name: 'Mount Methods Hook',
        data(){
            console.warn("2. Script Loaded!")
            for(let i=0; i<1000000000; i++){
                let x= 0;
            }
            return{
                name: "Amir",
            }
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

        2. Mount: data-property
            - beforeMount
            - Mounted
            
            - we cannot access html element with ref attribute inside beforeMount.
 -->
