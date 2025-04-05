export const Footer = () => {
    return (
        <footer className="w-full py-16 border-t border-[#004D59]/30">
            <div className="max-w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="font-bold text-xl mb-6">EasyDev</h3>
                        <p className="text-[#B4D9E2]/90">Building the future of Cardano development tools.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-[#B4D9E2]/90">
                            <li>Features</li>
                            <li>Documentation</li>
                            <li>Pricing</li>
                            <li>Roadmap</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-[#B4D9E2]/90">
                            <li>Blog</li>
                            <li>Tutorials</li>
                            <li>Support</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-[#B4D9E2]/90">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Legal</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-[#004D59]/30 text-center text-[#B4D9E2]/90">
                    <p>&copy; 2024 EasyDev. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}; 