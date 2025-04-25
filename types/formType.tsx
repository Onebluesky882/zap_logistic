export type StockInRecord = {
  branch_id: string | null;
  date: string;
  product_id: string | null;
  provider_id: string | null;
  quantity: number;
  stock_id: string;
};
export type StockOutRecord = {
  product_id: string | null;
  quantity_out: number | null;
};
