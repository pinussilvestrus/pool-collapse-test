import CollapsePopupProvider from './CollapsePopupProvider';

const module = {
  __depends__: ['popupMenu', 'bpmnReplace'],
  __init__: ['collapsePopupProvider'],
  collapsePopupProvider: ['type', CollapsePopupProvider]
};

export default {
  key: 'B1',
  modules: [module]
};
