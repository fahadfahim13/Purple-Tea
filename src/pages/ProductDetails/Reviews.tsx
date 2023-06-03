import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import p1 from 'media/images/p1.png';
import p2 from 'media/images/p2.png';
import p3 from 'media/images/p3.png';

export default function Reviews() {
  return (
    <List sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>
        <h1 style={{ textAlign: 'center', textDecorationStyle: 'double', textDecoration: 'underline' }}>Reviews</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={p1} />
        </ListItemAvatar>
        <ListItemText
          primary="It has been a great experience with Quali-Tea. Very good product. I bought 3 tea bags and I got all of them in time and the tea is amazing."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* Ali Connors */}
              </Typography>
              {" — Ali Connors "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={p2} />
        </ListItemAvatar>
        <ListItemText
          primary="I was amazed with the quality of the tea these guys provide. Really appreciate the effort. I got huge health benefits after drinking this tea."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* Jennifer */}
              </Typography>
              {" — Jennifer "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={p3} />
        </ListItemAvatar>
        <ListItemText
          primary="I have bought the premium box for my wife and I'm very pleased with the product. It has been our favorite tea since then. It helped me a lot to lose almost 10 pounds weight."
          secondary={
            <React.Fragment>

              {' — Alex '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
