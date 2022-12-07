<template>
    <div class="mx-3">
        <p>Products</p>
        <select name="" id="" @change="changeCategory" v-model="selectCategory">
            <option disabled value="">Please Select</option>
            <option v-for="CATEGORY in CATEGORIES" :key="CATEGORY.name" :value="CATEGORY.name">{{CATEGORY.name}}</option>
        </select>
        <p>{{ product.category }}</p>
        <div class="flex flex-wrap">
            <CardProduct
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :title="product.title"
                :price="product.price"
                :category="product.category"
                :description="product.description"
                :image="product.image"
                :rating="product.rating"
            />
        </div>
    </div>

</template>
<script>
    import { Request } from '@/classes/Request/Request';
    import { Product } from '@/models/Product';
    import CardProduct from '@/components/cards/CardProduct';
    import { CATEGORIES } from '@/constants/categories'
    export default {
        components: {
            CardProduct
        },
        data(){
            return {
                selectCategory: '',
                CATEGORIES,
                products: [],
                product: new Product()
            }
        },
        async beforeMount(){
            try {
                const request = new Request({});
                const result = await request.makeRequest('/products');
                
                result.data.forEach(product => {
                    const productParse = new Product(product);
                    this.products.push(productParse);
                });
            } catch (error) {
                console.error(error);
            }
        },
        methods: {
            changeCategory: function(){
                const self = this;
                this.products.sort(function (categoryOne, categoryTwo) {
                    console.log(categoryTwo.category, categoryOne.category);
                    return categoryOne.category === self.selectCategory || 0;
                });
            }
        }
    }
</script>