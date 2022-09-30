<template>
    <!-- <Post title="Sunset" location="Gosaikunda" description="Gosaikunda, also spelled Gosainkunda, also called Silu. is an alpine freshwater oligotrophic lake in Nepal's Langtang National Park."/>
    <Post title="Ropeway" location="Manakamana" description="The Manakamana Cable Car is a gondola lift transportation system located in Chitwan, Nepal."/>
    <Post title="Rafting" location="Trishuli" description="The Trishuli is Nepal's most popular rafting river, impressive gorges, exciting rapids, some easier sections."/>
    <Post v-for="post in posts" :title="post.title" :location="post.location" :description="post.description"/>
    <Post v-for="post in posts" :key="post.title" :title="post.title" :location="post.location" :description="post.description"/>
    <Post2 v-for="post in posts" :post="post"/> -->
    <!-- <Post3 v-for="post in posts" :post="post"/> -->
    <!-- <Post4 v-for="post in posts" :post="post" :greet="greet"/> -->
    <!-- <Post4 v-for="post in posts" :post="post" :about="about(post.title)"/> -->
    <!-- <Post4 v-for="post in posts" :post="post" :about="()=>about(post.title)"/> -->
    <!-- <Post4 v-for="post in posts" :post="post" :about="about(post.title)"/> -->
    <Post4 v-for="post in posts" :post="post" :about="about"/>
</template>

<script>
    import Post from './7.2.ReuseComponent.vue'
    import Post2 from './7.3.ReuseComponent.vue'
    import Post3 from './7.4.ReuseComponent.vue'
    import Post4 from './7.5.ReuseComponent.vue'
    export default {
        name: "Blog",
        components:{
            Post,
            Post2,
            Post3,
            Post4,
        },
        data(){
            return{
                posts: [
                    {
                        title:"Swimming",
                        location:"Balukakhane",
                        description:"Swimming is an individual or team racing sport that requires the use of one's entire body to move through water."
                    },
                    {
                        title:"Horse Riding",
                        location:"LalitPur",
                        description:"Flying Horse Pvt. Ltd. is recreational and training school for horse riding.."
                    },
                    {
                        title:"Kayaking",
                        location:"Trishuli",
                        description:"The Trishuli is Nepal's most popular rafting river, impressive gorges, exciting rapids, some easier sections."
                    }
                ]
            }
        },
        // for 7.5.ReuseComponent.vue
        methods: {
            greet(){
                alert("Good morning!")
            },
            about(title){
                alert("About " + title)
            }
        }
    }
</script>