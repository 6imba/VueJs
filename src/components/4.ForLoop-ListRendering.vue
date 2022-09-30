<template>
    <h1>Books:</h1>
    <li v-for="book in books">{{book}}</li> 
    
    <h1>People:</h1>
    <li v-for="person in people">{{person}}</li>  

    <h1>Bio1:</h1>
    <div v-for="person in people">
        <p>{{person.name}} is {{person.age}} years old.</p>
    </div>

    <h1>Bio2:</h1>
    <p v-for="person in people">{{person.name}} is {{person.age}} years old.</p>
    
    <h1>Person Key:</h1> <!-- key -->
    <li v-for="person in people" :key="person.name">{{person}}</li>  
    
</template>

<script>
export default {
    name: "ForLoop",
    data(){
        return{
            books: ['Rich Dad Poor Dad', 'Jiban Kada ki Phool',"Eagal's Mentalty",  'Maha ko Ma', 'Rich and Wealthy'], //data property of array type // array of string
            people: [{name:'amir',age:'22'},{name:'remos',age:'9'},{name:'rita',age:'33'}] //data property of array type // array of object
        }
    }
}
</script>



