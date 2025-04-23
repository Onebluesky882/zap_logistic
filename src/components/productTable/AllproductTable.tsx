type ProductTableProps = {
  productId: string;
  productName: string;
  amount: number;
};

const AllProductTable = (props: ProductTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-100">
          <tr></tr>
        </thead>
        <tbody>
          <tr key={props.productId} className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b border-gray-300">
              {props.productId}
            </td>
            <td className="px-4 py-2 border-b border-gray-300">
              {props.productName}
            </td>
            <td className="px-4 py-2 border-b border-gray-300">
              จำนวน {props.amount}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllProductTable;
