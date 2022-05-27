import { templates } from 'core/js/reactHelpers';
import React from 'react';
import ReactDOM from 'react-dom';
class AdditionalResourcesView extends Backbone.View {

  className() {
    const classes = 'additionalresources__extension';

    return classes;
  }

  initialize() {

    this.render();
    this.listenTo(this.model, 'all', this.render);
  }

  render() {
    const additionalResources = this.model.get('_additionalResources');
    const isComplete = this.model.get('_isComplete');
    if (additionalResources._showOnModelCompleted && !isComplete) return;

    const props = { ...this.model.toJSON() };
    const Template = templates[this.constructor.template.replace('.jsx', '')];
    ReactDOM.render(<Template {...props} />, this.el);
  }

}
AdditionalResourcesView.template = 'additional-resources';

export default AdditionalResourcesView;
