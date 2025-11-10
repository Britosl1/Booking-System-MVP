"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ICenterCard {
  id: string;
  logo: string;
  name: string;
  description: string;
}

export default function CenterCard({
  description,
  id,
  logo,
  name,
}: ICenterCard) {
  const navigate = useRouter();

  const handleNavigation = () => {
    navigate.push(id);
  };

  return (
    <div
      onClick={handleNavigation}
      className="group cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-[#F39AB3]/10 hover:-translate-y-1"
    >
      <div className="relative w-full h-[240px] overflow-hidden bg-zinc-950">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#F39AB3] transition-colors duration-200">
          {name}
        </h4>

        <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        <div
          className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
          style={{ color: "#F39AB3" }}
        >
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            View Details
          </span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
