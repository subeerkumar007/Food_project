import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChatBot from './ChatBot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../index.css';

const featuredItems = [
  {
    id: 1,
    name: 'Butter Chicken',
    description: 'Tender chicken in rich, creamy tomato sauce',
    image: "/images/butter_chicken.jpg",
    price: '$15.99'
  },
  {
    id: 2,
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in spiced yogurt',
    image: "/images/paneer-tikka.jpg",
    price: '$14.99'
  },
  {
    id: 3,
    name: 'Biryani',
    description: 'Fragrant basmati rice cooked with aromatic spices',
    image: "/images/Veg_biriyani.jpg",
    price: '$16.99'
  }
];

const locations = [
  {
    id: 1,
    name: 'DOWNTOWN',
    address: '123 Main Street',
    city: 'City, State 12345',
    phone: '(123) 456-7890',
    hours: 'Mon-Sun 11am-10pm'
  },
  {
    id: 2,
    name: 'RIVERFRONT',
    address: '456 River Road',
    city: 'City, State 12345',
    phone: '(123) 456-7891',
    hours: 'Mon-Sun 11am-10pm'
  },
  {
    id: 3,
    name: 'HILLSIDE',
    address: '789 Mountain View',
    city: 'City, State 12345',
    phone: '(123) 456-7892',
    hours: 'Mon-Sun 11am-10pm'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      className="home-page"
      sx={{
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Top Bar */}
      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          py: 1,
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography variant="body2">
          NOW OPEN IN NEW LOCATION - COME VISIT US!
        </Typography>
      </Box>

      {/* Hero Section with Video Background */}
      <Box className="video-container">
        {/* Video Background */}
        <Box className="video-overlay">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/videos/Cinematic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        {/* Hero Content */}
        <Container className="video-content">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className="flowing-text"
            sx={{
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.2,
            }}
          >
            <span>EXCEPTIONAL</span>
            <span>DINING</span>
            <span>EXPERIENCE</span>
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            className="flowing-text"
            sx={{
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            <span>Discover our carefully crafted menu featuring</span>
            <span>the finest ingredients and innovative flavors</span>
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className="flowing-text"
            sx={{
              mt: 2,
              backgroundColor: '#d4af37',
              color: '#000',
              '&:hover': {
                backgroundColor: '#000',
                color: '#fff',
              },
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              alignSelf: 'flex-start',
              fontSize: '1.1rem',
              textTransform: 'none',
            }}
            onClick={() => navigate('/menu')}
          >
            <span>VIEW OUR MENU</span>
          </Button>
        </Container>
      </Box>

      {/* Rest of the sections with white background */}
      <Box sx={{ bgcolor: '#fff', position: 'relative', zIndex: 1 }}>
        {/* Steak Feature Section */}
        <Box
          ref={(el) => (sectionRefs.current[0] = el)}
          className="section-fade-in"
          sx={{ py: 6 }}
        >
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    height: '350px',
                    width: '80%',
                    margin: '0 auto',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    '&:hover': {
                      '& img': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <img
                    src="/images/inside_old.jpg"
                    alt="Restaurant Interior"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  className="flowing-text"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                    mb: 3,
                    fontFamily: "'Brush Script MT', cursive",
                    color: '#000',
                  }}
                >
                  <span>STEAK HAPPENS,</span>
                  <br />
                  <span>FRITES FOLLOW</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    mb: 2,
                    color: '#333',
                  }}
                >
                  Discover <strong>SWAGAT FOODS</strong>, the newest addition to the city's dining scene.
                  As a <strong>premium restaurant</strong> specializing in authentic Indian cuisine, we provide a
                  <strong> unique experience</strong> with an incredible ambiance.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    color: '#333',
                  }}
                >
                  Ideal for a business lunch or a casual gathering with friends and family,
                  <strong> SWAGAT FOODS</strong> pairs <strong>exceptional cuisine</strong> with stunning flavors.
                  Join us at this <strong>new restaurant</strong> and indulge in unforgettable tastes.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* About Section */}
        <Box
          ref={(el) => (sectionRefs.current[1] = el)}
          className="section-fade-in"
          sx={{ py: 6, bgcolor: '#f8f8f8' }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              textAlign="center"
              sx={{
                mb: 4,
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 'bold',
              }}
            >
              OUR STORY
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
                mb: 2,
                textAlign: 'center',
              }}
            >
              Founded in 1990, our restaurant has been serving exceptional cuisine with a focus on quality ingredients and memorable dining experiences. Our chefs bring creativity and passion to every dish, blending traditional techniques with modern flair.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
                textAlign: 'center',
              }}
            >
              We believe in supporting local farmers and producers, ensuring the freshest seasonal ingredients make it to your plate. Our commitment to excellence has earned us numerous awards and, more importantly, loyal customers who return time and again.
            </Typography>
          </Container>
        </Box>

        {/* Featured Menu Items */}
        <Box
          ref={(el) => (sectionRefs.current[2] = el)}
          className="section-fade-in"
          sx={{ py: 6 }}
        >
          <Container>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              textAlign="center"
              sx={{
                mb: 4,
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 'bold',
              }}
            >
              FEATURED MENU ITEMS
            </Typography>
            <Grid container spacing={3}>
              {featuredItems.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card className="card-hover">
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ p: 2 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 'bold',
                          mb: 1,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{
                          mb: 1,
                          lineHeight: 1.4,
                        }}
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 'bold',
                          color: '#d4af37',
                        }}
                      >
                        {item.price}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => navigate('/menu')}
                        sx={{
                          backgroundColor: '#d4af37',
                          color: '#000',
                          '&:hover': {
                            backgroundColor: '#000',
                            color: '#fff',
                          },
                          py: 1,
                          textTransform: 'none',
                          fontSize: '1rem',
                        }}
                      >
                        Order Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Locations */}
        <Box sx={{ py: 8 }}>
          <Container>
            <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 4 }}>
              OUR LOCATIONS
            </Typography>
            <Grid container spacing={4}>
              {locations.map((location) => (
                <Grid item key={location.id} xs={12} sm={6} md={4}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#d4af37' }}>
                      {location.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOnIcon sx={{ mr: 1 }} />
                      <Typography variant="body1">{location.address}</Typography>
                    </Box>
                    <Typography variant="body1" gutterBottom>{location.city}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <PhoneIcon sx={{ mr: 1 }} />
                      <Typography variant="body1">{location.phone}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon sx={{ mr: 1 }} />
                      <Typography variant="body1">{location.hours}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: '#222', color: '#fff', py: 6, position: 'relative', zIndex: 2 }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ color: '#d4af37' }}>
                  CONTACT US
                </Typography>
                <Typography variant="body2">Email: info@restaurant.com</Typography>
                <Typography variant="body2">Phone: (123) 456-7890</Typography>
                <Typography variant="body2">Corporate Office: 123 Business Ave</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ color: '#d4af37' }}>
                  QUICK LINKS
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', mb: 1, color: 'inherit', '&:hover': { color: '#d4af37' } }}>
                  Careers
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', mb: 1, color: 'inherit', '&:hover': { color: '#d4af37' } }}>
                  Gift Cards
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', mb: 1, color: 'inherit', '&:hover': { color: '#d4af37' } }}>
                  Private Events
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ display: 'block', mb: 1, color: 'inherit', '&:hover': { color: '#d4af37' } }}>
                  Nutrition Info
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ color: '#d4af37' }}>
                  FOLLOW US
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <FacebookIcon sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} />
                  <InstagramIcon sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} />
                  <TwitterIcon sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} />
                  <YouTubeIcon sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} />
                </Box>
                <Typography variant="body2">Sign up for our newsletter</Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #444', textAlign: 'center' }}>
              <Typography variant="body2">
                © 2023 Swagat Foods. All Rights Reserved.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* ChatBot */}
        <ChatBot />
      </Box>
    </Box>
  );
};

export default Home; 