const ToggleButtonGroup = ({ options, selected, onSelect, clearLabel }) => (
  <div>
    {options.map((option) => (
      <button
        key={option}
        disabled={option === selected}
        onClick={() => onSelect(option)}
      >
        {option}
      </button>
    ))}
    {clearLabel && (
      <button disabled={selected === null} onClick={() => onSelect(null)}>
        {clearLabel}
      </button>
    )}
  </div>
);

export default ToggleButtonGroup;
