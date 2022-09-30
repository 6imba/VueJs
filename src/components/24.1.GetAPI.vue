<template>
    <h1>API call</h1>
    <h2>Data List:</h2>
    <li v-for="item in list"> {{item}} </li>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'API',
        data(){
            return{
                list: [],
            }
        },
        async mounted(){
            let response = await axios.get("https://reqres.in/api/users?page=1")
            console.log(response)
            console.log(response.data)
            console.log(response.data.data)
            this.list = response.data.data
        }
    }
</script>


<!-- 
    > npm i axios
    > 
 -->