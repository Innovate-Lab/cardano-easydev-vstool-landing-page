export const CTA = () => {
    return (
        <div className="w-full py-32 bg-[#001A1F]">
            <div className="max-w-[90%] mx-auto text-center">
                <h2 className="text-5xl font-bold mb-8">Ready to Start Building?</h2>
                <p className="text-xl text-[#B4D9E2]/90 max-w-3xl mx-auto mb-12">
                    Join thousands of developers building the future of finance on Cardano.
                </p>
                <div className="flex justify-center space-x-6">
                    <button className="px-8 py-4 bg-gradient-to-r from-[#00E5FF] to-[#00FFD1] rounded-xl hover:opacity-90 transition-opacity text-lg font-medium text-[#001215]">
                        Get Started Free
                    </button>
                    <button className="px-8 py-4 bg-[#002830] rounded-xl hover:bg-[#003540] transition-colors text-lg font-medium border border-[#004D59]/30">
                        View Documentation
                    </button>
                </div>
            </div>
        </div>
    );
}; 