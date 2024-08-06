import CategoryList from "@/components/category/categoryList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransactionType } from "@/lib/types";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Category() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5 w-full  bg-gray-50">
      <div className="max-w-screen-lg w-full space-y-5">
        <div className="flex items-center py-3">
          <Button className="mr-auto" asChild variant="outline">
            <Link href="/">
              <ArrowLeftIcon />
            </Link>
          </Button>
          <h1 className="font-bold text-center flex-1">카테고리 설정</h1>
        </div>
        <Tabs defaultValue="income" className="w-full">
          <TabsList className="flex">
            <TabsTrigger
              value="income"
              className="flex-1 data-[state=active]:text-blue-500"
            >
              수입
            </TabsTrigger>
            <TabsTrigger
              value="expense"
              className="flex-1 data-[state=active]:text-red-500"
            >
              지출
            </TabsTrigger>
          </TabsList>
          <TabsContent value="income">
            <CategoryList type={TransactionType.INCOME} />
          </TabsContent>
          <TabsContent value="expense">
            <CategoryList type={TransactionType.EXPENSE} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
