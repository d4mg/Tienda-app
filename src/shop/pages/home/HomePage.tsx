import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { products } from '../../../mocks/products.mock';
import { ProductGrid } from "@/shop/components/ProductGrid";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Todos los productos" subTitle="Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal." />
      
      <ProductGrid products={products}/>
      
      <CustomPagination totalPages={7}/>
    </>
  )
}
