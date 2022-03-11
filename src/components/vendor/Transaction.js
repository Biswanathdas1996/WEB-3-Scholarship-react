import {Timeline}from'react-material-timeline';
import {Avatar,Icon}from'@material-ui/core';
const events=[
    {title:'Event1',subheader:newDate().toDateString(),description:['Somedescriptionforevent1'],icon:<Avatar><Icon>work</Icon></Avatar>,},
    {title:'Event2',subheader:newDate().toDateString(),description:['Somedescriptionforevent2'],icon:<Avatar><Icon>home</Icon></Avatar>,}];
export default function Transaction(){
    return <Timeline events={events}/>;
}