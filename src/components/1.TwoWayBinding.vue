<template>
    Attribute Binding: <input type="text" v-bind:value="description"> <br>
    Two way model binding: <input type="text" v-model="description"> <br>
    State:{{description}} <br>
    <hr>
    <hr>
</template>

<script>
export default {
    name: "Home",
    data(){
        return{
            description: "Its CPU.",
        }
    }
}
</script>