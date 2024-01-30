import { Button } from "@/components/ui/button";

type EditorOptionProps = {
  title: string;
  onClick: () => void;
  icon: React.ReactNode;
};

export const EditorOption = ({ title, onClick, icon }: EditorOptionProps) => {
  return (
    <Button
      type="button"
      data-title={title}
      className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
      variant="outline"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};
