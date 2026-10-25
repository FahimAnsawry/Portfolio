import antigravityIconSrc from '../../assets/antigravity-icon.png';

// Decorative: always rendered beside a visible "Antigravity" label
export default function AntigravityIcon({ size = 24, style, ...rest }) {
  return (
    <img
      src={antigravityIconSrc}
      width={size}
      height={size}
      alt=""
      style={{ objectFit: 'contain', display: 'inline-block', ...style }}
      {...rest}
    />
  );
}
