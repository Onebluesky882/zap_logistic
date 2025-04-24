import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
};
const FormStockIn = () => {
  const form = useForm({
    defaultValues: {
      name: "", // ← or any initial value
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted:", data);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อสินค้า</FormLabel>
                <FormControl>
                  <Input placeholder="ชื่อสินค้า..." {...field} />
                </FormControl>
                <FormControl>
                  <Input placeholder="จำนวน" {...field} />
                </FormControl>
                <FormDescription>
                  กรอกชื่อสินค้าที่ต้องการบันทึก
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">บันทึก</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormStockIn;
