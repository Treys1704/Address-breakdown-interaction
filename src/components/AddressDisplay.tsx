import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { ADDRESS_DATA, PREVIEW_IMAGES } from '../constants'
import { AddressItem } from './AddressItem'
import React from 'react'

export default function AddressDisplay() {
    const [expanded, setExpanded] = useState(false)
    const addressItems = [
        { key: 'street', label: 'STREET', value: ADDRESS_DATA.street },
        { key: 'city', label: 'CITY', value: ADDRESS_DATA.city },
        { key: 'state', label: 'STATE', value: ADDRESS_DATA.state },
        { key: 'zip', label: 'ZIP', value: ADDRESS_DATA.zip },
        { key: 'country', label: 'COUNTRY', value: ADDRESS_DATA.country }
    ]

    return (
        <div className="max-w-2xl mx-auto">
            <motion.div
                layout
                className={`space-y-2 ${expanded ? 'text-left' : 'text-center'}`}
            >
                <AnimatePresence mode={"popLayout"}>
                    {expanded ? (
                        <motion.div className="space-y-4">
                            {addressItems.map((item) => (
                                <AddressItem
                                    key={item.key}
                                    label={item.label}
                                    value={item.value}
                                    image={PREVIEW_IMAGES[item.key]}
                                    expanded={expanded}
                                    layoutId={item.key}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            className="inline-flex items-center gap-1"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            {addressItems.map((item, index) => (
                                <React.Fragment key={item.key}>
                                    <AddressItem
                                        label={item.label}
                                        value={item.value}
                                        image={PREVIEW_IMAGES[item.key]}
                                        expanded={expanded}
                                        layoutId={item.key}
                                    />
                                    {index < addressItems.length - 1 && <motion.span layout>,</motion.span>}
                                </React.Fragment>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <motion.div
                className="mt-20 flex justify-center"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
            >
                <motion.button
                    layout
                    onClick={() => setExpanded(!expanded)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <MapPin className="w-5 h-5"/>
                </motion.button>
            </motion.div>
        </div>
    )
}

