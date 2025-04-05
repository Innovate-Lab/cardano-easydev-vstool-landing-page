import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { features } from '../../data/features';

export const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(features[0]);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="w-full bg-[#001215] py-8">
                <div className="max-w-[90%] mx-auto">
                    <Tabs.Root
                        className="flex flex-col w-full"
                        defaultValue={features[0].id}
                        onValueChange={(value) => {
                            const feature = features.find(f => f.id === value);
                            if (feature) setSelectedFeature(feature);
                        }}
                    >
                        <Tabs.List className="flex justify-center space-x-4">
                            {features.map((feature) => (
                                <Tabs.Trigger
                                    key={feature.id}
                                    value={feature.id}
                                    className="group flex items-center space-x-3 px-8 py-4 rounded-2xl bg-[#002830] hover:bg-[#003540] data-[state=active]:bg-[#00E5FF] transition-all duration-300"
                                >
                                    <span className="text-[#B4D9E2]/60 group-data-[state=active]:text-[#001215]">
                                        {feature.icon}
                                    </span>
                                    <span className="font-medium text-lg group-data-[state=active]:text-[#001215]">
                                        {feature.title}
                                    </span>
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>
                    </Tabs.Root>
                </div>
            </div>

            <div className="w-full bg-[#001215] py-24">
                <div className="max-w-[90%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-8">
                            <h2 className="text-7xl font-bold leading-tight">
                                {selectedFeature.title}
                            </h2>
                            <p className="text-2xl text-[#B4D9E2]/90 leading-relaxed">
                                {selectedFeature.description}
                            </p>
                        </div>
                        <div className="relative group">
                            {selectedFeature.iframe}
                        </div>
                    </div>
                </div>
            </div>

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