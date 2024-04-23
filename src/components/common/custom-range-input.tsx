const CustomRangeInput: React.FC = () => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      value={30}
      className="w-full"
      readOnly
    />
  );
};
export default CustomRangeInput;
