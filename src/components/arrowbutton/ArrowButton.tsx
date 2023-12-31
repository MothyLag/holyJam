interface ArrowButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ArrowButton = ({ onClick, className }: ArrowButtonProps) => {
  return (
    <div
      className={`max-w-[100px] animate-[bounce_1s_infinite] p-8 h-[80px] relative  cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div
        className="
            w-[50%]
            h-[15px]
            bg-krillin
            rotate-45
            top-[30%]
            absolute
            right-[40%]
            outlined
        "
      />
      <div
        className="
            w-[50%]
            h-[15px]
            bg-krillin
            -rotate-45
            top-[30%]
            absolute
            left-[35%]
            outlined
        "
      />
    </div>
  );
};
