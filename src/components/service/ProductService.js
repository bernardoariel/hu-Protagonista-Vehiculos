
export default class ProductService {

    getProductsSmall() {
      return fetch('../../demo/products-small.json').then(res => res.json()).then(d => d.data);
   }
 
  
 }
 