interface ArrowButtonProps {
  onClick?: () => void;
}

export const ArrowButton = ({ onClick }: ArrowButtonProps) => {
  return (
    <div
      className="max-w-[100px] animate-[bounce_1s_infinite] p-8 h-[80px] relative  cursor-pointer "
      onClick={onClick}
    >
      <div
        className="
            w-[50%]
            h-[15px]
            bg-[#5cb130]
            rotate-45
            top-[30%]
            absolute
            right-[40%]
        "
      />
      <div
        className="
            w-[50%]
            h-[15px]
            bg-[#5cb130]
            -rotate-45
            top-[30%]
            absolute
            left-[35%]
        "
      />
    </div>
  );
};
