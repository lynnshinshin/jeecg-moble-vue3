import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  install(Vue: any) {
    Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
      Vue.component(key, component);
    });
  }
}