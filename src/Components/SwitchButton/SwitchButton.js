function SwitchButton({ setChecked, checked, setSwitchMode, switchMode }) {
  const handleClick = () => {
    setChecked(!checked);
    setSwitchMode(switchMode === 'dog' ? 'cat' : 'dog');
  };
  return (
    <i
      className={`fa-light fa-shield-${
        checked ? 'dog' : 'cat'
      } text_main_light_color1`}
      onClick={handleClick}
      id="switch_button"
    ></i>
  );
}

export default SwitchButton;
