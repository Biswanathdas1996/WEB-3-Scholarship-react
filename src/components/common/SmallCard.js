import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const SmallCard = (props) => (
  <Card {...props} style={{height: "50px"}}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            {props.name}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);