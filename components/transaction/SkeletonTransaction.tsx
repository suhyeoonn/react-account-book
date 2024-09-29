import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React, { ReactNode } from "react";

const SkeletonTransaction = () => {
  return (
    <>
      <div className="grid grid-cols-3 w-full h-20 gap-5 ">
        <Skeleton className="rounded-xl" />
        <Skeleton className="rounded-xl" />
        <Skeleton className="rounded-xl" />
      </div>

      <SkeletonList>
        <SkeletonLi />
        <SkeletonLi className="w-20" />
        <SkeletonLi className="w-52" />
        <SkeletonLi className="w-32" />
      </SkeletonList>
      <SkeletonList>
        <SkeletonLi />
        <SkeletonLi className="w-32" />
      </SkeletonList>
    </>
  );
};

const SkeletonList = ({ children }: { children: ReactNode }) => (
  <Card className="w-full">
    <CardHeader className="border-b p-3">
      <CardTitle className="font-normal">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <span>
              <Skeleton className="rounded-lg h-5 w-5" />
            </span>
            <span>
              <Skeleton className="rounded-xl h-5 w-28" />
            </span>
          </div>
          <div className="flex gap-5">
            <span className="text-blue-500 font-medium tracking-wide">
              <Skeleton className="rounded-xl h-5 w-20" />
            </span>
            <span className="text-expense font-medium tracking-wide">
              <Skeleton className="rounded-xl h-5 w-20" />
            </span>
          </div>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <ul>{children}</ul>
    </CardContent>
  </Card>
);

const SkeletonLi = ({ className = "w-44" }: { className?: string }) => (
  <li className="flex justify-between p-3 py-2 gap-32 items-center cursor-pointer">
    <div className="flex items-center">
      <span className="text-destructive text-right hover:bg-destructive hover:text-white rounded p-1 cursor-pointer">
        <Skeleton className="rounded-xl h-5 w-20" />
      </span>
      <span className="text-sm text-muted-foreground">
        <Skeleton className="rounded-xl h-5 w-20" />
      </span>
    </div>
    <span className="leading-none w-full">
      <Skeleton className={`rounded-xl h-5 ${className}`} />
    </span>
    <span className={`text-right self-end`}>
      <Skeleton className="rounded-xl h-5 w-40" />
    </span>
  </li>
);
export default SkeletonTransaction;
