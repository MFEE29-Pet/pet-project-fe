import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ProductDetailContext from '../../../contexts/ProductDetailContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid #fff`,
    padding: '0 4px',
    background:'#ea5514'
  },
}));

export default function CustomizedBadges() {
  const { amount, setAmount, cartAmount } = useContext(ProductDetailContext);
  console.log(cartAmount);
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartAmount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
