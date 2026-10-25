import tanstackIconSrc from '../../assets/tanstack-icon.png';

// Decorative: always rendered beside a visible "TanStack Router" label
export default function TanstackIcon({ size = 24, style, ...rest }) {
  return (
    <img
      src={tanstackIconSrc}
      width={size}
      height={size}
      alt=""
      style={{ objectFit: 'contain', display: 'inline-block', ...style }}
      {...rest}
    />
  );
}
