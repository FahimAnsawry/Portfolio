import antigravityIconSrc from '../../assets/antigravity-icon.png';

export default function AntigravityIcon({ size = 24, ...rest }) {
  return (
    <img
      src={antigravityIconSrc}
      width={size}
      height={size}
      alt="Antigravity"
      style={{ objectFit: 'contain', display: 'inline-block' }}
      {...rest}
    />
  );
}
