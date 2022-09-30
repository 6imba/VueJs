<template>
    <h1>My Form</h1>
    <label for="username">Username: </label>
    <input type="text" id="username" v-model="bio.username"> <br><br>
    <label for="email">Email: </label>
    <input type="email" id="email" v-model="bio.email"> <br><br>
    Gender:
    <input type="radio" id="male" name="gender" v-model="bio.gender" value="male">
    <label for="male">male </label>
    <input type="radio" id="female" name="gender" v-model="bio.gender" value="female">
    <label for="female">female </label> <br><br>
    Programming:
    <input type="checkbox" id="php" v-model="bio.programming" value="php">
    <label for="php">php </label>
    <input type="checkbox" id="python" v-model="bio.programming" value="python">
    <label for="python">python </label>
    <input type="checkbox" id="javascript" v-model="bio.programming" value="javascript">
    <label for="javascript">javascript </label>
    <input type="checkbox" id="java" v-model="bio.programming" value="java">
    <label for="java">java </label> <br><br>
    <label for="password">Password: </label>
    <input type="password" id="password" v-model="bio.password"> <br><br>
    <button type="submit" @click="formHandle">Submit</button>
    <hr>
    <h1>Detail:</h1>
    <p><b>UserName:</b>  {{bio.username}} </p>
    <p><b>Email:</b>  {{bio.email}} </p>
    <p><b>Gender:</b>  {{bio.gender}} </p>
    <p><b>Programming:</b>  {{bio.programming}} </p>
    <p><b>Password:</b>  {{bio.password}} </p>
    <hr>
</template>

<script>
export default {
    name: "Form_2",
    data(){
        return {
            bio: {
                username: null,
                email: null,
                gender: null,
                programming: [],
                password: null,
            },
        }
    },
    methods:{
        formHandle(){
            console.log(JSON.stringify(this.bio))
        }
    }
}
</script>


<!-- 
    - In, 11.1.Form_1.vue we handle form data inside form tag but in 11.2.Form_2.vue we have not used form tag.
    - In framework like angular,react,vue we don't handle form inside form tag.
    - In, 11.1.Form_1.vue page reload onsubmit and used e.preventDefault to prevent page reload on submit.
    - In, 11.2.Form_2.vue no any page reload on click submit.
 -->
 