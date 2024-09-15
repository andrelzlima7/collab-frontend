import { ImageIcon } from "lucide-react";

const Avatar = () => {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-primary-foreground border rounded-full p-2 border-primary-foreground">
        <ImageIcon />
      </span>
      <span className="text-xs text-primary-foreground">Nome do Usuário</span>
    </div>
  );
};

export default Avatar;
