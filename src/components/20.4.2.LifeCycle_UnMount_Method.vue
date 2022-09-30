<template>
    <h2 ref="user">Name: {{user}}</h2>
</template>

<script>
    export default {
        name: 'Name',
        props:{
            user: String,
        },
        beforeMount(){
            alert('Before Name component mounted.')
        },
        mounted(){
            alert('Name component mounted.')
        },
        beforeUnmount(){
            alert('Before Name component unmounted.')
            console.log('Before Name component unmounted.', this.refs['user'])
        },
        unmounted(){
            alert('Name component unmounted.')
            console.log('Name component unmounted.', this.refs['user'])
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

            - remove or hide component.
            - use this hook inside those components that will get remove or hide.
            - including these hooks (beforeUnMount,unmounted) inside those components that will get remove or hide, will enhance the performance of webapp.
            - remove all the dependencies of component in order to run application smoothly, decrease memory space, increase speed.
            
 -->