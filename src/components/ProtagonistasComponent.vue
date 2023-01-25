
<template>

    <PickList v-model="products" listStyle="height:342px" dataKey="id">
        <template #sourceheader>
            Protagonistas
        </template>
        <template #targetheader>
            Vehículo
        </template>
        <template #item="slotProps">
            <div class="product-item">
                
                <div class="product-list-detail">
                    <h6 class="mb-2">{{slotProps.item.name}}</h6>
                    <i :class="'pi '+slotProps.item.icono"></i>
                    <span class="product-category ml-3">{{slotProps.item.category}}</span>
                </div>
                <div class="product-list-action">
                    
                    <span :class="'product-badge status-'+slotProps.item.inventoryStatus.toLowerCase()">{{slotProps.item.tipo}}</span>
                </div>
            </div>
        </template>
    </PickList>
       
</template>

<script >
import { ref, onMounted } from 'vue';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = [data, []]);
        })

        const products = ref(null);
        const productService = ref(new ProductService());

        return { products, productService }
    }
}
</script>

<style lang="scss" scoped>
.product-item {
	display: flex;
	align-items: center;
	padding: .5rem;
	width: 100%;

	img {
		width: 75px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin-right: 1rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.product-list-action {
		display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .product-category-icon {
        vertical-align: middle;
        margin-right: .5rem;
        font-size: .875rem;
    }

    .product-category {
        vertical-align: middle;
        line-height: 1;
        font-size: .875rem;
    }
}

@media screen and (max-width: 576px) {
    .product-item {
        flex-wrap: wrap;

        .image-container {
            width: 100%;
            text-align: center;
        }

        img {
            margin: 0 0 1rem 0;
            width: 100px;
        }
    }
}
</style>
