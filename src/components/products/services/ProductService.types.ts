export interface ProductImage {
  id: number;
  path: string;
  file: string;
  is_external: number;
}

export interface ProductData {
  product_id: number;
  product_name: string;
  brand_name: string;
  price: number;
  color_name: string;
  images: ProductImage[];
}

export interface ProductsData {
  data: ProductData[];
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
  first_page_url?: string;
  last_page_url?: string;
  links?: string[] | string;
  next_page_url?: string;
  prev_page_url?: string;
}

export interface ResponseProductsData {
  status: string;
  msg: string;
  limit: number;
  count_products: number;
  products: ProductsData;
  create_link: boolean;
  selected_products: string[] | number[];
  link: string;
  prospect_customer: string;
  category_button: string;
}
