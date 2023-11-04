import StocksList from "@/components/StocksList";

export default function Home() {
  return (
    <div>
      <h1 className="mb-4">Top Stock Prices</h1>
      <StocksList />
    </div>
  );
}
