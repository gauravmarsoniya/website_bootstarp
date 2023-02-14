import cn from 'classnames';
const Title = ({ className, children, size, marginBottom, standOut }) => {
  const Component = `h${size}`;

  return (
    <Component
      className={cn(className, `mb-${marginBottom}`, {
        [`display-${size}`]: standOut,
      })}
    >
      {children}
    </Component>
  );
};

export default Title;
