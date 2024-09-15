"use client";
import { apiRouteProdutos } from "@/app/DataBase/apiRoutes";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

interface PropsEditDescription {
  newDescription?: string;
  id?: string | number;
  setDependenciesReady: Dispatch<SetStateAction<boolean>>;
}

const EditDescription = ({
  newDescription,
  id,
  setDependenciesReady,
}: PropsEditDescription) => {
  const [descriptionProduct, setDescriptionProduct] = useState(newDescription);

  async function editDescriptionProduct() {
    const updatedData = {
      description: descriptionProduct,
    };

    try {
      const response = await fetch(`${apiRouteProdutos}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Usuário atualizado com sucesso:", result);
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
    }

    setDependenciesReady(true);
  }

  return (
    <Dialog>
      <DialogTrigger
        className="text-primary"
        onClick={() => setDescriptionProduct(newDescription)}
      >
        <Pencil />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deseja editar a descrição do produto ?</DialogTitle>
          <DialogDescription>
            Altere a descrição conforme necessário
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input
            type="text"
            value={descriptionProduct}
            onChange={(e) => setDescriptionProduct(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end gap-4">
          <DialogClose className="border-primary px-4 font-bold text-primary">
            Cancelar
          </DialogClose>
          <Button onClick={editDescriptionProduct}>Atualizar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditDescription;
