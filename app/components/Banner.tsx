import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function BottomBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                Limited Time
              </Badge>
              <span className="text-sm font-medium">50% OFF</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Don't Miss Out!</h3>
            <p className="text-blue-100 text-sm">
              Get instant access to our premium product
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="text-center">
              <div className="text-2xl font-bold">$47</div>
              <div className="text-xs text-blue-200 line-through">$97</div>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
