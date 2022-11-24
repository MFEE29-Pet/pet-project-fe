import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import CartInfoContext from '../contexts/CartInfoContext';

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
  const { cartItem } = useContext(CartInfoContext);
  // console.log(cartAmount);
  return (
    <IconButton aria-label="cart">
      <StyledBadge
        badgeContent={cartItem.totalAmount}
        mode={mode}
        color="secondary"
      >
        <ShoppingCartOutlinedIcon />
      </StyledBadge>
    </IconButton>
  );
}
