import { Check } from "lucide-react";
import React from "react";

export default function FeatureSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose EstateHub?</h2>
          <p className="text-muted-foreground">
            {
              "We're committed to helping you find the perfect property with a seamless and enjoyable experience."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Curated Properties</h3>
            <p className="text-muted-foreground">
              We carefully select each property to ensure quality and value for
              our clients.
            </p>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-muted-foreground">
              Our team of real estate professionals is always available to
              assist you throughout your journey.
            </p>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
            <p className="text-muted-foreground">
              We believe in full transparency from search to closing, with no
              hidden fees or surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
