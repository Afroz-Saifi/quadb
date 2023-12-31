module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_name: DataTypes.STRING,
        user_email: {
            type: DataTypes.STRING,
            unique: true,
        },
        user_password: DataTypes.STRING,
        user_image: DataTypes.STRING,
        total_orders: DataTypes.INTEGER,
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, // Set the default value to the current date and time
        },
        last_logged_in: DataTypes.DATE,
    });
    return Users;
};
