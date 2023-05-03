import pdfFile from '../assets/Steven_Li_CV_NL.pdf';

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
        return 'text-sm h-10 px-4';
      case 'medium':
        return 'text-base h-10 px-7';
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
  const styles = `flex items-center justify-center rounded-md transition duration-300 ease-in ${getVariant()} ${getSize()} ${className}`;

  // Return different types of buttons depending on action of button
  if (type === 'external') {
    return (
      <a href={link} className={styles} target="_blank">
        {children}
      </a>
    );
  }

  if (type === 'download') {
    return (
      <a href={pdfFile} download="Steven Li CV" className={styles}>
        {children}
      </a>
    );
  }

  if (type === 'internal') {
    return (
      <a href={link} className={styles}>
        {children}
      </a>
    );
  }

  if (type === 'mail') {
    return (
      <a
        href="mailto:stevenli.inbox@gmail.com"
        className={styles}
        target="_blank"
      >
        {children}
      </a>
    );
  }
}

export { Button };
