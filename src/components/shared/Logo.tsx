
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showName?: boolean;
  className?: string;
}

export default function Logo({
  showName = true,
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/logo2.png"
        alt="PH Healthcare"
        width={30}
        height={30}
        priority
        className="size-9"
      />

      {showName && (
        <span className="text-base font-semibold tracking-tight">
          PH <span className="text-primary">Healthcare</span>
        </span>
      )}
    </Link>
  );
}