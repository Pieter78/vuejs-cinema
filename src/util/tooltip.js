import { addClass, removeClass } from './helpers';

export default {
  install(Vue) {
    const mouseOutHandler = function mouseOutHandler(event) {
      const span = event.target.parentNode.getElementsByTagName('SPAN')[0];
      removeClass(span, 'tooltip-show');
    };

    const mouseOverHandler = function mouseOverHandler(event) {
      const span = event.target.parentNode.getElementsByTagName('SPAN')[0];
      addClass(span, 'tooltip-show');
    };

    Vue.directive('tooltip', {
      bind(el, binding) {
        const span = document.createElement('SPAN');
        const text = document.createTextNode(`Seats available: ${binding.value.seats}`);
        span.appendChild(text);
        addClass(span, 'tooltip');
        el.appendChild(span);
        const div = el.getElementsByTagName('DIV')[0];
        div.addEventListener('mouseover', mouseOverHandler);
        div.addEventListener('mouseout', mouseOutHandler);
        div.addEventListener('touchstart', mouseOverHandler);
        div.addEventListener('touchend', mouseOutHandler);
      },
      unbind(el) {
        const div = el.getElementsByTagName('DIV')[0];
        div.removeEventListener('mouseover', mouseOverHandler);
        div.removeEventListener('mouseout', mouseOutHandler);
        div.removeEventListener('touchstart', mouseOverHandler);
        div.removeEventListener('touchend', mouseOutHandler);
      },
    });
  },
}
;