<template>
    <div id="child">
        <h2>I am Child Component.</h2>
        <p>(Data via Props from Parent Component ==> Props: <b>"{{book}}"</b> )</p>
        Props: {{name}} <br>
        Props: {{age}} <br>
        Props: {{bio}}, {{bio.role}} <br>
        Props: {{fruits}},{{fruits[1]}} <br>
        Props: {{func1}} <br>
        Props: {{func2}} <br>
        Props: {{func3}} <br>
        Props: {{func4}} <br>
        <button @click="func1">Click</button>
        <button @click="func2_1">Click</button>
        <button @click="func2(1,2)">Click</button>
        <button @click="func3">Click</button>
        <button @click="func4">Click</button>
    </div>
</template>

<script>
export default {
    name: "ChildComponent",
    props: {
        book: String,
        name: String,
        age: Number,
        bio: Object,
        fruits: Array,
        func1: Function,
        func2: Function,
        func3: Function,
        func4: String,
        func2_1: Function,
    }
}
</script>

<style>
    #child{
        border: 2px solid red;
        padding: 10px;
    }
</style>