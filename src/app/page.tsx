import { ProdutosMaisVendidos } from "@/components/dashboards/maisVendidos";
import Layout from "./layout/layout";
import { FaturamentoBruto } from "@/components/dashboards/faturamentoBruto";
import { TotalItensCadastrados } from "@/components/dashboards/totalItensCadastrados";
import { DespesasFaturamento } from "@/components/dashboards/despesasFaturamento";

export default function Home() {
  return (
    <Layout titlePage="Dashboards">
      <main className="grid-rows-2-2 grid gap-8 p-8">
        <section className="grid grid-cols-3 gap-8 rounded-xl border p-8">
          <TotalItensCadastrados />
          <ProdutosMaisVendidos />
          <FaturamentoBruto />
        </section>

        <section className="grid gap-8 rounded-xl border p-8">
          <DespesasFaturamento />
        </section>
      </main>
    </Layout>
  );
}
