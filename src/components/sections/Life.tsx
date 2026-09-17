import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { lifeCategories, type LifeItem } from '@/data/life';

export default function Life() {
  const [activeCategory, setActiveCategory] = useState(lifeCategories[0].id);
  const [selectedItem, setSelectedItem] = useState<LifeItem | null>(null);

  const current = lifeCategories.find((c) => c.id === activeCategory)!;

  return (
    <section className="section-padding relative overflow-hidden border-t border-border-subtle">
      <div className="container-px">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            10 / LIFE
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">LIFE</h2>
          <p className="text-text-secondary text-lg font-light mt-3 max-w-xl">
            我不是只有代码。
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {lifeCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'border-accent text-accent bg-accent/10'
                  : 'border-border-card text-text-tertiary hover:text-text-secondary hover:border-text-tertiary'
              }`}
            >
              {cat.label}
              <span className="ml-2 text-[10px] opacity-50 normal-case tracking-normal">
                {cat.labelCn}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <PhotoGrid items={current.items} onSelect={setSelectedItem} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function PhotoGrid({ items, onSelect }: { items: LifeItem[]; onSelect: (item: LifeItem) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className={`group relative overflow-hidden rounded-xl border border-border-card cursor-pointer ${
            item.type === 'video'
              ? 'col-span-2 row-span-2 aspect-square md:aspect-video'
              : 'aspect-square'
          }`}
          onClick={() => onSelect(item)}
        >
          {/* Media */}
          {item.type === 'photo' ? (
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="relative w-full h-full bg-black/40">
              <video
                src={item.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
              {/* Play indicator */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-transform duration-300 group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Overlay info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-4">
            <h3 className="text-sm md:text-base font-medium text-white mb-0.5">{item.title}</h3>
            {item.description && (
              <p className="text-xs text-white/70 font-light line-clamp-1">{item.description}</p>
            )}
            {item.location && (
              <span className="text-[10px] text-accent tracking-wider uppercase mt-1">{item.location}</span>
            )}
          </div>

          {/* Type badge */}
          {item.type === 'video' && (
            <span className="absolute top-3 right-3 text-[10px] font-medium tracking-wider uppercase bg-accent/90 text-black px-2 py-1 rounded">
              Video
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function Lightbox({ item, onClose }: { item: LifeItem; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white/80 transition-colors flex items-center justify-center z-10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full"
      >
        {item.type === 'photo' ? (
          <img src={item.src} alt={item.title} className="w-full max-h-[75vh] object-contain rounded-lg" />
        ) : (
          <video
            ref={videoRef}
            src={item.src}
            controls
            autoPlay
            playsInline
            className="w-full max-h-[75vh] object-contain rounded-lg"
          />
        )}

        {/* Info */}
        <div className="mt-4 flex flex-col items-center text-center gap-1">
          <h3 className="text-lg font-medium text-text-primary">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-text-secondary font-light">{item.description}</p>
          )}
          <div className="flex items-center gap-3 mt-1">
            {item.date && (
              <span className="text-xs text-text-tertiary tracking-wider">{item.date}</span>
            )}
            {item.location && (
              <>
                <span className="text-text-tertiary">·</span>
                <span className="text-xs text-accent tracking-wider uppercase">{item.location}</span>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
