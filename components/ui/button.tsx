import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-accent text-slate-950 hover:bg-cyan-300",
  outline: "border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800/60",
  ghost: "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100",
} as const;

const sizes = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  icon: "h-10 w-10",
} as const;

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
