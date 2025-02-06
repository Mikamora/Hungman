import { CategoryWrapper } from "./styles"

interface CategoryProps {
  children: string;
}

const Category = ({children}: CategoryProps) => {
  return (
    <CategoryWrapper>{children}</CategoryWrapper> 
  )
};

export default Category;
