const GlowingCircles = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top-left orb */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-30 animate-[spin_25s_linear_infinite]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.6), hsl(270 80% 60% / 0.4), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Mid-right orb */}
      <div
        className="absolute top-1/2 -right-24 w-[400px] h-[400px] rounded-full opacity-15 dark:opacity-25 animate-[spin_30s_linear_infinite_reverse]"
        style={{
          background: 'radial-gradient(circle, hsl(330 80% 60% / 0.5), hsl(var(--primary) / 0.3), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Bottom-center orb */}
      <div
        className="absolute -bottom-40 left-1/3 w-[350px] h-[350px] rounded-full opacity-10 dark:opacity-20 animate-[spin_35s_linear_infinite]"
        style={{
          background: 'radial-gradient(circle, hsl(200 80% 60% / 0.4), hsl(var(--primary) / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
};

export default GlowingCircles;
