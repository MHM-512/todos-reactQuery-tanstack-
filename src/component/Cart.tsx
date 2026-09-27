
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';
import type { Todo } from '../entities/Todo';
import { useState } from 'react';
import { Box } from '@mui/material';
interface CartProps {
  todo: Todo;
}

export default function Cart({ todo }: CartProps) {
  const [checked, setChecked] = useState(todo.complated)
  const handleToggle = () => {
    setChecked((prev) => !prev)
  };

  return (
    <Box sx={{width : '100%', display :'flex', justifyContent:'center', alignItems:'center'}}>
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>

        <MenuItem
          role="menuitemcheckbox"
          selected={checked}
          onClick={handleToggle}
        >
          <ListItemIcon>
            {checked ? <Check fontSize="small" /> : null}
          </ListItemIcon>
          <ListItemText>{todo.title}</ListItemText>
     
        </MenuItem>
      </MenuList>
    </Paper>
    </Box>
  );
}
