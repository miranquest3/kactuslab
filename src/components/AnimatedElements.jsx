import { useRef, useState } from "react"
import { motion } from "framer-motion"

export const MagneticButton = ({ children, className, ...props }) => {
    const ref = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e) => {
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 })
    }

    const reset = () => setPosition({ x: 0, y: 0 })

    const { x, y } = position

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    )
}

export const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`text-${align} mb-12`}
        >
            {eyebrow && (
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm tracking-wider uppercase text-emerald-700 font-semibold"
                >
                    {eyebrow}
                </motion.div>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mt-2 text-3xl md:text-4xl font-serif text-slate-900"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="mt-3 text-slate-600 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    )
}

export const RevealImage = ({ src, alt, className }) => {
    return (
        <motion.div
            initial={{
                clipPath: "inset(0 100% 0 0)",
                opacity: 0,
                scale: 1.1
            }}
            whileInView={{
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                scale: 1
            }}
            viewport={{ once: true }}
            transition={{
                duration: 1.5,
                ease: [0.33, 1, 0.68, 1]
            }}
            className={`relative group overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
            />
        </motion.div>
    )
}

export const StaggerText = ({ text, className, delay = 0 }) => {
    return (
        <span className={className}>
            {text.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] py-1">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: delay + i * 0.08,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}
