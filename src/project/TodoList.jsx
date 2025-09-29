import { MdCheck, MdDelete } from "react-icons/md"

export const TodoList=({data,handleDelete,onHandleChecked,checked})=>{
    return (

        <li className='list' >
                            <span className={`${'span'} ${checked?"checkedList":"NoCheckedList"}`}>{data}</span>
                            <div className='div-btn'>
                                <button className='btn-1' onClick={()=>onHandleChecked(data)}><MdCheck /></button>
                                <button className='btn-2' onClick={()=>handleDelete(data)}><MdDelete /></button>
                            </div>

                        </li>
    )
}