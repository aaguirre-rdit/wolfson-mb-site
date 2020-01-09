import React, {useState} from 'react';
import styled from 'styled-components';
import { Dialog, Typography, Zoom, DialogTitle, DialogContent } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
const Card = styled.div`
  width: ${props => props.isPresident? '80%':'200px'};
  height: 120px !important;
  margin:10px;
  padding:10px;
  align-items:center;
  display:flex;
  justify-content:center;
  border:1px solid rgba(255,255,255, 0.3);
  border-radius:5px;
  @media (max-width: 580px) {
    width:80%;
  }
  :hover{
    width: ${props => props.isPresident? '81%':'205px'};
    padding:12px;
    box-shadow: 0px -1px 12px rgba(255,255,255,0.5);
    text-shadow: 2px 1px 5px rgba(255,255,255,0.64);
    transition: box-shadow .3s, width 0.3s, padding 0.3s;
    cursor:pointer;
  }
`
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});
const Modal = styled(Dialog)`
  div.MuiPaper-root {
  color:white;
 background: rgb(133,194,194);
background: linear-gradient(201deg, rgba(133,194,194,1) 0%, rgba(176,142,95,1) 46%, rgba(195,118,169,1) 100%);
 box-shadow:10px  10px 10px rgba(0,0,0,0.3);
  }
  div..MuiDialogTitle-root{
    padding:unset;
  }
`
 const ComCard = (props) => {
  const {item,cardKey} = props;
  const [pop, setPop] = useState(false);
  const handleClickOpen = () => {
    !pop ? setPop(true) : setPop(false)
  };
  return(
    <Card
      isPresident={cardKey===0}
      onClick={handleClickOpen}>
        <Modal
          maxWidth={'md'}
          open={pop}
          onClose={handleClickOpen}
          onBackdropClick={handleClickOpen}
          TransitionComponent={Transition}
        >

          <div style={{display:'flex',flexDirection:'row'}}>
            <button
              style={{
                border:'none',
                background:'transparent',
                position:'absolute',
                top:'20px',


              }}
              onClick={handleClickOpen}>

              <CloseIcon style={{
                width:'20px',
                height:'20px'
              }} />
            </button>
          <DialogTitle
            style={{
              fontWeight:'bold',
              textAlign:'center',
              height:'60px',
              padding:0,
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              flex:1}}>
          {item.names.map(name =>(
            <Typography style={{fontWeight:'bold'}} variant={'body2'}>{name}</Typography>
          ))}
          </DialogTitle>
          </div>
          <hr style={{backgroundColor:'rgba(255,255,255,0.2)'}}/>
          <DialogContent style={{paddingBottom:'30px'}}>
          <Typography variant={'p2'}>
            <a
              style={{
                textDecoration:'none',
                fontStyle:'italic',
                color:'white'
              }}
              href={`mailto:${item.email}`}>
              {item.email}
            </a>
          </Typography>
          </DialogContent>
        </Modal>

      <Typography
        variant={'body1'}
        align={'center'}
        style={{width:'100%'}}>{item.title}</Typography>
    </Card>
  )
}

export default ComCard;
