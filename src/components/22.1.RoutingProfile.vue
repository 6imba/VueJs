<template>
    {{user}} Profile Page
</template>

<script>
    import {useRoute} from 'vue-router'
    export default {
        name: 'Profile',
        data(){
            return{
                user:''
            }
        },
        mounted(){
            const route = useRoute();
            console.log('Route params: ', route.params.name)
            this.user = route.params.name
        }
    }
</script>
