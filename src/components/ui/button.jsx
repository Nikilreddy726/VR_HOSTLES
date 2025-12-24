import { motion } from "framer-motion";

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full px-10 py-3 text-sm transition-all";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-md shadow-purple-500/20 hover:shadow-lg",
    outline:
      "border border-purple-500 text-purple-600 bg-white hover:bg-purple-50",
    whatsapp:
      "border border-green-500 text-green-600 bg-white hover:bg-green-50",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
