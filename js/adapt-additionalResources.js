import Adapt from 'core/js/adapt';
import AdditionalResourcesView from './additionalResourcesView';

class AdditionalResources extends Backbone.Controller {

  initialize() {
    this.listenTo(Adapt, {
      'blockView:postRender': this.onRender,
      'componentView:postRender': this.onRender
    });
  }

  onRender (view) {

    const model = view.model;
    if (!this.checkIsEnabled(model)) {
      return;
    }

    const additionalResourcesView = new AdditionalResourcesView({ model: model });

    const $insertElement = view.$el;

    if ($insertElement.find('.additionalresources__extension').length > 0) return;

    const additionalResourcesModel = model.get('_additionalResources');
    if (additionalResourcesModel._appendTo === 'top') {
      $insertElement.prepend(additionalResourcesView.el).addClass('has-additionalresources');
    } else {
      $insertElement.append(additionalResourcesView.el).addClass('has-additionalresources');
    }

  }

  checkIsEnabled(model) {
    const _model = model.get('_additionalResources');
    if (!_model || !_model._isEnabled) return false;
    return true;
  }
}

export default (Adapt.additionalResources = new AdditionalResources());
