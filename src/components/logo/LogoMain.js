import { styled, useTheme } from '@mui/material/styles';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();
  const Div = styled('div')(() => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  return <Div style={{ color: '' }}>SoftSix</Div>;
};

export default Logo;
