import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { products } from '../../../mocks/products.mock';
import { ProductGrid } from "@/shop/components/ProductGrid";
import { useProducts } from "@/shop/hooks/useProducts";

export const HomePage = () => {

  const {data} = useProducts(); 

  return (
    <>
      <CustomJumbotron title="Todos los productos" subTitle="Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal." />
      
      <ProductGrid products={products}/>
      
      <CustomPagination totalPages={7}/>
    </>
  )
}
