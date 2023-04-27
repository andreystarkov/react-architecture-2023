import { ButtonComponent, Icon } from './ButtonsStyles'
import { icons } from 'theme'

export type ButtonProps = {
  children: string | JSX.Element;
  className?: string;
  icon?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button ({ children, icon, className, onClick }: ButtonProps) {
  return (
    <ButtonComponent
      className={className}
      onClick={onClick}>
      {/* @ts-ignore */}
      {icon && icons[icon] && <Icon src={icons[icon]} />}
      {children}
    </ButtonComponent>
  )
}