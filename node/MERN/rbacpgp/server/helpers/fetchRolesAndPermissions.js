import { UserRole,Role, RolePermission, Permission } from "../models/index.js";

export default async function fetchRolesAndPermissions(req){
  const userRoles = await UserRole.find({
    userId :req.user._id
  })
  let roles = {};
(await Role.find({
    _id: {$in : userRoles.map(({roleId})=>roleId)}
})).forEach(({role})=>{
    roles[role] = true
})
 let permissions = {};
 var rolePermissions = await RolePermission.find({
    roleId : {$in :userRoles.map(({roleId})=>roleId)}
 })
 
  if(rolePermissions.length){
    (await Permission.find({
        _id : {$in : rolePermissions.map(({permissionId})=>permissionId)}
      })).forEach(({action,subject})=>{
        if(!permissions[subject]){
            permissions[subject] = {}
            permissions[subject][action] =true
        }else {
            permissions[subject][action] = true
        }
      })
  }

 return {roles,permissions}
}


// {
//  roles : {
//     standard:true,
//     premium : true
//  }

// }