<template>
    Email: <input type="email" v-model="email" > <br>
    Password: <input type="password" v-model="password" > <br>
    Courses1:
    <label for="php1">php</label>
    <input type="checkbox" name="" id="php1" v-model="course1" value="php">
    <label for="python1">python</label>
    <input type="checkbox" name="" id="python1" v-model="course1" value="python">
    <label for="js1">js</label>
    <input type="checkbox" name="" id="js1" v-model="course1" value="js"> <br>
    Courses2:
    <label for="php">php</label>
    <input type="checkbox" name="" id="php" v-model="course2.php">
    <label for="python">python</label>
    <input type="checkbox" name="" id="python" v-model="course2.python">
    <label for="js">js</label>
    <input type="checkbox" name="" id="js" v-model="course2.js"> <br>
    Role:
    <input type="radio" name="role" id="developer" v-model="role" value="developer">
    <label for="developer">Developer</label>
    <input type="radio" name="role" id="sdet" v-model="role" value="sdet">
    <label for="sdet">SDET</label>
    <input type="radio" name="role" id="db" v-model="role" value="DB engeenier">
    <label for="db">DataBase Engeenier</label> <br><br>
    <!-- Picture: <input type="file" name="" id="" v-model="picture"> <br> -->
    <input type="submit" value="submit" @click="getValue"> <br>
    <hr>
    <p> Email: {{email}}</p>
    <p> Password: {{password}}</p>
    <p> Course1: {{course1}}</p>
    <p> Course2: {{course2}}</p>
    <p> Role: {{role}}</p>
    <!-- <p>{{email,password}}</p>
    <p>{{email}}{{password}}</p> -->
    <hr>
</template>

<script>
export default {
    name: "Home",
    data(){
        return{
            email: null,
            password: null,
            course1: [],
            course2: { php: null, python: null, js: null },
            role: null,
            // picture: null
        }
    },
    methods: {
        getValue(){
            console.log(this.email)
        }
    }
}
</script>