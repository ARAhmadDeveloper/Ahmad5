import { Button } from "@mui/material";



export default function TableItem(props) {
    // const onClickData = (id) => {
    //     // console.log("Clicked",props.item)
    //     alert(id)
    // }
  return (
    
    <tr>
    <td>{props.item?.id}</td>
    <td>{props.item?.name}</td>
    <td>{props.item?.rollNo}</td>
    <td>{props.item?.email}</td>
    <td>
    <Button variant="contained" onClick={()=>props.onClickUpdateHandler(props.item)} color="success">
        Update
      </Button>
      </td>
      <td>

<Button variant="contained" onClick={()=>props.onClickDeleteHandler(props.item.id)} color="success">
        Delete
      </Button>
      </td>
</tr>
  );
}