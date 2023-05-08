export interface BrandFormData {
  product_id: number;
  product_name: string;
  brand_name: string;
  price: number;
  color_name: string;
  images: ProductImage[];
}

export interface ProductImage {
  id: number;
  path: string;
  file: string;
  is_external: number;
}
