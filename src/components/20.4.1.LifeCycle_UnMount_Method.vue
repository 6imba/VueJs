<template>
    <Name  v-if="showName" :user="user" :showName="showName"/>
    <button @click="showName = !showName">{{showName? 'Hide name' : 'Show name'}}</button>
</template>

<script>
    import Name from './20.4.2.LifeCycle_UnMount_Method.vue'
    export default {
        name: 'UnMount Methods Hook',
        data(){
            console.warn("2. Script Loaded!")
            for(let i=0; i<1000000000; i++){
                let x= 0;
            }
            return{
                user: "Amir",
                showName: false,
            }
        },
        components: {
            Name,
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
        },
        updated(){
            alert("Component Template is updated.")
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

        4. Unmount: hide
            - beforeUnMount
            - unmounted

 -->
