<template>
    <div class="flex drop-shadow-lg card mx-5 my-3">
        <div class="px-2">
            <div class="img-size-container">
                <img :src="image" :alt="title" class="img-card"/>
            </div>
        </div>
        <div class="">
            <div class="container-title">
                <p class="title">{{ title }}</p>
            </div>
            <p>${{price}}</p>
            <p class="text-sm">Category: {{category}}</p>
            <p>Stock: {{rating.count}}</p>
            <p>Rate: {{rating.rate}}</p>
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