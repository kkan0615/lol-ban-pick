export interface DefaultFilterOption {
  limit: number
  offset: number
  sort?: string | Array<string>
  minPrice?: number
  maxPrice?: number
  maxRating?: number
  productName?: string
}
