import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function BottomBanner() {
  return (
    <a
      href="https://fa0d97xm6mbdlx3doazh4dkbw6.hop.clickbank.net"
      target="_blank"
    >
      <div className="fixed bottom-0 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  Cut down your bills
                </Badge>
                <span className="text-sm font-medium">
                  Slashes Electric Bills by 90%
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">
                Slashes Electric Bills by 90% Using $12 Hardware Store Parts
              </h3>
              <p className="text-blue-100 text-sm">
                60-Day Money Back Guarantee
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold">Only $39</div>
              </div>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default BottomBanner;
