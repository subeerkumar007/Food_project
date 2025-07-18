import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../context/CartContext';

// Sample menu data - in a real app, this would come from an API
const menuData = {
  appetizers: [
    {
      id: 1,
      name: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      price: 4.99,
      image: '/images/samosa.jpg',
      category: 'appetizers',
    },
    {
      id: 2,
      name: 'Pakora',
      description: 'Crispy vegetable fritters',
      price: 5.99,
      image: '/images/pakoras.jpg',
      category: 'appetizers',
    },
  ],
  'main-course': [
    {
      id: 3,
      name: 'Butter Chicken',
      description: 'Tender chicken in rich, creamy tomato sauce',
      price: 15.99,
      image: '/images/butter_chicken.jpg',
      category: 'main-course',
    },
    {
      id: 4,
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese marinated in spiced yogurt',
      price: 14.99,
      image: '/images/paneer-tikka.jpg',
      category: 'main-course',
    },
  ],
  desserts: [
    {
      id: 5,
      name: 'Gulab Jamun',
      description: 'Sweet milk dumplings in sugar syrup',
      price: 6.99,
      image: '/images/gulab_jamun.jpg',
      category: 'desserts',
    },
    {
      id: 6,
      name: 'Kheer',
      description: 'Sweet rice pudding with cardamom and nuts',
      price: 5.99,
      image: '/images/kheer.jpg',
      category: 'desserts',
    },
    {
      id: 7,
      name: 'Jalebi',
      description: 'Sweet and crispy jalebi with sugar syrup',
      price: 6.99,
      image: '/images/jalebi.jpg',
      category: 'desserts',
    },
  ],
  beverages: [
    {
      id: 8,
      name: 'Mango Lassi',
      description: 'Sweet yogurt drink with mango',
      price: 4.99,
      image: '/images/Mango-Lassi.jpg',
      category: 'beverages',
    },
    {
      id: 9,
      name: 'Masala Chai',
      description: 'Spiced Indian tea',
      price: 3.99,
      image: '/images/chai.jpg',
      category: 'beverages',
    },
  ],
};

const Menu = () => {
  const { category } = useParams();
  const validCategory = category || 'appetizers';
  const items = menuData[validCategory] || [];
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textTransform: 'capitalize', mb: 4 }}
      >
        {validCategory.replace('-', ' ')}
      </Typography>

      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 2,
                  }}
                >
                  <Typography variant="h6" color="primary">
                    ${item.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {items.length === 0 && (
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
          No items available in this category.
        </Typography>
      )}
    </Container>
  );
};

export default Menu;
