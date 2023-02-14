import cn from 'classnames';
const Paragraph = ({ className, children, marginBottom, standOut }) => {
  return (
    <p
      className={cn(className, 'text-muted', `mb-${marginBottom}`, {
        lead: standOut,
      })}
    >
      {children}
    </p>
  );
};
export default Paragraph;
