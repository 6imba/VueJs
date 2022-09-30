<template>
    <!-- <form action="" v-if="true"> -->
    <!-- <form action="" v-if="false"> -->
    <form action="" v-if="visibility">
        <b>LogIn form</b> <br>
        Email: <input type="email" name="" id=""> <br>
        Password: <input type="password" name="" id="">
    </form>

    <!-- <button @click="changeVisibility" v-if="!visibility">ShowForm</button>
    <button @click="changeVisibility" v-if="visibility">HideForm</button> -->

    <!-- <button @click="changeVisibility" v-if="visibility">HideForm</button>
    <button @click="changeVisibility" v-else>ShowForm</button> -->

    <!-- <button @click="changeVisibility"> {{ visibility ? "HideForm" :  "ShowForm" }}</button> -->

    <button @click="this.visibility = !this.visibility"> {{ visibility ? "HideForm" :  "ShowForm" }}</button>
</template>

<script>
export default {
    name: "ConditionalRendering",
    data(){
        return{
            visibility:false,
        }
    },
    methods: {
        changeVisibility(){
            this.visibility = !this.visibility
        }
    }
}
</script>