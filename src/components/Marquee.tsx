const items = [
  'COMPUTER VISION',
  'GENERATIVE AI',
  'RAG PIPELINES',
  'YOLOv8',
  'FASTAPI',
  'REACT',
  'NEO4J',
  'TENSORFLOW',
  'BLOCKCHAIN',
  'OPENCV',
  'NODE.JS',
  'AUTOMATION',
]

export function Marquee() {
  return (
    <div className="border-y border-border bg-secondary/40 py-5 overflow-hidden marquee-mask">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {items.map((item) => (
              <span
                key={`${dup}-${item}`}
                className="font-display text-3xl md:text-5xl tracking-tight px-6 md:px-10 text-muted-foreground flex items-center gap-6 md:gap-10"
              >
                {item}
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
