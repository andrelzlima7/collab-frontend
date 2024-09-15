import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageIcon, Trash2 } from "lucide-react";
import DeleteProduct from "./deleteProduct";
import { Dispatch, SetStateAction } from "react";

interface PropsDialogConfirmDeleteProduct {
  id: string | number;
  descriptionProduct: string;
  setDependenciesReady: Dispatch<SetStateAction<boolean>>;
}

const DialogConfirmDeleteProduct = ({
  descriptionProduct,
  id,
  setDependenciesReady,
}: PropsDialogConfirmDeleteProduct) => {
  return (
    <Dialog>
      <DialogTrigger className="h-9 w-9 rounded-md bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90">
        <Trash2 className="m-auto" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deseja realmente excluir este produto ?</DialogTitle>
          <DialogDescription className="flex items-center gap-4 py-4">
            <div className="rounded-full border p-2 text-primary">
              <ImageIcon />
            </div>
            <div>{descriptionProduct}</div>
          </DialogDescription>
          <div className="flex justify-end gap-4">
            <DialogClose className="rounded-lg border border-primary px-4 font-bold text-primary">
              Cancelar
            </DialogClose>
            <DeleteProduct
              id={id}
              setDependenciesReady={setDependenciesReady}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogConfirmDeleteProduct;
