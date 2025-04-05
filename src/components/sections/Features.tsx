import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { features } from '../../data/features';

export const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(features[0]);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="w-full mb-32">
            <Tabs.Root
                className="flex flex-col w-full"
                defaultValue={features[0].id}
                onValueChange={(value) => {
                    const feature = features.find(f => f.id === value);
                    if (feature) setSelectedFeature(feature);
                }}
            >
                <Tabs.List className="flex justify-center space-x-4 mb-24">
                    {features.map((feature) => (
                        <Tabs.Trigger
                            key={feature.id}
                            value={feature.id}
                            className="group flex items-center space-x-3 px-8 py-4 rounded-xl bg-[#002830] hover:bg-[#003540] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00E5FF] data-[state=active]:to-[#00FFD1] transition-all duration-300"
                        >
                            <span className="text-[#B4D9E2]/60 group-data-[state=active]:text-white transition-colors">
                                {feature.icon}
                            </span>
                            <span className="font-medium text-lg">{feature.title}</span>
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 px-24">
                    <div className="space-y-8">
                        <h2 className="text-[64px] font-bold leading-tight">{selectedFeature.title}</h2>
                        <p className="text-2xl text-[#B4D9E2]/90 leading-relaxed">{selectedFeature.description}</p>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#00E5FF] to-[#00FFD1] rounded-xl hover:opacity-90 transition-opacity text-[#001215] font-medium text-lg"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Watch Demo</span>
                        </button>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] to-[#00FFD1] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                        <div className="relative bg-[#002830] rounded-2xl aspect-video p-8 flex items-center justify-center border border-[#004D59]/30">
                            <p className="text-[#B4D9E2]/60 text-xl">Feature Preview</p>
                        </div>
                    </div>
                </div>
            </Tabs.Root>

            <Dialog.Root open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-[#001215]/95 backdrop-blur-sm transition-opacity" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] bg-[#002830] rounded-2xl p-6 border border-[#004D59]/30">
                        <div className="aspect-video">
                            <video
                                className="w-full h-full rounded-xl"
                                controls
                                src={selectedFeature.videoUrl}
                            />
                        </div>
                        <Dialog.Close className="absolute -top-12 right-0 text-[#B4D9E2]/80 hover:text-white transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}; 