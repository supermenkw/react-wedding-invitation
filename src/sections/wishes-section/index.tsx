import React, { useEffect, useState } from 'react'
import firebase from '../../firebase/firebase';
import { WishesSectionWrapper } from './styled-components';
import { Stack, TextField, Typography, Button, Box, Card, CardContent, FormLabel, FormControlLabel, Radio, FormControl, RadioGroup } from '@mui/material'
import { timeAgo } from '../../helper/date';
import { convertObjToArray } from '../../helper/object';
import { iusers } from '../../interface/iusers';
import { toast } from 'react-toastify';

type Props = {
    guest: iusers | undefined
}

export const WishesSection: React.FC<Props> = ({guest}) => {
    const [wishes, setWishes] = useState<any[]>([]);
    const [wish, setWish] = useState('');
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [numWishesToShow, setNumWishesToShow] = useState<number>(5);
    const [willingness, setWillingness] = useState(guest && guest.willingness ? guest.willingness : '');
    const guestName = guest && guest.name ? guest.name : 'Anonymous'
    const dataRefWishes = firebase.ref('/wishes'); 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };

    const controlProps = (item: string) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });

    const onSubmitWish = (event: any) => {
        event.preventDefault();

        try {
            const time = Date.now();
            if(!willingness) toast(<Typography textAlign='center'>Do you able to join the wedding party ?</Typography>)
            else {
              if(willingness && guest && guest.id) {
                  dataRefWishes.push({ message: wish, timestamp: time, userId: guest.id, userName: guest.name })
                  if(willingness === 'yes') toast(<Typography textAlign='center'>You rocked our world! Thanks and see you in our wedding</Typography>)
                  else if(willingness === 'no') toast(<Typography textAlign='center'>Thanks and see you in another day</Typography>)
                  setWish('')
              }

              if(willingness && guest && guest.id) {
                  firebase.ref(`users/${guest.id}`).update({
                      ...guest,
                      willingness: willingness
                  })
              }
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        dataRefWishes.on('value', (snapshot) => {
            const dataSnapshot = snapshot.val();

            if (dataSnapshot) {
                const objToArray: any = convertObjToArray(dataSnapshot)
                const sorted = objToArray.toSorted((a: any, b: any) => b.timestamp - a.timestamp)
                setWishes(sorted);
            }
          });
    
        return () => {
            dataRefWishes.off();
        };
      }, []); 

    return <WishesSectionWrapper className='wishes-section'>
        <Stack direction='column' justifyContent='center' alignItems='center' paddingX={{ xs: 1, md: 30 }} paddingY={3} spacing={2}>
            <Typography align='center' className={`cover-couple-title molde-condensed-bold-italic wishes-title`} fontSize={{ xs: '1.5rem', md: '2rem' }}>YOUR WISHES</Typography>
            <TextField value={wish} multiline label={`Hi ${guestName}, please give us your warmest wishes`} fullWidth onChange={(e) => setWish(e.target.value)} />
            <Stack direction='column' justifyContent='flex-start' spacing={2} width='100%'>
                <FormLabel id="demo-row-radio-buttons-group-label" style={{ color: '#E9FCFF' }}>Do you able to join the wedding party ?</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={willingness}
                    onChange={(event) => setWillingness(event.target.value)}
                >
                    <FormControlLabel value="yes" control={<Radio
                        {...controlProps('yes')}
                        sx={{
                          color: '#E9FCFF',
                          '&.Mui-checked': {
                            color: '#E9FCFF',
                          },
                        }}
                      />} label="Yes"  />
                    <FormControlLabel value="no" control={<Radio
                        {...controlProps('no')}
                        sx={{
                          color: '#E9FCFF',
                          '&.Mui-checked': {
                            color: '#E9FCFF',
                          },
                        }}
                      />} label="No"   />
                </RadioGroup>
            </Stack>
            <Button
                variant='outlined' 
                style={{ borderColor: '#E9FCFF', color: '#E9FCFF' }}
                onClick={onSubmitWish}
            >Send
            </Button>
            <Stack direction='column' justifyContent='flex-start' spacing={2} width='100%'>
                {
                    !!wishes.filter(d => d.message).length && wishes.filter(d => d.message).slice(0, numWishesToShow).map((wish: any, index) => {
                        return <Card key={`${wish.name}_${index + 1}`} data-aos="flip-down" data-aos-duration="500">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{wish.userName}</Typography>
                                <Typography color='#000' sx={{ mb: 1.5 }}>{wish.message}</Typography>
                                <Typography variant="body2" color="text.secondary">{timeAgo(wish.timestamp)}</Typography>
                            </CardContent>
                        </Card>
                    })
                }
                {wishes.filter(d => d.message).length > numWishesToShow && 
                    <Button     
                        variant="outlined"
                        style={{ borderColor: '#E9FCFF', color: '#E9FCFF' }}
                        onClick={() => setNumWishesToShow(numWishesToShow + 5)}
                    >Show more comments
                    </Button>
                }

            </Stack>
        </Stack>
    </WishesSectionWrapper>
}