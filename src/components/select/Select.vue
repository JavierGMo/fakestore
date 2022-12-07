<template>
    <div>
        <label>{{labelDescription}} 
            <select
                v-model="valueOptionSelect"
                @change="changeSelect"
            >
                <option disabled value="">{{ textForOptionSelect }}</option>
                <slot></slot>
            </select>
        </label>
    </div>
</template>
<script>
export default {
    props: {
        textForOptionSelect: {
            required: true,
            type: String,
            default: 'Please select an option'
        },
        labelDescription: {
            required: true,
            type: String,
            default: 'Label select'
        }
    },
    data(){
        return {
            valueOptionSelect: ''
        };
    },
    methods: {
        changeSelect(){
            this.$emit("changeCallback", this.valueOptionSelect);
        }
    }
}
</script>