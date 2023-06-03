import { Product } from "components/ProductCard/types";

export interface ProductDetailsProps {
    product: Product;
    open: boolean;
    onclose: () => void;
    handleAddToCart: (prod: Product) => void;
}