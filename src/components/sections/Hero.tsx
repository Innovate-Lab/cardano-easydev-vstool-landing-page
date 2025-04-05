export const Hero = () => {
    return (
        <div className="w-full pt-32 pb-32">
            <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-7xl font-bold">
                        Cardano EasyDev
                    </h1>
                    <p className="text-2xl text-[#B4D9E2]/90 leading-relaxed">
                        The complete development toolkit for building, testing, and deploying Cardano applications with ease
                    </p>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-[#002830] rounded-xl hover:bg-[#003540] transition-colors font-medium border border-[#004D59]/30" onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=inno-labs.cardano-easydev-vstool', '_blank')}>
                            Download
                        </button>
                    </div>
                </div>
                <div className="relative aspect-video">
                    <img src="/images/banner.jpg" alt="Cardano EasyDev VsTool" className="w-full h-full rounded-xl" />
                </div>
            </div>
        </div>
    );
};