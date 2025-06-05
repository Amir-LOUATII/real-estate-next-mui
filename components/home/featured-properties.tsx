import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { PropertyList } from "./property-list";
import { getProperties } from "@/lib/data";

export default function FeaturedProperties() {
  const featuredProperties = getProperties().slice(0, 4);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <p className="text-muted-foreground mt-2">
              Explore our handpicked selection of outstanding properties
            </p>
          </div>

          <Link href="/properties">
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <PropertyList properties={featuredProperties} />
      </div>
    </section>
  );
}
