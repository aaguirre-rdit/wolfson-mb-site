import React, {useState} from 'react';
import styled from 'styled-components';
import { Dialog, Typography, Slide, DialogTitle, DialogContent } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
const Card = styled.div`
  width: ${props => props.isPresident? '80%':'200px'};
  height: 120px;
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
    transition: box-shadow .3s, width 0.3s, padding 0.3s;
  }
`
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
        <Dialog
          maxWidth={'md'}
          open={pop}
          onClose={handleClickOpen}
          onBackdropClick={handleClickOpen}
          TransitionComponent={Transition}
        >
          <button onClick={handleClickOpen}>

            <CloseIcon />
          </button>
          <DialogTitle style={{textAlign:'center'}}>
          {item.names.map(name =>(
            <Typography variant={'body2'}>{name}</Typography>
          ))}
          </DialogTitle>
          <hr/>
          <DialogContent>
          <Typography variant={'p1'}>
            <a style={{textDecoration:'none'}}href={`mailto:${item.email}`}>{item.email}</a>
          </Typography>
          </DialogContent>
        </Dialog>

      <Typography variant={'body1'} align={'center'} style={{width:'100%'}}>{item.title}</Typography>
    </Card>
  )
}

export default ComCard;
