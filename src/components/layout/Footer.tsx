export const Footer = () => {
    return (
        <footer className="w-full py-16 border-t border-[#004D59]/30">
            <div className="max-w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="font-bold text-xl mb-6">Cardano EasyDev VsTool</h3>
                        <p className="text-[#B4D9E2]/90">Building the future of Cardano development tools.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-[#B4D9E2]/90">
                            <li><a href="https://innolab.gitbook.io/cardano-easydev-vs-tool/features" target="_blank" rel="noopener noreferrer">Features</a></li>
                            <li><a href="https://innolab.gitbook.io/cardano-easydev-vs-tool" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                            <li><a href="https://innolab.gitbook.io/cardano-easydev-vs-tool/roadmap" target="_blank" rel="noopener noreferrer">Roadmap</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-[#B4D9E2]/90">
                            <li><a href="https://innolab.gitbook.io/cardano-easydev-vs-tool/user-tutorial-example" target="_blank" rel="noopener noreferrer">Tutorials</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-[#B4D9E2]/90">
                            <li><a href="https://innolab.gitbook.io/cardano-easydev-vs-tool/about" target="_blank" rel="noopener noreferrer">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-[#004D59]/30 text-center text-[#B4D9E2]/90">
                    <p>&copy; 2025 Inno Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}; 