import { Property } from "@/types";
import { PropertyCard } from "./property-card";

interface PropertyListProps {
  properties: Property[];
  favorites?: string[];
  onToggleFavorite?: (id: string) => void;
}

export function PropertyList({
  properties,
  favorites = [],
  onToggleFavorite,
}: PropertyListProps) {
  if (properties.length === 0) {
    return (
      <div className="py-12 text-center">
        <h3 className="text-lg font-medium text-muted-foreground">
          No properties found
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Try adjusting your search filters or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          isFavorite={favorites.includes(property.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
