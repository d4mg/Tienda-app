import { tesloApi } from "@/api/TesloApi";
import type { Product } from "@/interfaces/product.interface";

export const createUpdateProductAction = async(
    productLike: Partial<Product>
):Promise<Product> => {


const {id,user, images=[], ...rest} = productLike;

const isCreating = id === 'new';

// Por si no vienen numeros en los montos los transformamos
rest.stock = Number(rest.stock || 0)
rest.price = Number(rest.price || 0)


const {data} = await tesloApi<Product>({
    url: isCreating ? '/products' : `/products/${id}`,  
    method:  isCreating ? 'POST' : 'PATCH',
    data: rest
})


return {
    ...data,
    images: data.images.map(image => {
        if(image.includes('http')) return image;
        return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
    })
}

}