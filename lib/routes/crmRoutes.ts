import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController";
import { NextFunction } from 'express';
// All request will be have the key 'secret' on the request.
// For example: localhost:3000/contact?key=secret
export class Routes {
    public contactController: ContactController = new ContactController();
    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Hello World! (From get)'
                })
            })

        // Contact 
        app.route('/contact')
            // GET endpoint 
            .get(this.middleware(), this.contactController.getContacts)
            // POST endpoint
            .post(this.middleware(), this.contactController.addNewContact);

        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.middleware(), this.contactController.getContactWithID)
            // update
            .put(this.middleware(), this.contactController.updateContact)
            // delete
            .delete(this.middleware(), this.contactController.deleteContact)
    }

    public middleware() {
        return (req: Request, res: Response, next: NextFunction) => {
            // middleware          
            if (req.query.key !== 'secret') {
                res.status(401).send('Not allowed');
            } else {
                next();
            }
        }
    }
}