import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { addTodo, fetchTodos } from './index'
import TextField from '@mui/material/TextField';
import Cart from "./Cart"
import { useState } from "react"
import { Box, Button, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


export default function Demo() {
    const queryClient = useQueryClient()
    const [title, setTitle] = useState('')
    const { data: todos, isPending } = useQuery({
        queryFn: () => fetchTodos(),
        queryKey: ['todos'],

    })
    const { mutateAsync: addTodoMutaion } = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    })


    if (isPending) return <Typography variant="overline" sx={{display:'flex', justifyContent:'center' , alignItems :'center'}}>loading...</Typography>
    return (
        <div>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TextField type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <Button variant="contained" onClick={async () => {
                    await addTodoMutaion({ title })
                    setTitle('')
                }}> <AddIcon />add todo </Button>
            </Box>
            {
                todos?.map(todo => {
                    return <Cart key={todo.id} todo={todo} />
                })

            }

        </div>
    )
}