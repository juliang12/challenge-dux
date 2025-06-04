import { Filters, TopBarUsers } from "@/components/common";
import InvoiceTableSkeleton from "@/components/common/invoiceTableSkeleton/InvoiceTableSkeleton";
import UsersTable from "@/components/common/usersTable/UsersTable";
import { buildQueryString } from "@/utils/build-query-string.utils";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    q?: string;
    sector?: string;
    estado?: string;
    _page?: string;
    _limit?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const searchParamsString = buildQueryString(params);
  const query = params.q || "";
  const page = params._page || "1";

  return (
    <div className="w-full h-full px-5">
      <TopBarUsers />
      <div className="w-full mt-3">
        <Filters />
      </div>
      <div className="pt-4 w-full">
        <Suspense key={query + page} fallback={<InvoiceTableSkeleton />}>
          <UsersTable searchParams={searchParamsString} />
        </Suspense>
      </div>
    </div>
  );
}
