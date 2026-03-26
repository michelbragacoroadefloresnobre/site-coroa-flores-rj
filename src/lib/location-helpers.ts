import { readFileSync } from "fs"
import { join } from "path"
import type { Location } from "@/types/location"

const locations: Location[] = JSON.parse(
  readFileSync(join(process.cwd(), "src/data/locations.json"), "utf-8")
)

const locationsBySlug = new Map(locations.map((loc) => [loc.slug, loc]))

export function getAllLocations(): Location[] {
  return locations
}

export function getLocationBySlug(slug: string): Location | undefined {
  return locationsBySlug.get(slug)
}

export function getLocationsByCity(city: string): Location[] {
  return locations.filter((loc) => loc.city === city)
}

export function getSiblingLocations(
  location: Location,
  limit = 6
): Location[] {
  return locations
    .filter((loc) => loc.city === location.city && loc.slug !== location.slug)
    .slice(0, limit)
}

export function getAllSlugs(): string[] {
  return locations.map((loc) => loc.slug)
}
