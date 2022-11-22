import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ProductDetailContext from '../../../contexts/ProductDetailContext';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

const StyledBadge = styled(Badge)((props) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid #fff`,
    padding: '0 4px',
    background: `${props.mode === 'dog' ? '#ea5514' : '#4c748e'}`,
  },
}));

export default function CustomizedBadges() {
  const { mode } = useContext(SwitchButtonContext);
  const { cartAmount } = useContext(ProductDetailContext);
  // console.log(cartAmount);
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartAmount} mode={mode} color="secondary">
        <ShoppingCartOutlinedIcon />
      </StyledBadge>
    </IconButton>
  );
}
