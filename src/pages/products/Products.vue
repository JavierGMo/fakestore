<template>
    <div class="mx-3">
        <p>Products</p>
        <div>
            <div>
                <label for="">Filter by category:
                    <select
                        name=""
                        id=""
                        @change="filterByCategory"
                        v-model="filterCategory"
                    >
                        <option disabled value="">Please Select</option>
                        <option v-for="CATEGORY in CATEGORIES" :key="CATEGORY.name" :value="CATEGORY.name">{{CATEGORY.name}}</option>
                    </select>
                </label>
            </div>
            <div v-if="showCategories">
                <label for="">Select category: 
                    <select
                        name=""
                        id=""
                        @change="changeCategory"
                        v-model="selectCategory"
                    >
                        <option disabled value="">Please Select</option>
                        <option v-for="CATEGORY in CATEGORIES" :key="CATEGORY.name" :value="CATEGORY.name">{{CATEGORY.name}}</option>
                    </select>
                </label>
            </div>
            <label for=""> Select type sort: 
                <select
                    name=""
                    id=""
                    @change="sortByCategory"
                    v-model="valueOptionSelect"
                >
                    <option disabled value="">Please Select</option>
                    <option
                        v-for="TYPE_SORT in TYPES_SORT"
                        :key="TYPE_SORT.name"
                        :value="TYPE_SORT.value"
                    >{{TYPE_SORT.name}}</option>
                </select>
            </label>
            <Select
                labelDescription="Type sort"
                textForOptionSelect="Select sort of sort"
                @change-callback="testf"
            >
                <slot>
                    <option
                        v-for="TYPE_SORT in TYPES_SORT"
                        :key="TYPE_SORT.name"
                        :value="TYPE_SORT.value"
                    >{{TYPE_SORT.name}}</option>
                </slot>
            </Select>
        </div>


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
    import { CATEGORIES, TYPES_SORT } from '@/constants/PRODUCTS'
    // import Select from '@/components/select/Select'
    export default {
        components: {
            CardProduct,
            // Select
        },
        data(){
            return {
                filterCategory: '',
                showCategories: false,
                valueOptionSelect: '',
                typeSort: 0,
                labelSort: '',
                selectCategory: '',
                CATEGORIES,
                products: [],
                originProducts: [],
                TYPES_SORT,
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
                this.originProducts = this.products;
                // this.products.sort((a, b) => a.category>b.category?1:-1);
            } catch (error) {
                console.error(error);
            }
        },
        methods: {
            changeCategory: function(){
                const self = this;
                this.products = this.originProducts.sort(function (a, b) {
                    return a.category !==  self.selectCategory.toLowerCase()?1:-1;
                });
            },
            sortByCategory: function(event){
                const value = event.target.value;
                console.log(value);
                switch (value) {
                    case "1":
                        this.showCategories = false;
                        this.products = this.products.sort((a, b)=>a.category>b.category?1:-1);
                        console.log(this.products);
                        break;
                    case "2":
                        this.showCategories = false;
                        this.products = this.products.sort((a, b)=>a.category<b.category?1:-1);
                        console.log(this.products);
                        break;
                    case "3":
                        this.showCategories = true;
                        break;
                    default:
                        break;
                }
            },
            filterByCategory: function(event){
                const self = this;
                this.products = this.originProducts.filter(product=>product.category === self.filterCategory.toLowerCase());
            },
            testf(value){
                console.log('soy del callback', value);
            }
        },
        computed: {
            labelForSort(){
                return this.typeSort===0?'Sort by asc or desc':this.labelSort;
            }
        }
    }
</script>