

export interface Product {
    id: number;
    name: string;
    rating: number;
    onRatingChange: (id: number, rating: number) => void;
    type: 'Electronics' | 'Fashion' | 'Tea' | 'Standard Tea Bag' | 'Premium Tea Box' | 'Tea Bag';
    curPrice: number;
    prevPrice?: number;
    onSale?: boolean;
    image: string;
    isFavorite?: boolean;
    weight?: string;
    onFavoriteChange?: (id: number) => void;
}

export interface ProductSectionProps extends Product{
    handleAddtoCart: (product: Product) => void;
    openDetails: boolean;
    handleDetailsOpen: () => void;
    handleDetailsClose: () => void;
    onProductSelect: (prod: Product) => void;
}