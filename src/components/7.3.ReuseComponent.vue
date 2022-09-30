<template>
    <h2>Title: {{post.title}}</h2>
    <h3>Location: {{post.location}}</h3>
    <p>Description: {{post.description}}</p>
    <hr>
</template>

<script>
    export default {
        name: "Post3",
        props: {
            post: Object,
        }

    }
</script>