import role from "../database/models/role";
export  const createRoles = async() => {
    try {
        const count = await role.estimatedDocumentCount();
        if(count > 0) return;
        const data = await Promise.all([
            new role({name: "user"}).save(),
            new role({ name: "moderator" }).save(),
            new role({ name: "admin" }).save()
        ]);
        return console.log(data);
        
    } catch (error) {
        return console.log(error);
    }
};