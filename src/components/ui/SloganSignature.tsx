interface SloganSignatureProps {
    size?: "sm" | "lg";
    className?: string;
}

export default function SloganSignature({
    size = "lg",
    className = "",
}: SloganSignatureProps) {
    const textClasses =
        size === "lg"
            ? "text-3xl sm:text-4xl md:text-5xl"
            : "text-2xl sm:text-3xl";
    const svgWidth = size === "lg" ? "max-w-[280px]" : "max-w-[200px]";

    return (
        <div className={`relative inline-block ${className}`}>
            <p className={`${textClasses} text-white tracking-wide font-signature`}>
                El único límite es tu imaginación.
            </p>
            <svg
                className={`absolute -bottom-2 left-1/2 w-full ${svgWidth} -translate-x-1/2 text-brandOrange`}
                viewBox="0 0 200 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M5 10Q50 2 195 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
