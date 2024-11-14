'use client'

import RoleProtection from "@/services/Unauthorized"

const editProfile = ()=> {

}
export default RoleProtection(editProfile,['customer'])