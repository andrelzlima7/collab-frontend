import { apiRouteProdutos } from "@/app/DataBase/apiRoutes";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

interface PropsDeleteProduct {
  id: string | number;
  setDependenciesReady: Dispatch<SetStateAction<boolean>>;
}

const DeleteProduct = ({ id, setDependenciesReady }: PropsDeleteProduct) => {
  async function deleteProduct() {
    await fetch(`${apiRouteProdutos}/${id}`, {
      method: "DELETE",
    });
    setDependenciesReady(true);
  }

  return (
    <Button
      variant={"destructive"}
      onClick={deleteProduct}
      className="font-bold"
    >
      Excluir
    </Button>
  );
};

export default DeleteProduct;
