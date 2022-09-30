<template>
    <h2>Title: {{post.title}}</h2>
    <h3>Location: {{post.location}}</h3>
    <p>Description: {{post.description}}</p>
    <!-- <button @click="greet">Click</button> -->
    <!-- <button @click="about()">Click</button> -->
    <button @click="about(post.title)">Click</button>
    <hr>
</template>

<script>
    export default {
        name: "Post4",
        props: {
            post: Object,
            // greet: Function,
            about: Function,
        },
    }
</script>



<!-- here function gets define for each_post/ each_iteration -->