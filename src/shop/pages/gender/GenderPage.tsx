import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductGrid } from "@/shop/components/ProductGrid"
import { useParams } from "react-router"

export const GenderPage = () => {

  const {gender} = useParams();

  const genderLabel = gender === 'men'
    ?  'Hombres'
    : gender === 'women'
      ? 'Mujeres'
      : 'Niños';

  return (
    <>
          <CustomJumbotron title={`Productos para ${genderLabel}`} subTitle="Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal." />
          
          <ProductGrid products={products}/>
          
          <CustomPagination totalPages={7}/>
    
    </>
  )
}
