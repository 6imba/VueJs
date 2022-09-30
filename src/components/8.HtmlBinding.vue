<template>
    {{text}} <br>
    {{tag1}} <br>
    <div v-html="tag1"></div>
    <div v-html="tag2"></div>
    <div v-html="tag3"></div>
</template>

<script>
    export default {
        name: "HtmlBinding",
        data(){
            return{
                text: "I am Amir.",
                tag1: "<h1>Dynamic h1 tag.</h1>",
                tag2: "<h1>Dynamic tag 2.</h1>",
                tag3: "<h1>Dynamic tag 3.</h1>",
            }
        }
    }
</script>