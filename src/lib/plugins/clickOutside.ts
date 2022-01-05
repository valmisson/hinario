export function clickOutside (node: HTMLElement, callback: () => void) {
  const handle = (event: Event) => {
    if (!node.contains(event.target as Node)) callback()
  }

  document.documentElement.addEventListener('click', handle)

  return {
    update (newCallback: () => void) {
      callback = newCallback
    },
    destroy () {
      document.documentElement.removeEventListener('clcik', handle)
    }
  }
}
