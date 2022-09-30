<template>
    <h1>My Form</h1>
    <form action="" @submit="formHandle">
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

        <label for="continent">Continent:</label>
        <select name="continent" id="continent" v-model="bio.continent">
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="Australia">Australia</option>
        </select> <br><br>

        <label for="password">Password: </label>
        <input type="password" id="password" v-model="bio.password"> <br><br>

        <button type="submit">Submit</button>
    </form>
    <hr>

    <h1>Detial:</h1>
    <p><b>UserName:</b>  {{bio.username}} </p>
    <p><b>Email:</b>  {{bio.email}} </p>
    <p><b>Gender:</b>  {{bio.gender}} </p>
    <p><b>Programming:</b>  {{bio.programming}} </p>
    <p><b>Continent:</b>  {{bio.continent}} </p>
    <p><b>Password:</b>  {{bio.password}} </p>
    <hr>
</template>

<script>
export default {
    name: "Form_1",
    data(){
        return {
            bio: {
                username: null,
                email: null,
                gender: null,
                programming: [],
                continent: null,
                password: null,
            },
        }
    },
    methods:{
        formHandle(e){
            e.preventDefault();
            console.log(JSON.stringify(this.bio))
        }
    }
}
</script>

<style>

</style>