import cn from 'classnames';
const Paragraph = ({ className, children, marginBottom, standOut, muted }) => {
  return (
    <p
      className={cn(className, {
        muted: 'text-muted',
        [`mb-${marginBottom}`]: marginBottom,
        lead: standOut,
      })}
    >
      {children}
    </p>
  );
};
export default Paragraph;
