<template>
    <h2>Title: {{post.title}}</h2>
    <h3>Location: {{post.location}}</h3>
    <p>Description: {{post.description}}</p>
    <button @click="greet">Click</button>
    <hr>
</template>

<script>
    export default {
        name: "Post4",
        props: {
            post: Object,
        },
        methods: {
            greet(){
                alert("Good morning!")
            }
        }

    }
</script>



<!-- here function gets define for each_post/ each_iteration -->
<!-- solution: define function in parent component one time and then just pass it to children component on each iteration i.e: 7.5.ReuseComponent.vue-->

