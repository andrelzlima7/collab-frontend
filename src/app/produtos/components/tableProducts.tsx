"use client";
import { apiRouteGrupos, apiRouteProdutos } from "@/app/DataBase/apiRoutes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FolderOpen, ImageIcon } from "lucide-react";

import { FormatMoney } from "@/classes/formatMoney";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import DialogConfirmDeleteProduct from "./dialogConfirmDeleteProduct";
import FormAddProduct from "./formAddProduct";

const formatMoney = new FormatMoney();

interface PropsProdutos {
  id: number;
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

const TableProducts = () => {
  const [dados, setDados] = useState<PropsProdutos[]>([]);
  const [grupos, setGrupos] = useState<PropsGrupos[]>([]);
  const [dependenciesReady, setDependenciesReady] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(apiRouteProdutos);
        const data = await response.json();
        const listProducts: PropsProdutos[] = data.message || [];

        listProducts.sort((a, b) => a.id - b.id);
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
  }, [dependenciesReady]);

  return (
    <>
      <div className="flex justify-end pb-8 pl-8">
        <FormAddProduct
          grupos={grupos}
          setDependenciesReady={setDependenciesReady}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-primary-foreground">
            <TableHead></TableHead>
            <TableHead className="text-center">Código (id)</TableHead>
            <TableHead className="text-center">Descrição</TableHead>
            <TableHead className="text-center">Preço de Compra</TableHead>
            <TableHead className="text-center">Preço de Venda</TableHead>
            <TableHead className="text-center">Grupo</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dados.map((dado) => {
            return (
              <TableRow
                key={dado.id}
                className="text-center even:bg-primary-foreground"
              >
                <TableCell>
                  <ImageIcon className="m-auto text-primary" />
                </TableCell>
                <TableCell>{dado.id}</TableCell>
                <TableCell className="text-start">{dado.description}</TableCell>
                <TableCell>{formatMoney.reais(dado.price_buy)}</TableCell>
                <TableCell>{formatMoney.reais(dado.price_seller)}</TableCell>
                <TableCell>
                  {grupos.map((grupo) => {
                    if (grupo.id === dado.group_id) {
                      return grupo.description;
                    }
                  })}
                </TableCell>
                <TableCell className="text-primary">
                  <Link href={`/produtos/${dado.id}`}>
                    <Button size={"icon"}>
                      <FolderOpen />
                    </Button>
                  </Link>
                </TableCell>
                <TableCell>
                  <DialogConfirmDeleteProduct
                    descriptionProduct={dado.description}
                    id={dado.id}
                    setDependenciesReady={setDependenciesReady}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TableProducts;
