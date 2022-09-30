<template>
    <h1>I am Parent Component.</h1>
    <ChildComponent/>
</template>

<script>
    import ChildComponent from './5.2.ChildComponent.vue'
    export default {
        name: "ParentComponent",
        components:{
            ChildComponent,
        }
    }
</script>