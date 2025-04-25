export type InsertProductType = {
  productId: string;
  productName: string;
  amount: number;
  updateAt?: string | null;
};

export type ProductSummaryType = InsertProductType & {
  quantityIn: number;
  quantityOut: number;
};
