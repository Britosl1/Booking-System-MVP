import PrimaryButton from "../PrimaryButton";

interface IServicesCard {
  name: string;
  duration: string;
  price: string;
  description: string;
  onClick: () => void;
}

export default function ServicesCard({
  description,
  duration,
  name,
  onClick,
  price,
}: IServicesCard) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-[#F39AB3]/10 ">
      <div className="absolute inset-0 bg-linear-to-br from-[#F39AB3]/5 to-[#e09148]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-[#F39AB3] transition-colors">
            {name}
          </h3>
          <span
            className="shrink-0 text-xl font-bold"
            style={{ color: "#F39AB3" }}
          >
            ${price}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-4 h-4 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm text-zinc-400">{duration} minutes</span>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
          {description}
        </p>

        <PrimaryButton name="Book Now" onClick={onClick} />
      </div>
    </div>
  );
}
