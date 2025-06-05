import { Link } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Start your property search today and discover the perfect place to
          call home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/properties">
            <Button variant="secondary" size="lg">
              Browse Properties
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
