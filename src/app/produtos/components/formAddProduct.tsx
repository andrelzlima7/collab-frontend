"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
import { apiRouteProdutos } from "@/app/DataBase/apiRoutes";

const formSchema = z.object({
  grupo: z.string({
    required_error: "Por favor selecione um grupo",
  }),
  descricao: z.string().min(10, {
    message: "A descrição precisa ter no mínimo 10 caracteres",
  }),
  precoCompra: z.coerce.number(),
  precoVenda: z.coerce.number(),
});

interface PropsGrupos {
  id: string | number;
  description: string;
  date_created: Date;
}

interface PropsFormAddProduct {
  grupos: PropsGrupos[];
  setDependenciesReady: Dispatch<SetStateAction<boolean>>;
}

const FormAddProduct = ({
  grupos,
  setDependenciesReady,
}: PropsFormAddProduct) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descricao: "",
      precoCompra: 0,
      precoVenda: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      user_id: 1,
      group_id: 2,
      description: values.descricao,
      price_buy: values.precoCompra,
      price_seller: values.precoVenda,
    };

    console.log(data.group_id);

    try {
      const response = await fetch(apiRouteProdutos, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }

      // Lê a resposta do servidor e converte para JSON
      const result = await response.json();
      console.log("Produto criado com sucesso:", result);
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
    }
    console.log(values);
    setDependenciesReady(true);
  }
  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-end gap-2 rounded-md bg-primary px-3 py-2 font-bold text-primary-foreground drop-shadow-lg">
        <CirclePlus />
        <span>Novo Produto</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastro de Produto</DialogTitle>
          <DialogDescription>
            Preencha as informações necessárias para adicionar um novo produto +{" "}
            {apiRouteProdutos}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="grupo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um grupo dispnível" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {grupos.map((grupo) => {
                        return (
                          <SelectItem key={grupo.id} value={grupo.description}>
                            {grupo.description}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Grupo ao qual este produto irá pertencer
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input placeholder="Descrição do Produto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="precoCompra"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço de compra</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Preço de compra do produto"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="precoVenda"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço de Venda</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Preço de venda do produto"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Cadastrar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormAddProduct;
