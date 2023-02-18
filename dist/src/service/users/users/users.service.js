"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Users_1 = require("../../../../entities/Users");
const UserPassword_1 = require("../../../../entities/UserPassword");
const bcrypt = require("bcrypt");
const typeorm_3 = require("@nestjs/typeorm");
const typeorm_4 = require("typeorm");
const UserRoles_1 = require("../../../../entities/UserRoles");
const UserBonusPoints_1 = require("../../../../entities/UserBonusPoints");
const UserMembers_1 = require("../../../../entities/UserMembers");
const UserProfiles_1 = require("../../../../entities/UserProfiles");
let UsersService = class UsersService {
    constructor(usersRepository, userRolesRepository, userPasswordRepository, userBonusPointsRepository, userMembersRepository, userProfilesRepository, connection) {
        this.usersRepository = usersRepository;
        this.userRolesRepository = userRolesRepository;
        this.userPasswordRepository = userPasswordRepository;
        this.userBonusPointsRepository = userBonusPointsRepository;
        this.userMembersRepository = userMembersRepository;
        this.userProfilesRepository = userProfilesRepository;
        this.connection = connection;
    }
    async findAllUsers() {
        return await this.usersRepository.find({
            order: { userId: -1 }
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async findAllJoinUsers() {
        return await this.usersRepository.query(`
            SELECT * FROM users.users uuu
            LEFT JOIN users.user_roles uur ON uur.usro_user_id = uuu.user_id 
            LEFT JOIN users.roles ur ON ur.role_id = uur.usro_role_id
            LEFT JOIN users.user_bonus_points uubp ON uubp.ubpo_user_id = uuu.user_id
            LEFT JOIN users.user_password uup ON uup.uspa_user_id = uuu.user_id
            LEFT JOIN users.user_members uum ON uum.usme_user_id = uuu.user_id
            LEFT JOIN master.members mm ON mm.memb_name = uum.usme_memb_name
            LEFT JOIN users.user_profiles uups ON uups.uspro_user_id = uuu.user_id
            ORDER BY user_id DESC
        `).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async findOneUser(id) {
        return await this.usersRepository.findOne({
            where: { userId: id },
            relations: [
                "userRoles",
                "userPassword",
                "userBonusPoints",
                "userMembers",
                "userProfiles",
            ]
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async findOneJoinAllUser(id) {
        return await this.usersRepository.query(`
            SELECT * FROM users.users uuu
            LEFT JOIN users.user_roles uur ON uur.usro_user_id = uuu.user_id 
            LEFT JOIN users.roles ur ON ur.role_id = uur.usro_role_id
            LEFT JOIN users.user_bonus_points uubp ON uubp.ubpo_user_id = uuu.user_id
            LEFT JOIN users.user_password uup ON uup.uspa_user_id = uuu.user_id
            LEFT JOIN users.user_members uum ON uum.usme_user_id = uuu.user_id
            LEFT JOIN master.members mm ON mm.memb_name = uum.usme_memb_name
            LEFT JOIN users.user_profiles uups ON uups.uspro_user_id = uuu.user_id
            WHERE uuu.user_id = ${id}
        `)
            .then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async createUsers(data) {
        let now = new Date();
        return await this.usersRepository.save({
            userFullName: data.userFullName,
            userType: data.userType,
            userCompanyName: data.userCompanyName,
            userEmail: data.userEmail,
            userPhoneNumber: data.userPhoneNumber,
            userModifiedDate: now
        }).then((result) => {
            if (!result) {
                throw new common_1.BadRequestException('Data insert failed');
            }
            return {
                message: 'Data inserted successfully',
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async createUserWithPassword(data1, data2) {
        const manager = this.usersRepository.manager;
        try {
            let savedUser;
            let savedUserPassword;
            let IDuser;
            await manager.transaction(async (transactionalEntityManager) => {
                const user = new Users_1.Users();
                user.userFullName = data1.userFullName;
                user.userType = data1.userType;
                user.userCompanyName = data1.userCompanyName;
                user.userEmail = data1.userEmail;
                user.userPhoneNumber = data1.userPhoneNumber;
                user.userModifiedDate = new Date();
                savedUser = await transactionalEntityManager.save(user)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data users insert failed');
                    }
                    IDuser = result.userId;
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(data2.uspaPasswordhash, salt);
                const userPassword = new UserPassword_1.UserPassword();
                userPassword.uspaUserId = IDuser;
                userPassword.uspaPasswordhash = hashedPassword;
                userPassword.uspaPasswordsalt = 'bcrypt';
                savedUserPassword = await transactionalEntityManager.save(userPassword)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data insert failed');
                    }
                    return {
                        message: 'Data inserted successfully',
                        results: result
                    };
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
            });
            return {
                message: 'Data inserted successfully',
                allResults: { savedUser, savedUserPassword },
            };
        }
        catch (err) {
            throw err;
        }
    }
    async createUserPasswordRoles(dataUsers, dataUserRoles, dataUserPassword) {
        const manager = this.usersRepository.manager;
        try {
            let savedUser;
            let savedUserRoles;
            let savedUserPassword;
            let IDuser;
            await manager.transaction(async (transactionalEntityManager) => {
                const users = new Users_1.Users();
                users.userFullName = dataUsers.userFullName;
                users.userType = dataUsers.userType;
                users.userCompanyName = dataUsers.userCompanyName;
                users.userEmail = dataUsers.userEmail;
                users.userPhoneNumber = dataUsers.userPhoneNumber;
                users.userModifiedDate = new Date();
                savedUser = await transactionalEntityManager.save(users)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data users insert failed');
                    }
                    IDuser = result.userId;
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                const userRoles = new UserRoles_1.UserRoles();
                userRoles.usroUserId = IDuser;
                userRoles.usroRole = dataUserRoles.usroRole;
                savedUserRoles = await transactionalEntityManager.save(userRoles)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userRoles insert failed');
                    }
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(dataUserPassword.uspaPasswordhash, salt);
                const userPassword = new UserPassword_1.UserPassword();
                userPassword.uspaUserId = IDuser;
                userPassword.uspaPasswordhash = hashedPassword;
                userPassword.uspaPasswordsalt = 'bcrypt';
                savedUserPassword = await transactionalEntityManager.save(userPassword)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userPassword insert failed');
                    }
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
            });
            return {
                message: 'Data inserted successfully',
                allResults: { savedUser, savedUserRoles, savedUserPassword },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async createAllJoinToUsers(dataUsers, dataUserRoles, dataUserPassword, dataUserBonusPoints, dataUserMembers, dataUserProfiles) {
        const manager = this.usersRepository.manager;
        try {
            let savedUser;
            let savedUserRoles;
            let savedUserPassword;
            let savedUserBonusPoints;
            let savedUserMembers;
            let savedUserProfiles;
            let IDuser;
            await manager.transaction(async (transactionalEntityManager) => {
                const users = new Users_1.Users();
                users.userFullName = dataUsers.userFullName;
                users.userType = dataUsers.userType;
                users.userCompanyName = dataUsers.userCompanyName;
                users.userEmail = dataUsers.userEmail;
                users.userPhoneNumber = dataUsers.userPhoneNumber;
                users.userModifiedDate = new Date();
                savedUser = await transactionalEntityManager.save(users)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data users insert failed');
                    }
                    IDuser = result.userId;
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                const userRoles = new UserRoles_1.UserRoles();
                userRoles.usroUserId = IDuser;
                userRoles.usroRole = dataUserRoles.usroRole;
                savedUserRoles = await transactionalEntityManager.save(userRoles)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userRoles insert failed');
                    }
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(dataUserPassword.uspaPasswordhash, salt);
                const userPassword = new UserPassword_1.UserPassword();
                userPassword.uspaUserId = IDuser;
                userPassword.uspaPasswordhash = hashedPassword;
                userPassword.uspaPasswordsalt = 'bcrypt';
                savedUserPassword = await transactionalEntityManager.save(userPassword)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userPassword insert failed');
                    }
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                const userBonusPoints = new UserBonusPoints_1.UserBonusPoints();
                userBonusPoints.ubpoUser = IDuser;
                userBonusPoints.ubpoTotalPoints = dataUserBonusPoints.ubpoTotalPoints;
                userBonusPoints.ubpoBonusType = dataUserBonusPoints.ubpoBonusType;
                userBonusPoints.ubpoCreateOn = new Date();
                savedUserBonusPoints = await transactionalEntityManager.save(userBonusPoints)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userBonusPoints insert failed');
                    }
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                const userMembers = new UserMembers_1.UserMembers();
                userMembers.usmeUserId = IDuser;
                userMembers.usmeMembName = dataUserMembers.usmeMembName;
                userMembers.usmePromoteDate = new Date();
                userMembers.usmePoints = dataUserMembers.usmePoints;
                userMembers.usmeType = dataUserMembers.usmeType;
                savedUserMembers = await transactionalEntityManager.save(userMembers)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userMembers insert failed');
                    }
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                const userProfiles = new UserProfiles_1.UserProfiles();
                userProfiles.usproUser = IDuser;
                userProfiles.usproNationalId = dataUserProfiles.usproNationalId;
                userProfiles.usproBirth = dataUserProfiles.usproBirth;
                userProfiles.usproJobTitle = dataUserProfiles.usproJobTitle;
                userProfiles.usproMaritalStatus = dataUserProfiles.usproMaritalStatus;
                userProfiles.usproGender = dataUserProfiles.usproGender;
                userProfiles.usproAddr = dataUserProfiles.usproAddr;
                savedUserProfiles = await transactionalEntityManager.save(userProfiles)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userProfiles insert failed');
                    }
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
            });
            return {
                message: 'Data inserted successfully',
                allResults: { savedUser, savedUserRoles, savedUserPassword, savedUserProfiles, savedUserMembers, savedUserBonusPoints },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async updateUsers(id, data) {
        let now = new Date();
        return await this.usersRepository.update(id, {
            userFullName: data.userFullName,
            userType: data.userType,
            userCompanyName: data.userCompanyName,
            userEmail: data.userEmail,
            userPhoneNumber: data.userPhoneNumber,
            userModifiedDate: now
        }).then(async (result) => {
            if (!result.affected) {
                throw new common_1.BadRequestException('Data update failed');
            }
            let dataUpdated = await this.usersRepository.findOneBy({ userId: id });
            return {
                message: 'Data updated successfully',
                results: dataUpdated
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async updateUserWithPassword(id, data1, data2) {
        const manager = this.usersRepository.manager;
        try {
            let savedUser;
            let savedUserPassword;
            await manager.transaction(async (transactionalEntityManager) => {
                const user = await this.usersRepository.findOneBy({ userId: id });
                user.userFullName = data1.userFullName;
                user.userType = data1.userType;
                user.userCompanyName = data1.userCompanyName;
                user.userEmail = data1.userEmail;
                user.userPhoneNumber = data1.userPhoneNumber;
                user.userModifiedDate = new Date();
                savedUser = await transactionalEntityManager.save(user)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data users update failed');
                    }
                    return result;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(data2.uspaPasswordhash, salt);
                const userPassword = await this.userPasswordRepository.findOneBy({ uspaUserId: id });
                userPassword.uspaPasswordhash = hashedPassword;
                userPassword.uspaPasswordsalt = 'bcrypt';
                savedUserPassword = await transactionalEntityManager.save(userPassword)
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data update failed');
                    }
                    return {
                        message: 'Data updated successfully',
                        results: result
                    };
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
            });
            return {
                message: 'Data inserted successfully',
                allResults: { savedUser, savedUserPassword },
            };
        }
        catch (err) {
            throw err;
        }
    }
    async updateAllJoinToUsers(id, dataUsers, dataUserRoles, dataUserPassword, dataUserBonusPoints, dataUserMembers, dataUserProfiles) {
        const manager = this.usersRepository.manager;
        let updatedUser;
        let updatedUserRoles;
        let updatedUserPassword;
        let updatedUserBonusPoints;
        let updatedUserMembers;
        let updatedUserProfiles;
        try {
            await manager.transaction(async (transactionalEntityManager) => {
                updatedUser = await transactionalEntityManager.update(Users_1.Users, { userId: id }, {
                    userFullName: dataUsers.userFullName,
                    userType: dataUsers.userType,
                    userCompanyName: dataUsers.userCompanyName,
                    userEmail: dataUsers.userEmail,
                    userPhoneNumber: dataUsers.userPhoneNumber,
                    userModifiedDate: new Date()
                })
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data users update failed');
                    }
                    let dataUserUpdated = this.usersRepository.findOneBy({ userId: id });
                    return dataUserUpdated;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                updatedUserRoles = await transactionalEntityManager.update(UserRoles_1.UserRoles, { usroUserId: id }, {
                    usroRole: dataUserRoles.usroRole
                })
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userRoles update failed');
                    }
                    let dataUserRolesUpdated = this.userRolesRepository.findOneBy({ usroUserId: id });
                    return dataUserRolesUpdated;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                if (dataUserPassword.uspaPasswordhash) {
                    const salt = await bcrypt.genSalt();
                    const hashedPassword = await bcrypt.hash(dataUserPassword.uspaPasswordhash, salt);
                    updatedUserPassword = await transactionalEntityManager.update(UserPassword_1.UserPassword, { uspaUserId: id }, {
                        uspaPasswordhash: hashedPassword,
                        uspaPasswordsalt: 'bcrypt'
                    })
                        .then((result) => {
                        if (!result) {
                            throw new common_1.BadRequestException('Data userPassword update failed');
                        }
                        let dataUserPasswordUpdated = this.userPasswordRepository.findOneBy({ uspaUserId: id });
                        return dataUserPasswordUpdated;
                    }).catch((err) => {
                        return {
                            message: err.message,
                            error: err.name
                        };
                    });
                }
                updatedUserBonusPoints = await transactionalEntityManager.update(UserBonusPoints_1.UserBonusPoints, { ubpoId: id }, {
                    ubpoTotalPoints: dataUserBonusPoints.ubpoTotalPoints,
                    ubpoBonusType: dataUserBonusPoints.ubpoBonusType,
                    ubpoCreateOn: new Date()
                })
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userBonusPoints update failed');
                    }
                    let dataUserBonusPointsUpdated = this.userBonusPointsRepository.findOneBy({ ubpoId: id });
                    return dataUserBonusPointsUpdated;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                updatedUserMembers = await transactionalEntityManager.update(UserMembers_1.UserMembers, { usmeUserId: id }, {
                    usmeMembName: dataUserMembers.usmeMembName,
                    usmePromoteDate: new Date(),
                    usmePoints: dataUserMembers.usmePoints,
                    usmeType: dataUserMembers.usmeType
                })
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userMembers update failed');
                    }
                    let dataUserMembersUpdated = this.userMembersRepository.findOneBy({ usmeUserId: id });
                    return dataUserMembersUpdated;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                updatedUserProfiles = await transactionalEntityManager.update(UserProfiles_1.UserProfiles, { usproId: id }, {
                    usproNationalId: dataUserProfiles.usproNationalId,
                    usproBirth: dataUserProfiles.usproBirth,
                    usproJobTitle: dataUserProfiles.usproJobTitle,
                    usproMaritalStatus: dataUserProfiles.usproMaritalStatus,
                    usproGender: dataUserProfiles.usproGender,
                    usproAddr: dataUserProfiles.usproAddr,
                })
                    .then((result) => {
                    if (!result) {
                        throw new common_1.BadRequestException('Data userProfiles update failed');
                    }
                    let dataUserProfilesUpdated = this.userProfilesRepository.findOneBy({ usproId: id });
                    return dataUserProfilesUpdated;
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
            });
            return {
                message: 'Data updated successfully',
                allResults: { updatedUser, updatedUserRoles, updatedUserPassword, updatedUserBonusPoints, updatedUserMembers, updatedUserProfiles },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUsers(id) {
        return await this.usersRepository.delete(id)
            .then((result) => {
            if (!result.affected) {
                throw new common_1.NotFoundException('Data not found');
            }
            else {
                return {
                    message: `Data deleted with ID : ${id} successfully`
                };
            }
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async deleteAllJoinToUsers(id) {
        const manager = this.usersRepository.manager;
        let deletedUser;
        let deletedUserRoles;
        let deletedUserPassword;
        let deletedUserBonusPoints;
        let deletedUserMembers;
        let deletedUserProfiles;
        try {
            await manager.transaction(async (transactionalEntityManager) => {
                deletedUser = await transactionalEntityManager.delete(Users_1.Users, { userId: id })
                    .then((result) => {
                    if (!result.affected) {
                        throw new common_1.BadRequestException('Data users update failed');
                    }
                    return {
                        message: `Data users deleted with ID : ${id} successfully`
                    };
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                deletedUserRoles = await transactionalEntityManager.delete(UserRoles_1.UserRoles, { usroUserId: id })
                    .then((result) => {
                    if (!result.affected) {
                        throw new common_1.BadRequestException('Data userRoles update failed');
                    }
                    return {
                        message: `Data userRoles deleted with ID : ${id} successfully`
                    };
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                deletedUserPassword = await transactionalEntityManager.delete(UserPassword_1.UserPassword, { uspaUserId: id })
                    .then((result) => {
                    if (!result.affected) {
                        throw new common_1.BadRequestException('Data userPassword update failed');
                    }
                    return {
                        message: `Data userPassword deleted with ID : ${id} successfully`
                    };
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                deletedUserBonusPoints = await transactionalEntityManager.delete(UserBonusPoints_1.UserBonusPoints, { ubpoId: id })
                    .then((result) => {
                    if (!result.affected) {
                        throw new common_1.BadRequestException('Data userBonusPoints update failed');
                    }
                    return {
                        message: `Data userBonusPoints deleted with ID : ${id} successfully`
                    };
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                deletedUserMembers = await transactionalEntityManager.delete(UserMembers_1.UserMembers, { usmeUserId: id })
                    .then((result) => {
                    if (!result.affected) {
                        throw new common_1.BadRequestException('Data userMembers update failed');
                    }
                    return {
                        message: `Data userMembers deleted with ID : ${id} successfully`
                    };
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
                deletedUserProfiles = await transactionalEntityManager.delete(UserProfiles_1.UserProfiles, { usproId: id })
                    .then((result) => {
                    if (!result.affected) {
                        throw new common_1.BadRequestException('Data userProfiles update failed');
                    }
                    return {
                        message: `Data userProfiles deleted with ID : ${id} successfully`
                    };
                }).catch((err) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });
            });
            return {
                message: 'Data deleted successfully',
                allResults: { deletedUser, deletedUserRoles, deletedUserPassword, deletedUserProfiles, deletedUserMembers, deletedUserBonusPoints },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findEmail(email) {
        return await this.usersRepository.findOneBy({ userEmail: email });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Users_1.Users)),
    __param(1, (0, typeorm_1.InjectRepository)(UserRoles_1.UserRoles)),
    __param(2, (0, typeorm_1.InjectRepository)(UserPassword_1.UserPassword)),
    __param(3, (0, typeorm_1.InjectRepository)(UserBonusPoints_1.UserBonusPoints)),
    __param(4, (0, typeorm_1.InjectRepository)(UserMembers_1.UserMembers)),
    __param(5, (0, typeorm_1.InjectRepository)(UserProfiles_1.UserProfiles)),
    __param(6, (0, typeorm_3.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_4.Connection])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map