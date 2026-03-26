import type { Location } from "./location"

declare module "@/data/locations.json" {
  const value: Location[]
  export default value
}
