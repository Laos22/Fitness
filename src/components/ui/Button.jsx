const Button = ({ variant = "primary", children, className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition";

  const variants = {
    primary: "bg-premium-pink text-white hover:bg-pink-hover",
    secondary: "border border-premium-pink text-premium-pink hover:bg-pink-subtle",
    ghost: "text-premium-pink hover:bg-pink-subtle",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
