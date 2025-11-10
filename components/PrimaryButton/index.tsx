interface IPrimaryButton {
  onClick: () => void;
  name: string;
}

export default function PrimaryButton({ name, onClick }: IPrimaryButton) {
  return (
    <button
      className="w-full cursor-pointer rounded-md py-2.5 px-4 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
      style={{
        background: "linear-gradient(135deg, #F39AB3 0%, #e09148 100%)",
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
