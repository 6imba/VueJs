<template>
    ComponentLifeCycle
</template>

<script>
    export default {
        name: 'ComponentLifeCycle',
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
    
    # Vue Component Life Cycle Methods: acts on UI.
        - We implement these phases in a component with the help of vue_life_cycle_methods.
        
        - each phase/event have a two method before and after.
        1. Create: structure
            - beforeCreated
            - Created
        2. Mount: data-property
        3. Update: update-data-property
        4. Unmount: hide
        
 -->
