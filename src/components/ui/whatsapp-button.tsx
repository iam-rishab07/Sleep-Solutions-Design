import { useState } from "react";

const WHATSAPP_NUMBER = "917276850801";
const WHATSAPP_MESSAGE = "Hello! I'm interested in Sleep Solutions India's devices. Please help me.";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-testid="whatsapp-button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip label */}
      <span
        className={`
          bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-md
          border border-gray-100 whitespace-nowrap
          transition-all duration-300 ease-out
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
        `}
      >
        Chat with us
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <div
          className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center
                     hover:scale-110 transition-transform duration-200 active:scale-95"
        >
          {/* WhatsApp SVG icon */}
          <svg
            viewBox="0 0 32 32"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
          >
            <path d="M16.002 2.667C8.637 2.667 2.667 8.636 2.667 16c0 2.354.627 4.588 1.72 6.523L2.667 29.333l6.98-1.696A13.28 13.28 0 0 0 16.002 29.333C23.364 29.333 29.333 23.364 29.333 16c0-7.364-5.969-13.333-13.331-13.333Zm0 24.267a11.008 11.008 0 0 1-5.613-1.537l-.402-.238-4.143 1.006 1.045-3.998-.262-.42A10.935 10.935 0 0 1 5.001 16c0-6.066 4.935-11 11.001-11 6.065 0 11 4.934 11 11s-4.935 11-11 11Zm6.033-8.23c-.33-.166-1.955-.964-2.258-1.073-.303-.11-.523-.166-.743.166-.22.331-.854 1.073-1.047 1.293-.192.22-.385.248-.715.083-.33-.166-1.394-.514-2.656-1.638-.982-.875-1.645-1.955-1.838-2.285-.192-.33-.021-.509.145-.674.149-.148.33-.386.495-.579.166-.193.22-.331.33-.552.11-.22.055-.413-.028-.579-.083-.165-.743-1.792-1.018-2.454-.268-.644-.54-.557-.743-.567l-.633-.011c-.22 0-.578.083-.88.413-.303.33-1.155 1.128-1.155 2.751s1.183 3.192 1.348 3.413c.165.22 2.328 3.556 5.642 4.987.79.34 1.405.543 1.886.696.792.252 1.513.216 2.082.131.635-.094 1.955-.8 2.23-1.572.276-.772.276-1.434.193-1.572-.082-.138-.302-.22-.633-.386Z" />
          </svg>
        </div>
      </div>
    </a>
  );
}
