export function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 flex-shrink-0 bg-black">
      <span className="text-white text-[15px] font-semibold">{time}</span>
      <div className="flex items-center gap-1.5">
        {/* Signal bars */}
        <div className="flex items-end gap-[2px]">
          {[3, 5, 7, 9].map((h, i) => (
            <div key={i} className="w-[3px] bg-white rounded-sm" style={{ height: h }} />
          ))}
        </div>
        {/* WiFi */}
        <svg width="15" height="12" viewBox="0 0 15 12" fill="white">
          <path d="M7.5 10.5a1 1 0 100-2 1 1 0 000 2z" />
          <path d="M4.6 7.8a4.1 4.1 0 015.8 0" strokeWidth="1.2" stroke="white" fill="none" strokeLinecap="round" />
          <path d="M2 5.2a7.5 7.5 0 0111 0" strokeWidth="1.2" stroke="white" fill="none" strokeLinecap="round" />
        </svg>
        {/* Battery */}
        <div className="flex items-center gap-[2px]">
          <div className="w-[22px] h-[11px] border border-white/60 rounded-[2px] p-[1.5px]">
            <div className="h-full w-[75%] bg-white rounded-[1px]" />
          </div>
          <div className="w-[2px] h-[5px] bg-white/60 rounded-r-sm" />
        </div>
      </div>
    </div>
  );
}
