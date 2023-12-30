import Image from "next/image";

type AvatarProps = {
  src: string;
  isLarge?: boolean;
  isMedium?: boolean;
  onClick: () => void;
};

export const Avatar = ({ src, isLarge, isMedium, onClick }: AvatarProps) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <Image
        src={src}
        alt="avatar of user"
        width={isLarge ? 128 : 32 && isMedium ? 48 : 32}
        height={isLarge ? 128 : 32 && isMedium ? 48 : 32}
        className="rounded-full aspect-square object-center"
      />
    </div>
  );
};
