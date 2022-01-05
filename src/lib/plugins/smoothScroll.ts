import SmoothScrollbar from 'smooth-scrollbar'
import type { Data2d } from 'smooth-scrollbar/interfaces'

export function smoothScroll (
  node: HTMLElement,
  options?: { horizontalScroll: boolean }
) {
  if (options?.horizontalScroll) {
    SmoothScrollbar.use(HorizontalScrollPlugin)
  }

  SmoothScrollbar.init(node)

  return {
    destroy () {
      SmoothScrollbar.destroyAll()
    }
  }
}

class HorizontalScrollPlugin extends SmoothScrollbar.ScrollbarPlugin {
  static pluginName = 'horizontalScroll'

  transformDelta (delta: Data2d, fromEvent: Event) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta
    }

    const { x, y } = delta

    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y
    }
  }
}
