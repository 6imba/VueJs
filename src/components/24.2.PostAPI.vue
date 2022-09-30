<template>
    <h1>Register user:</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email"> <br><br>
        <label for="username">Username:</label>
        <input type="username" id="username" v-model="name"> <br><br>
        <button @click="formHandle">Save</button>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'PostAPI',
        data(){
            return{
                email: '',
                name: '',
            }
        },
        methods: {
            // formHandle(){
            //     console.log(this.name, ' ', this.email)
            //     let config = {
            //         method: 'post',
            //         url: 'http://localhost:3000/users',
            //         data: {
            //             name: this.name,
            //             email: this.email 
            //         }
            //     }
            //     axios(config)
            // }
            async formHandle(){
                console.log(this.name, ' ', this.email)
                let config = {
                    method: 'post',
                    url: 'http://localhost:3000/users',
                    data: {
                        name: this.name,
                        email: this.email 
                    }
                }
                let res = await axios(config)
                console.log(res)
            }
        }
    }
</script>
