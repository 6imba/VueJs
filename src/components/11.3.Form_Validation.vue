<template>
    <h1>My Form</h1>
    <ul>
        <li v-for="err in errors">{{err}}</li>
        <!-- <li v-for="err in errors" :key="err">{{err}}</li> -->
    </ul>
    <hr>

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
    <button type="submit" @click="validateForm">Submit</button>
    <input type="reset" value="Reset"/>
</template>

<script>
export default {
    name: "Form_3",
    data(){
        return {
            bio: {
                username: '',
                email: '',
                gender: '',
                programming: [],
                password: '',
            },
            errors: [],
        }
    },
    methods:{
        // validateForm(){
        //     this.errors = []
        //     if(this.bio.username === ''){
        //         this.errors.push('Username is required!')
        //     }
        //     if(this.bio.email === ''){
        //         this.errors.push('Email is required!')
        //     }
        //     if(this.bio.gender === ''){
        //         this.errors.push('Gender is required!')
        //     }
        //     if(this.bio.programming.length == 0){
        //         this.errors.push('Programming is required!')
        //     }
        //     if(this.bio.password === ''){
        //         this.errors.push('Password is required!')
        //     }
        // }

        // validateForm(){
        //     this.errors = []
        //     for (let field in this.bio){
        //         if(typeof(this.bio[field]) =='string' & this.bio[field] === ''){
        //             this.errors.push(`${field} is required!`)
        //         }                
        //         if(this.bio[field] instanceof Array & this.bio[field].length == 0){
        //             this.errors.push(`${field} is required!`)
        //         }                
        //     }
        // }

        validateForm(){
            this.errors = []
            for (let field in this.bio){
                if(this.bio[field].length == 0){
                    this.errors.push(`${field} is required!`)
                }                
            }
            if(this.errors.length === 0){
                this.errors.push("Form submitted successfully!")
            }
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
 