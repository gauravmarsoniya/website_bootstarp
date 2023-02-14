import cn from 'classnames';
const Section = ({ children, className, marginBottom, ...rest }) => {
  return (
    <setion
      className={cn(className, 'd-block', {
        [`mb-${marginBottom}`]: marginBottom,
      })}
      {...rest}
    >
      {children}
    </setion>
  );
};

export default Section;
