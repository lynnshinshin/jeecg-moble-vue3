import { useSystemStore } from '@/stores';
import { watch } from 'vue';
const useSystem = useSystemStore()
export function useThemeChange(fn: () => void) {
  return watch(() => useSystem.theme, () => {
    fn()
  })
}