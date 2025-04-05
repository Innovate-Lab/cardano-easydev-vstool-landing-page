export const Background = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 bg-[#002025]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '300px 300px'
                }}
            />
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[#004D59]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-[#004D59]/20 rounded-full blur-3xl" />
        </div>
    );
}; 