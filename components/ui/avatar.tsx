import Image from "next/image";

type AvatarProps = {
  src: string;
  isLarge?: boolean;
};

export const Avatar = ({ src, isLarge }: AvatarProps) => {
  return (
    <div className="cursor-pointer">
      <Image
        src={src}
        alt="avatar of user"
        width={isLarge ? 128 : 32}
        height={isLarge ? 128 : 32}
        className="rounded-full aspect-square object-center"
      />
    </div>
  );
};
