export interface VuedraggableChangeEvent<T> {
  moved: {
    element: T
    newIndex: number
    oldIndex: number
  }
}
