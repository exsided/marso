export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, binding) {
      el.clickOutsideEvent = (event: Event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };
      setTimeout(() => document.addEventListener('click', el.clickOutsideEvent));
    },
    unmounted(el) {
      document.removeEventListener('click', el.clickOutsideEvent);
    },
  });
});
