// Default button
function Button({
  type = 'external',
  size = 'medium',
  variant = 'primary',
  children,
  link = '',
  className,
}) {
  // Add styles based on selected size
  const getSize = () => {
    switch (size) {
      case 'small':
        return '';
      case 'medium':
        return 'h-10 px-7';
      case 'large':
        return 'h-14 px-10';
      default:
        return '';
    }
  };

  // Add styles based on selected variant
  const getVariant = () => {
    switch (variant) {
      case 'primary':
        return 'text-neutral-100 bg-teal-900 hover:bg-teal-700 focus:bg-teal-700 shadow hover:shadow-lg focus:shadow-lg';
      case 'secondary':
        return 'text-teal-900 bg-neutral-100 hover:bg-neutral-300 focus:bg-neutral-300 shadow hover:shadow-lg focus:shadow-lg';
      default:
        return '';
    }
  };

  // Put all styles in a variable
  const styles = `rounded-md transition duration-300 ease-in ${getVariant()} ${getSize()} ${className}`;

  // Return different types of buttons depending on action of button
  if (type === 'external') {
    return (
      <a href={link}>
        <button className={styles}>
          <span className="truncate">{children}</span>
        </button>
      </a>
    );
  }

  if (type === 'download') {
    return (
      <a href={link} download>
        <button className={styles}>
          <span className="truncate">{children}</span>
        </button>
      </a>
    );
  }
}

export { Button };
