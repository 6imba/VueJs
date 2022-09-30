<template>
    <h2 class="green">Component with dynamic class attribute value.</h2>
    <!-- dynamic class value -->
    <h2 :class="blue">Component with dynamic class attribute value.</h2>
    <!-- add class value -->
    <h2 :class="{pink:true}">Component with dynamic class attribute value.</h2>
    <!-- remove class value -->
    <h2 :class="{pink:false}">Component with dynamic class attribute value.</h2>
    
    <h2 :class="{pink:colorBackground}">Component with dynamic class attribute value.</h2>
    <hr>
    <!-- add/remove class value on event -->
    <h2 :class="{yellow:colorBackground}">Component with dynamic class attribute value.</h2>
    <button @click="colorStatus">Click</button>
    <hr>

    <!-- apply multiple classes -->
    <h2 class="other-class" :class="{orange:colorBackground}">Component with dynamic class attribute value.</h2>
    <h2 class="my-class" :class="{orange:colorBackground}">Component with dynamic class attribute value.</h2>
    <button @click="colorStatus">Click</button>
    <hr>

    <h2 class="my-class" :class="{success:successStatus, error:errorStatus}">Component with dynamic class attribute value.</h2>
    <button @click="successStatus =! successStatus; errorStatus =! errorStatus; ">Aim</button>
    <hr>
    <hr>

    <h2 class="my-class" :class="{success:successStatus, error:!successStatus}">Component with dynamic class attribute value.</h2>
    <button @click="successStatus =! successStatus; ">Aim</button>
    <hr>
</template>

<script>
    export default {
        name: "HtmlBinding",
        data(){
            return{
                blue:"blue",
                colorBackground: true,
                successStatus: true,
                errorStatus: false,
            }
        },
        // methods:{
        //     colorStatus(){
        //         this.colorBackground = ! this.colorBackground
        //     }
        // },
        computed:{
            colorStatus(){
                this.colorBackground = ! this.colorBackground
            }
        }
    }
</script>

<style>
    .green{
        background-color: green;
    }
    .blue{
        background-color: rgb(95, 176, 219);
    }
    .pink{
        background-color: pink;
    }
    .yellow{
        background-color: yellow;
    }
    .orange{
        background-color: orange;
    }
    .other-class{
        background-color: rgb(252, 210, 132);
    }
    .success{
        background-color: rgb(182, 255, 114);
    }
    .error{
        color: red;
    }
</style>