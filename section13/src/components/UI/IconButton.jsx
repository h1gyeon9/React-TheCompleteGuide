import { memo } from 'react';
import { log } from '../../log.js';

const IconButton = memo(function IconButton({ children, icon, ...props }) {        //Counter Component가 실행될 때 handleDecrement/Increment 함수가 다시 만들어짐 -> prop의 변화 -> Callback써서 재생성 방지
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;