module.exports = (sequelize, DataTypes) => {
    const Auths = sequelize.define("Auths", {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_email: {
            type: DataTypes.STRING,
            unique: true,
        },
        user_password: DataTypes.STRING
    });
    return Auths;
};
