import { TableRow, TableCell, TableHeader, TableHead } from "../ui/table";

type ProductsTableProps = {
  productId: string;
  productName: string;
  stockIn: number;
  stockOut: number;
  amount: number;
};

const ProductsTableProps = ({
  productId,
  productName,
  stockIn,
  stockOut,
  amount,
}: ProductsTableProps) => {
  return (
    <TableRow>
      <TableCell className="px-4 py-2 font-medium text-foreground">
        {productId}
      </TableCell>
      <TableCell className="px-4 py-2 text-foreground">{productName}</TableCell>
      <TableCell className="border px-4 py-2 text-right text-foreground">
        {stockIn}
      </TableCell>
      <TableCell className="border px-4 py-2 text-right text-foreground">
        {stockOut}
      </TableCell>
      <TableCell className="border px-4 py-2 text-right text-foreground">
        {amount}
      </TableCell>
    </TableRow>
  );
};

export const Head = () => {
  return (
    <TableHeader className="bg-muted/60">
      <TableRow>
        <TableHead className="w-[120px] px-4 py-3 font-semibold text-muted-foreground">
          รหัสสินค้า
        </TableHead>
        <TableHead className="px-4 py-3 font-semibold text-muted-foreground">
          รายการสินค้า
        </TableHead>
        <TableHead className="border px-4 py-3 font-semibold text-muted-foreground text-center">
          ขารับ
        </TableHead>
        <TableHead className="border px-4 py-3 font-semibold text-muted-foreground text-center">
          ขาส่ง
        </TableHead>
        <TableHead className="border py-3 font-semibold text-muted-foreground text-center">
          รวม
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};
export default ProductsTableProps;
