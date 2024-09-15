"use client";
import Layout from "@/app/layout/layout";
import { ImageIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartProduct } from "./components/chartProduct";
import { apiRouteGrupos, apiRouteProdutos } from "@/app/DataBase/apiRoutes";
import { useEffect, useState } from "react";
import { FormatMoney } from "@/classes/formatMoney";
import EditDescription from "./components/editDescription";

interface PropsProdutos {
  params: {
    id: string;
  };
}

interface PropsProduto {
  id: number | string;
  user_id: number;
  group_id: number;
  description: string;
  price_buy: number;
  price_seller: number;
}

interface PropsGrupos {
  id: string | number;
  description: string;
  date_created: Date;
}

const formatMoney = new FormatMoney();

const Produto = ({ params }: PropsProdutos) => {
  const [dados, setDados] = useState<PropsProduto>();
  const [grupos, setGrupos] = useState<PropsGrupos[]>([]);
  const [dependenciesReady, setDependenciesReady] = useState(false);

  useEffect(() => {
    const initData = {
      description: "",
      group_id: 1,
      id: params.id,
      price_buy: 0,
      price_seller: 0,
      user_id: 0,
    };
    async function getProducts() {
      try {
        const response = await fetch(`${apiRouteProdutos}/${params.id}`);
        const data = await response.json();
        const listProducts: PropsProduto = data.produto || initData;

        console.log(`${apiRouteProdutos}/${params.id}`);

        setDados(listProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    async function getGrupos() {
      try {
        const response = await fetch(apiRouteGrupos);
        const data = await response.json();
        const listGrouups: PropsGrupos[] = data.message || [];

        setGrupos(listGrouups);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    }

    getProducts();
    getGrupos();

    setDependenciesReady(false);

    console.log("Produtos");
  }, [params.id, dependenciesReady]);

  return (
    <Layout titlePage={dados?.description.slice(0, 20) + "..." || ""}>
      <main className="p-8">
        <section className="mx-8 flex items-center justify-between gap-8 rounded-xl border px-8">
          <div className="flex items-center gap-4 p-8">
            <ImageIcon size={150} className="text-primary" />
            <p>{dados?.description}</p>
            <EditDescription
              newDescription={dados?.description}
              id={dados?.id}
              setDependenciesReady={setDependenciesReady}
            />
          </div>
          <div className="rounded-xl border p-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Grupo</TableHead>
                  <TableHead>Saldo em Estoque</TableHead>
                  <TableHead>Preço de Compra</TableHead>
                  <TableHead>Valor em Estoque</TableHead>
                  <TableHead>Preço de Venda</TableHead>
                  <TableHead>Margem de Lucro</TableHead>
                  <TableHead>Vendas Ultimos 30 dias</TableHead>
                  <TableHead>Total Vendido</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="text-center">
                  <TableCell className="font-bold text-green-600">
                    Produto Ativo
                  </TableCell>
                  <TableCell>
                    {grupos.map((grupo) => {
                      if (grupo.id === dados?.group_id) {
                        return grupo.description;
                      }
                    })}
                  </TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>
                    {formatMoney.reais(dados?.price_buy || 0)}
                  </TableCell>
                  <TableCell>
                    {formatMoney.reais(35 * (dados?.price_buy || 0))}
                  </TableCell>
                  <TableCell>
                    {formatMoney.reais(dados?.price_seller || 0)}
                  </TableCell>
                  <TableCell>60%</TableCell>
                  <TableCell>98 un</TableCell>
                  <TableCell>910 un</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        <section className="p-8">
          <ChartProduct />
        </section>
      </main>
    </Layout>
  );
};

export default Produto;
