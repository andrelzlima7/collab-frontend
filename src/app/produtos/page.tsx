import Layout from "../layout/layout";
import TableProducts from "./components/tableProducts";

const Produtos = () => {
  return (
    <Layout titlePage="Produtos">
      <main className="p-8">
        <div className="rounded-xl border p-8">
          <TableProducts />
        </div>
      </main>
    </Layout>
  );
};

export default Produtos;
