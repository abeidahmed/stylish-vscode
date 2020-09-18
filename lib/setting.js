import { useState, useContext, useRef } from 'react';
import { Context } from '../store';
import { useOnOutsideClick } from '../utils/on-outside-click';
import { Icon } from '../components/icon';
import { Checkbox, Range } from '../components/fields';

export default function Setting() {
  const settingRef = useRef(null);
  const [settingActive, setSettingActive] = useState(false);
  const [{ fontSize, lineHeight, showLineNumber }, dispatch] = useContext(
    Context
  );

  useOnOutsideClick(settingRef, () => setSettingActive(false));

  return (
    <div
      ref={settingRef}
      className="relative hidden md:flex md:items-center md:justify-center"
    >
      <button
        className={`${
          settingActive ? 'border-teal-400 text-teal-400' : 'border-gray-400'
        } p-2 transition duration-150 ease-in-out bg-transparent border rounded-md focus:outline-none focus:border-teal-400 hover:bg-gray-700 focus:bg-gray-700 focus:text-teal-400`}
        aria-haspopup="true"
        aria-expanded={settingActive ? 'true' : 'false'}
        onClick={() => setSettingActive(!settingActive)}
      >
        <Icon icon="cog" className="w-6 h-6" />
      </button>
      <div
        style={{ top: '100%' }}
        className={`${
          settingActive ? 'block' : 'hidden'
        } absolute right-0 z-40 w-64 mt-2 bg-gray-900 rounded-md shadow-teal-lg`}
        role="dialog"
        aria-labelledby="title"
        aria-describedby="description"
      >
        <h3 id="title" className="sr-only">
          Change settings
        </h3>
        <p id="description" className="sr-only">
          Change font, line-height, filter based on dark theme, light theme
        </p>
        <div className="p-4 space-y-3 text-sm text-gray-400">
          <div>
            <Label>Font setting</Label>
            <FieldWrapper>
              <Range
                id="font-size"
                label="Font size"
                min="12"
                max="20"
                step="2"
                value={fontSize}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_FONT_SIZE',
                    fontSize: e.target.value,
                  })
                }
              />
              <Range
                id="line-height"
                label="Line height"
                min="1"
                max="2"
                step="0.25"
                value={lineHeight}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_LINE_HEIGHT',
                    lineHeight: e.target.value,
                  })
                }
              />
            </FieldWrapper>
          </div>
          <div>
            <Label>Theme filter</Label>
            <FieldWrapper>
              <Checkbox label="Dark theme" />
              <Checkbox label="Light theme" />
            </FieldWrapper>
          </div>
          <div>
            <Label>Misc</Label>
            <FieldWrapper>
              <Checkbox
                label="Line number"
                checked={showLineNumber}
                onChange={(e) =>
                  dispatch({
                    type: 'TOGGLE_LINE_NUMBER',
                    showLineNumber: e.target.checked,
                  })
                }
              />
            </FieldWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldWrapper({ children }) {
  return <div className="mt-2 space-y-1">{children}</div>;
}

function Label({ children }) {
  return (
    <p className="font-medium leading-5 tracking-wide text-gray-200">
      {children}
    </p>
  );
}