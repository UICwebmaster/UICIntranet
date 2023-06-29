import Table from "@/app/components/Table/Table";
import Menu from "@/app/components/Menu/Menu";

export default function Home() {
  return (
    <>
      <h1 className="text-center font-sans">Mes demandes</h1>
      <div className="flex row-gap-0">
        <div className="w-1/5 pl-10">
          <Menu />
        </div>
        <div className="w-2/3 pr-20">
          <Table />
        </div>
      </div>
    </>
  );
}
