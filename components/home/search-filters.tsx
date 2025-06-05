"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { PropertyFilterOptions } from "@/types";

export function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState<PropertyFilterOptions>({
    minPrice: 0,
    maxPrice: 3000000,
    bedrooms: undefined,
    bathrooms: undefined,
    propertyType: undefined,
    location: searchParams.get("location") || undefined,
  });

  const [priceRange, setPriceRange] = useState([0, 3000000]);

  const handleFilterChange = (key: keyof PropertyFilterOptions, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange(values);
    setFilters((prev) => ({
      ...prev,
      minPrice: values[0],
      maxPrice: values[1],
    }));
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (filters.location) params.append("location", filters.location);
    if (filters.minPrice) params.append("minPrice", filters.minPrice.toString());
    if (filters.maxPrice) params.append("maxPrice", filters.maxPrice.toString());
    if (filters.bedrooms) params.append("bedrooms", filters.bedrooms.toString());
    if (filters.bathrooms) params.append("bathrooms", filters.bathrooms.toString());
    if (filters.propertyType) params.append("type", filters.propertyType);
    
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by location..."
          className="pl-9"
          value={filters.location || ""}
          onChange={(e) => handleFilterChange("location", e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-lg">
            <DrawerHeader>
              <DrawerTitle>Filter Properties</DrawerTitle>
              <DrawerDescription>
                Adjust the filters to find your perfect property
              </DrawerDescription>
            </DrawerHeader>
            
            <div className="p-4 pb-0">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="price-range">Price Range</Label>
                  <div className="pt-2">
                    <Slider
                      id="price-range"
                      defaultValue={[0, 3000000]}
                      max={3000000}
                      step={50000}
                      value={priceRange}
                      onValueChange={handlePriceRangeChange}
                      className="py-2"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {formatPrice(priceRange[0])}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {formatPrice(priceRange[1])}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="property-type">Property Type</Label>
                  <Select
                    value={filters.propertyType}
                    onValueChange={(value) => handleFilterChange("propertyType", value)}
                  >
                    <SelectTrigger id="property-type">
                      <SelectValue placeholder="Any type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Select
                      value={filters.bedrooms?.toString()}
                      onValueChange={(value) => 
                        handleFilterChange("bedrooms", value ? parseInt(value) : undefined)
                      }
                    >
                      <SelectTrigger id="bedrooms">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Select
                      value={filters.bathrooms?.toString()}
                      onValueChange={(value) => 
                        handleFilterChange("bathrooms", value ? parseInt(value) : undefined)
                      }
                    >
                      <SelectTrigger id="bathrooms">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            
            <DrawerFooter>
              <Button onClick={handleSearch}>Apply Filters</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      
      <Button onClick={handleSearch}>
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </div>
  );
}