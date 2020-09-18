import { useState } from 'react';
import { Icon } from '../components/icon';
import { Checkbox, Range } from '../components/fields';

export default function Setting() {
  const [settingActive, setSettingActive] = useState(false);

  return (
    <div className="relative hidden md:flex md:items-center md:justify-center">
      <button
        className={`${
          settingActive ? 'border-teal-400 text-teal-400' : 'border-gray-400'
        } p-2 transition duration-150 ease-in-out bg-transparent border rounded-md focus:outline-none focus:border-teal-400 hover:bg-gray-700 focus:bg-gray-700 focus:text-teal-400`}
        onClick={() => setSettingActive(!settingActive)}
      >
        <Icon icon="cog" className="w-6 h-6" />
      </button>
      <div
        style={{ top: '100%' }}
        className={`${
          settingActive ? 'block' : 'hidden'
        } absolute right-0 z-40 w-64 mt-2 bg-gray-900 rounded-md shadow-teal-lg`}
      >
        <div className="p-4 space-y-3 text-sm text-gray-400">
          <div>
            <Label>Font setting</Label>
            <FieldWrapper>
              <Range id="font-size" label="Font size" />
              <Range id="line-height" label="Line height" />
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
              <Checkbox label="Line number" />
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
