<template>
    <h2>Vue Ref to access DOM element.</h2>
    <label for="email">Email: </label>
    <input type="email" id="email" ref="email"/>
    <button @click="getDomData">Submit</button>
    <button @click="setStyle">Style</button>
</template>

<script>
export default {
    name: "RefVue",
    methods: {
        getDomData(){
            // alert("email.")
            console.log(this.$refs.email)
            console.log(this.$refs.email.value)
        },
        setStyle(){
            // alert("style.")
            this.$refs.email.style.border = "2px solid red"
            this.$refs.email.focus()
            this.$refs.email.style.color = "green"
        }
    }
}
</script>

<style>

</style>

<!-- 
    Q.What is ref?
        - Ref is used to access DOM element.
        - Ref is used to get and set value of DOM element.
        - Ref is used to get and set style of DOM element.
        - We can have more than one ref in a component.
        - we can use same ref in two different DOM element and remember that manipulation in any of the element will impact ref for all element using it.
            - see in 10.2.SameRefInMultipleElement.vue.
        -> ref is a special attribute, similar to the key attribute discussed in the v-for chapter.
        -> It allows us to obtain a direct reference to a specific DOM element or child component instance after it's mounted.
 -->
