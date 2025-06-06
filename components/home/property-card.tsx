"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Bed, Bath, Square, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Property } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function PropertyCard({
  property,
  isFavorite = false,
  onToggleFavorite,
}: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(property.id);
    }
  };

  return (
    <Link href={`/properties/${property.id}`}>
      <Card
        className="property-card pt-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute top-2 right-2 rounded-full bg-background/80 backdrop-blur-sm",
              isFavorite
                ? "text-red-500 hover:text-red-600"
                : "text-muted-foreground hover:text-primary"
            )}
            onClick={handleFavoriteClick}
          >
            <Heart
              className={cn("h-5 w-5", isFavorite ? "fill-current" : "")}
            />
            <span className="sr-only">Add to favorites</span>
          </Button>

          <div className="absolute bottom-2 left-2 bg-secondary px-2 py-1 rounded-md  text-sm font-medium ">
            {formatCurrency(property.price)}
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="text-lg font-semibold line-clamp-1">
            {property.title}
          </h3>

          <div className="flex items-center mt-1 text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {property.description}
          </p>
        </CardContent>

        <CardFooter className="p-4 pt-0 grid grid-cols-3 gap-2 border-t">
          <div className="flex flex-col items-center justify-center">
            <Bed className="h-4 w-4 mb-1 text-muted-foreground" />
            <span className="text-sm">
              {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Bath className="h-4 w-4 mb-1 text-muted-foreground" />
            <span className="text-sm">
              {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Square className="h-4 w-4 mb-1 text-muted-foreground" />
            <span className="text-sm">{property.area} sq ft</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
