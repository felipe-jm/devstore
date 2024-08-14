import { Header } from "@/components/header";

type StoreProps = {
  children: React.ReactNode;
};

export default function Store({ children }: StoreProps) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
  );
}
