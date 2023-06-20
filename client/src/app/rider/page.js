'use client'
import Link from 'next/link'
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
const RiderDashboard = ()=> {
    return (
        <div>
            <Link href="/rider/add-items">Add Items</Link>
            <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
    </Stack>
        </div>
    )
}
export default RiderDashboard