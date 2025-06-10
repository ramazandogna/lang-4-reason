import './hamburger.css';

type HamburgerIconProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  className?: string;
};

function HamburgerIcon({
  checked,
  onChange,
  id = 'hamburger-toggle',
  className = ''
}: HamburgerIconProps) {
  return (
    <label className={`bar ${className}`} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </label>
  );
}

export default HamburgerIcon;
