import { model } from "mongoose";
import RoleScehma from "./role/index.js";
import PermissionSchema from "./permission/index.js"
import RolePermissionSchema from "./rolePermission/index.js"
import UserSchema from "./user/index.js";
import UserRoleScehma from "./user_role/index.js"
import SongSchema from  "./song/index.js"

export const Role = model("Role",RoleScehma);
export const Permission = model("Permission",PermissionSchema);
export const RolePermission = model("rolePermission",RolePermissionSchema)
export const User = model("User",UserSchema)
export const UserRole = model("UserRole",UserRoleScehma);
export const Song = model("Song",SongSchema)
