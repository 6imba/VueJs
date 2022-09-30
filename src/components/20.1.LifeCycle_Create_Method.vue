<template>
    ComponentLifeCycle {{name}}
</template>

<script>
    export default {
        name: 'ComponentLifeCycle',
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
            alert("3. Component structure is created!")
            this.name = "Harry"
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
        1. Create: structure
            - beforeCreated
            - Created
            - The difference between is the beforeCreated hook is before an instance has been fully initialized whereas the created hook is after an instance is created.

        2. Mount: data-property
        3. Update: update-data-property
        4. Unmount: hide

    # There are 13 of Vue’s lifecycle hooks according to the latest Official Vue documentation.
        beforeCreate and created
        beforeMount and mounted
        beforeUpdate and updated
        beforeUnmount and unmounted
 -->
