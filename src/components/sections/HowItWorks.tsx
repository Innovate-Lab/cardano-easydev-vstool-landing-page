import { processSteps } from '../../data/process';

export const HowItWorks = () => {
    return (
        <div className="w-full py-32">
            <div className="max-w-[90%] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold mb-6">How It Works</h2>
                    <p className="text-xl text-[#B4D9E2]/90 max-w-3xl mx-auto">
                        Get started with Cardano EasyDev VsTool in three simple steps.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="text-8xl font-bold text-[#004D59]/40 absolute -top-10 left-0">
                                {step.number}
                            </div>
                            <div className="pt-12">
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-[#B4D9E2]/90">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 