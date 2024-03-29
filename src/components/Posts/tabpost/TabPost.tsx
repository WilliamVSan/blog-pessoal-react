import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListPost from '../listpost/ListPost';

import './TabPost.css';

function TabPost() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar className='appbar' position="static">
          <Tabs className='tabs' centered onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel className='fundoSobre' value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListPost />
          </Box>
        </TabPanel>
        <TabPanel className='fundoSobre' value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="sobre">"Sobre-mim"</Typography>
          <Typography className='white' variant="body1" gutterBottom align="justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et, vel ratione beatae, facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci, officia aut quidem dolorum deserunt iure dolorem doloribus velit nobis quas consequatur at ullam odit, nesciunt est nulla nihil excepturi!</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPost;