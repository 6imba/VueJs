<template>
    <h2>Vue Ref to access DOM element.</h2>
    <!-- <form action=""> -->
        <label for="email">Email: </label>
        <input type="email" id="email" ref="input"/>
        <label for="password"> Password: </label>
        <input type="password" id="password" ref="input"/> <br><br>
        <button @click="getDomData">Submit</button>
        <button @click="setStyle">Style</button>
    <!-- </form> -->
</template>
<script>
export default {
    name: "RefVue",
    methods: {
        getDomData(){
            console.log(this.$refs.input)
            console.log(this.$refs.input.value)
        },
        setStyle(){
            this.$refs.input.style.border = "2px solid red"
            // this.$refs.input.focus()
            this.$refs.input.style.color = "green"
        }
    }
}
</script>

<style>

</style>

<!-- 
    Q.What is ref?
        - we can use same ref in two different DOM element.
        - But remember that manipulation in any of the element will impact ref for all element using it.
 -->

