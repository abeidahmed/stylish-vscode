export function Range({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block leading-5">
        {label}
      </label>
      <input type="range" id={id} className="slider" {...props} />
    </div>
  );
}
