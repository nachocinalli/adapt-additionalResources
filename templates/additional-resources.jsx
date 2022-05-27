import React from 'react';
import { html, classes, compile } from 'core/js/reactHelpers';
import a11y from 'core/js/a11y';
export default function AdditionalResource(props) {

  const { _additionalResources, _isComplete } = props;

  return (
    <div className={classes([
      'additionalresource',
      _additionalResources._showOnModelCompleted && !_isComplete ? 'is-hidden' : '',
      _additionalResources._classes

    ])}>
      {_additionalResources.text &&
      <div className='additionalresource__text'>
        {html(compile(_additionalResources.text))}
      </div>
      }
      <div className='additionalresource__items'>

        {_additionalResources._items.length > 0 &&
        <ul>
          {
            _additionalResources._items.map(({ title, label, _url, _target, filename, _forceDownload, _classes }, index) =>
              <li key={index}>
                <a
                  href = {_url}
                  target = {_target}
                  className = {classes(['js-resource-link', _classes])}
                  role = 'link'
                  data-index={index}
                  download = {_forceDownload ? filename : false}
                  aria-label = {label || a11y.normalize(title)}
                  dangerouslySetInnerHTML={{ __html: compile(title) }}
                >
                </a>
              </li>
            )}
        </ul>
        }
      </div>

    </div>
  );
}
