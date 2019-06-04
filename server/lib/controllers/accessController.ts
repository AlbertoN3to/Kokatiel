import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from '../helpers/jwt';

const User = mongoose.model('User', UserSchema);

export class AccessController {

    public createUser(req: Request, res: Response) {
        if (req.body.originUrl && req.body.password) {
            let userData = {
                originUrl: req.body.originUrl,
                password: req.body.password
            }

            bcrypt.hash(userData.password, 10, (err, hash) => {
                if (err) {
                    res.send(err);
                }
                userData.password = hash;
            });

            User.create(userData, (err, user) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.sendStatus(201);
                }
            });
        } else {
            res.sendStatus(400);
        }
    }


    public async login(req: Request, res: Response) {
        if (req.body.originUrl && req.body.password) {
            let userData = {
                originUrl: req.body.originUrl,
                password: req.body.password
            }

            bcrypt.hash(userData.password, 10, (err, hash) => {
                if (err) {
                    res.send(err);
                }
                userData.password = hash;
            });

            await mongoose.models.User.findOne({ originUrl: userData.originUrl }, async (err, user) => {
                if (err) {
                    res.send(err);
                }
                await bcrypt.compare(userData.password, user.password, async (err, result) => {
                    if (result === true) {
                        await jwt.setCookies(res);
                        res.send();
                    } else {
                        res.sendStatus(403);
                    }
                })
            });

        } else {
            res.sendStatus(400);
        }
    }

    public async validateLogin(req: Request, res: Response, next) {
        let jwtString = req.cookies[jwt.COOKIE_JWT_ATTRIBUTE];
        if (!jwtString) {
            res.sendStatus(403);
        }
        let token = null;
        try {
            token = await jwt.verify(jwtString);
        } catch (err) {
            res.sendStatus(403);
        }

        let xsrfToken = req.get(jwt.XSRF_HEADER);
        if(xsrfToken != token.xsrfToken){
            res.sendStatus(403);
        }
        if(next){
            next();
        }
    }
};


