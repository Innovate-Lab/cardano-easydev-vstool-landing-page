import { benefits } from '../../data/benefits';

export const Benefits = () => {
    return (
        <div className="w-full py-32 bg-[#001A1F]">
            <div className="max-w-[90%] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold mb-6">Why use Cardano EasyDev VsTool?</h2>
                    <p className="text-xl text-[#B4D9E2]/90 max-w-3xl mx-auto">
                        Our comprehensive suite of development tools helps you build, test, and deploy Cardano applications with confidence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-[#002830] hover:bg-[#003540] transition-colors group border border-[#004D59]/30">
                            <div className="text-[#00E5FF] group-hover:text-[#00FFD1] transition-colors mb-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                            <p className="text-[#B4D9E2]/90">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 