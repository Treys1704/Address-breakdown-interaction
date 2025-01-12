import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { AddressItemProps } from '../types'

export function AddressItem({ label, value, image, expanded, layoutId }: AddressItemProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative"
            onMouseEnter={() => !expanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && !expanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, rotate: -5 }}
                        animate={{ opacity: 1, y: 0, rotate: -5 }}
                        exit={{ opacity: 0, y: 10, rotate: -5 }}
                        className="absolute bottom-full mb-6 w-40 h-[150] rounded-xl border-4 border-gray-300"
                    >
                        <img
                            src={image}
                            alt=""
                            className="w-40 h-32 object-cover rounded-lg"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div layoutId={layoutId} className={`relative flex ${expanded ? '' : 'justify-center'} items-center`}>
                {(expanded) && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="mx-2 w-24 text-sm text-gray-500"
                        layout
                    >
                        {label}
                    </motion.span>
                )}
                <motion.span layout
                    className="relative cursor-pointer"
                    style={{
                        color: isHovered && !expanded ? "#3B82F6" : "#000000",
                        transition: "color 0.3s"
                    }}
                >
                    {value}
                </motion.span>

                <AnimatePresence>
                    {isHovered && !expanded && (
                        <motion.span
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-xs text-gray-500 mt-1 absolute top-8"
                        >
                            {label}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

