<template>
    <h2>Title: {{title}}</h2>
    <h3>Location: {{location}}</h3>
    <p>Description: {{description}}</p>
    <hr>
</template>

<script>
    export default {
        name: "Post",
        props: {
            title: String,
            location: String,
            description: String,
        }

    }
</script>