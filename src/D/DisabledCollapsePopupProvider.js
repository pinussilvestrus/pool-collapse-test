import { is } from 'bpmn-js/lib/util/ModelUtil';

import { isExpanded } from 'bpmn-js/lib/util/DiUtil';

var REPLACE_WITH_COLLAPSED = 'replace-with-collapsed-pool';

export default function DisabledCollapsePopupProvider(
    popupMenu,
    translate
) {
  popupMenu.registerProvider('bpmn-replace', this);

  this._translate = translate;
}

DisabledCollapsePopupProvider.$inject = [
  'popupMenu',
  'translate'
];

DisabledCollapsePopupProvider.prototype.getPopupMenuEntries = function(
    element
) {
  var translate = this._translate;

  return function(entries) {
    if (isParticipant(element) && isExpanded(element) && hasChildren(element)) {
      entries[REPLACE_WITH_COLLAPSED] = {
        label: translate('Collapsed Pool'),
        subLabel: translate('not possible, remove content to proceed'),
        className: 'bpmn-icon-lane',
        disabled: true
      };
    }

    return entries;
  };
};

// helper /////////////////

function isParticipant(element) {
  return is(element, 'bpmn:Participant');
}

function hasChildren(element) {
  return element.children && element.children.length;
}