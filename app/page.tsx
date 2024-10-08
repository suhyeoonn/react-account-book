"use client";

import DateController from "@/components/transaction/dateController";
import MonthlyTransaction from "@/components/transaction/monthlyTransaction";
import { Button } from "@/components/ui/button";
import TransactionProvider from "@/lib/context/TransactionProvider";
import { GearIcon, PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <TransactionProvider>
      <main className="flex min-h-screen flex-col items-center gap-5 p-5 w-full">
        <div className="max-w-screen-lg w-full space-y-5">
          <div className="flex justify-between w-full items-center">
            <DateController />
            <div className="flex justify-center space-x-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="/category">
                  <GearIcon />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/transaction/add">
                  <PlusIcon className="mr-1" />
                  Add
                </Link>
              </Button>
            </div>
          </div>
          <MonthlyTransaction />
        </div>
      </main>
    </TransactionProvider>
  );
}
