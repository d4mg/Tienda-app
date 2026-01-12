import { tesloApi } from "@/api/TesloApi";
import type { Product } from "@/interfaces/product.interface";

export const getProductByIdAction = async(id: string):Promise<Product>=> {

    if(!id) throw new Error('Id is required');
// si queremos crear un nuevo producto
    if( id === 'new') {
        return {
            id: 'new',
            title: '',
            price: 0,
            description: '',
            slug: '',
            stock: 0,
            sizes: [],
            gender: 'men',
            tags: [],
            images: []
        } as unknown as Product;
    }

    // Si tenemos un id o algo

    const {data} = await tesloApi.get<Product>(`/products/${id}`);

    const images = data.images.map(image => {
        if(image.includes('http')) return image;
        return`${import.meta.env.VITE_API_URL}/file/product/${image}`;
    });

    return {
        ...data,
        images,
    };
};