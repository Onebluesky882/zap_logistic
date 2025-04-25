export type InsertProductType = {
  amount: number;
  createAt?: string | null;
  productId: string;
  productName: string;
  updateAt?: string | null;
};

export type InventoryDayType = {
  productAmount: number;
  createAt?: string | null;
  productId: string;
  updateAt?: string | null;
  quantityIn: number;
  quantityOut: number;
  productsName: string;
};
