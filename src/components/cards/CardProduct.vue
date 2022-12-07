<template>
    <div class="flex drop-shadow-lg card mx-5 my-3 bg-white-light px-2">
        <div class="px-2">
            <div class="img-size-container">
                <img :src="image" :alt="title" class="img-card"/>
            </div>
        </div>
        <div class="">
            <div class="container-title px-2">
                <p class="title color-purple-light font-bold">{{ title }}</p>
            </div>
            <p class="color-purple-strong">${{price}}</p>
            <p class="text-sm">Category: {{category}}</p>
            <p class="text-sm">Stock: {{rating.count}}</p>
            <p class="text-sm">Rate: {{rating.rate}}<i class="fa-solid fa-star color-yellow"></i></p>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            id: {
                required: true,
                type: Number
            },
            title: {
                required: true,
                type: String
            },
            price: {
                required: true,
                type: Number
            },
            category: {
                required: true,
                type: String
            },
            image: {
                required: true,
                type: String
            },
            rating: {
                count: {
                    required: true,
                    type: Number
                },
                rate: {
                    required: true,
                    type: Number
                }
            }
        },
        data(){
            return {};
        }
    }
</script>
<style scoped>
    .card{
        width: 25vw;
    }
    .container-title{
        inline-size: 150px;
        overflow-wrap: break-word;
    }
    .title{
        text-align: center;
    }
    .img-size-container{
        width: 8vw;
    }
    
    .img-card{
        background-size: cover;
    }
</style>